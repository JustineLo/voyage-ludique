import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Box p={2}>
            <Typography component="div">
                Game Tracker
            </Typography>
            </Box>
        </AppBar>
    )
}

export default Navbar;