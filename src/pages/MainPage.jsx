import React from 'react'
import { Grid } from '@mui/material';
import Records from './Records';
import Conversations from './Conversations';

function MainPage() {
    return (
        <Grid container marginTop={70} padding={2} width={"100%"}>
            <Grid item xs={4}>
                <Records />
            </Grid>
            <Grid item xs={8}>
                <Conversations />
            </Grid>
        </Grid>
    )
}

export default MainPage