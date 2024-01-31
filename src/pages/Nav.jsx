import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

function appBarLabel(label) {
    return (
        <Toolbar>
            <Box display={"flex"}>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    {label}
                </Typography>
            </Box>
        </Toolbar>
    );
}



export default function EnableColorOnDarkAppBar() {
    return (
        <AppBar position="fixed" color="primary" enableColorOnDark>
            {appBarLabel('Freed')}
        </AppBar>

    );
}
