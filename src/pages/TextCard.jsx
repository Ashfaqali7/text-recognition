import { Box, Button, FormControlLabel, FormGroup, Grid, Switch, Typography } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
function TextCard() {
  return (
    <Box >
         <Accordion defaultExpanded style={{ background: 'white', color:"black",border:"1px solid #ccc",margin:"20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"black"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
            <Typography variant='subtitle1'>Subjective</Typography>
         
        </AccordionSummary>
        <AccordionDetails style={{ background: 'white',color:"black" }}>
         <Box sx={{border:"1px solid #ccc",borderRadius:"5px"}}>
            <Typography textAlign='left' padding='10px' variant='body2'>
            The patient did not provide any specific chief complaint, history of present illness, or relevant information about their symptoms, feelings, and experiences during this visit. The conversation consisted of unrelated topics and personal anecdotes. Further assessment is needed to determine the patient's medical concerns and needs.
            </Typography>
         </Box>
         <Grid marginTop={2} display="flex" justifyContent="space-between">
<Box sx={{display:"flex",alignItems:"center"}}>
<FormGroup>
  <FormControlLabel control={<Switch />} label={<Typography variant='body2'>Full Transcript</Typography>} />
</FormGroup>
<Box sx={{display:"flex",gap:"10px"}}>
    <ThumbUpOffAltIcon/>
    <ThumbDownOffAltIcon/>
</Box>
</Box>
         <Button variant='outlined' size='small' startIcon={<ContentCopyIcon/>}>Copy all</Button>
         </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default TextCard
