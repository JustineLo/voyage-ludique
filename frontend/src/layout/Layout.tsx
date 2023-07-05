import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (<>
        <Navbar />
        <Container>
            <Box mt={2}>
                {children}
            </Box>
        </Container>
    </>
        
    )
}

export default Layout;