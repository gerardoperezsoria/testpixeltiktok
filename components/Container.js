import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({ id, children, ancla }) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" key={id} id={id}>
                {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}
                    {children}                    
                {/* </Box> */}
            </Container>
        </React.Fragment>
    );
}
