import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import AudioToText from './RecordAudio'
import TextCard from './TextCard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
function Conversations() {
    return (
        <Grid container sx={{backgroundColor:"#f5f5f5"}}>
             <Grid container xs={12} boxShadow='0px 3px 3px 0px #0000001c' justifyContent='space-between' padding="5px 15px" >
                <Box textAlign={"left"}>
                <Typography variant="subtitle2">Unknown</Typography>
                <Typography variant='body2'>unknown condition .7 minute ago</Typography>
                </Box>
                <Box>

                <Button variant='outlined' size='small' startIcon={<ContentCopyIcon/>}>Copy all</Button>
                </Box>
            </Grid>
            <Grid item marginTop={2} xs={12}>
                <AudioToText />
                <TextCard/>
            </Grid>
        </Grid>
    )
}

export default Conversations