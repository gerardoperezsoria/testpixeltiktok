import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
    Grid
} from '@material-ui/core';
import Typography from '@mui/material/Typography';
// import fondo from "../images/ceducaty.jpg"
import Header from "../mantine/header"
import Footer from '../components/Footer';

const mision = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center" }}
        >
            MISIÓN
        </Typography>
        <hr />
        <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "center" }}
        >
            Incrementar el nivel socioeconómico de las personas mediante la certificación de competencias laborales de SEP-CONOCER.
        </Typography>
    </Paper>
);

const vision = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center" }}
        >
            VISIÓN
        </Typography>
        <hr />
        <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "center" }}
        >
            Incrementar la calidad educativa en México y Latinoamérica mediante la certificación de competencias laborales de SEP-CONOCER
        </Typography>
    </Paper>
);

const nosotros = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center" }}
        >
            NOSOTROS
        </Typography>
        <hr />
        <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "center" }}
        >
            Somos una empresa EDTECH enfocada en la educación en linea.
        </Typography>
        <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: "center" }}
        >
            Número de Acreditación ante SEP-CONOCER CE1274-OC063-18
        </Typography>
    </Paper>
);

export default function SimpleFade() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            <Header />
            <div className='fondonosotros'>
                <Box sx={{ height: "100%" }}>
                    <Grid container justifyContent="center">
                        <Grid xs={10} display="flex" justifyContent="center" alignItems="center">
                            <Fade in={checked}>
                                {nosotros}
                            </Fade>
                        </Grid>
                        <Grid xs={10} display="flex" justifyContent="center" alignItems="center">
                            <Fade in={checked}>
                                {mision}
                            </Fade>
                        </Grid>
                        <Grid xs={10} display="flex" justifyContent="center" alignItems="center">
                            <Fade in={checked}>
                                {vision}
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </>
    );
}