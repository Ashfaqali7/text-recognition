import { Button, Grid } from '@mui/material'
import React from 'react'
import AudioToText from './RecordAudio'

function Conversations() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <AudioToText />
            </Grid>
        </Grid>
    )
}

export default Conversations