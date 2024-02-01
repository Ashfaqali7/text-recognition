
const apiKey = "api key here";

const prompt = `Below I will give a conversation between doctor and patient you have to do following,
- "First Identify the Doctors speech and Patient speech"
- "Second extract the Subjective as subjective"
- "Third extract objectives as objectives"
- "Fourth Assessment and plan medication as assessment_and_plan_medication"
- "Patient Instruction as patient_instruction"
_ "Summary of prescription as summary_of_prescription"
_ "give me patient name if mentioned in conversation else give unknown as patient_name"
"Notallking"

"Output the response in one Json each point should be identified differently, note the first point should be in conversation format"`

export const analyzeTranscript = async (transcriptData) => {
    const message = prompt + transcriptData.map((text) => text.speech).join(";")
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                temperature: 0.7,
                messages: [{ role: 'system', content: message }]
            })
        });


        const data = await response.json();
        return data.choices[0].message.content
    } catch (error) {
        console.error('Error analyzing transcript:', error);
    }
}
