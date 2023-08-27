import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Box p={2}>
            <Typography component="div" sx={{ color: "white" }}>
                Voyage ludique
            </Typography>
            </Box>
        </AppBar>
    )
}

export default Navbar;