import { Button, Grid } from '@mui/material'
import React from 'react'

function Records() {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Button fullWidth variant="outlined" color='primary'>START A VISIT</Button>
            </Grid>
        </Grid>
    )
}

export default Records