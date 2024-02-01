import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { analyzeTranscript } from '../services/openAIServices';
import MicIcon from '@mui/icons-material/Mic';
const AudioToText = ({ updateRes }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcripts, setTranscripts] = useState([]);
    const mediaRecorderRef = useRef(null);
    const recognitionRef = useRef(null);
    const startTimeRef = useRef(null);

    const handleToggleRecording = () => {
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            const recognition = new window.webkitSpeechRecognition();

            mediaRecorderRef.current = mediaRecorder;
            recognitionRef.current = recognition;
            startTimeRef.current = Date.now();

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    const audioBlob = new Blob([event.data], { type: 'audio/wav' });
                    // Handle the recorded audio blob as needed (e.g., save to server or state)
                    // console.log('Recorded Audio Blob:', audioBlob);
                }
            };

            recognition.continuous = true;
            recognition.onresult = (event) => {
                let items = [];
                for (let index = event.resultIndex; index < event.results.length; index++) {
                    items.push(event.results[index][0].transcript);
                }

                setTranscripts((prevTranscripts) => [
                    ...prevTranscripts,
                    {
                        speech: items.join(' '),
                        start: startTimeRef.current,
                        end: Date.now(),
                    },
                ]);
            };

            recognition.onend = () => {
                if (isRecording) {
                    recognition.start();
                }
            };

            mediaRecorder.start();
            recognition.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };
    const analyizeTrans = async () => {
        const res = await analyzeTranscript(transcripts)
        const result = JSON.parse(res || "{}")
        updateRes(result)
    }
    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
        setIsRecording(false);
        analyizeTrans()
    };
    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };

    const pad = (value) => {
        return value.toString().padStart(2, '0');
    };

    return (
        <div>
            {isRecording ? <>
                <h2>Listening</h2>
                <p>Keep this screen open while speaking to your patient.</p>
            </> : null}
            <Button sx={{ borderRadius: 50 }} startIcon={isRecording ? null : <MicIcon />} variant="contained" color='grey' onClick={handleToggleRecording}>
                {isRecording ? 'END VISIT' : ' CAPTURE CONVERSATION'}
            </Button>
            <Grid padding={2} item xs={12}>
                <strong>Transcriptions:</strong>
                {transcripts.map((item, index) => (
                    <div key={index}>
                        {item.speech}
                    </div>
                ))}
            </Grid>
        </div>
    );
};

export default AudioToText;

