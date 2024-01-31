import React from 'react'
import { Grid, Typography } from '@mui/material';
import Records from './Records';
import Conversations from './Conversations';

function MainPage() {
    return (
        <Grid container marginTop={'70px'}  width={"100%"}>
           
            <Grid item xs={3} borderRight='1px solid #ccc' padding='10px'>
                <Records />
            </Grid>
            <Grid item xs={9}>
                <Conversations />
            </Grid>
        </Grid>
    )
}

export default MainPage