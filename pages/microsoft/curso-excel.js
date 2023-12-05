import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized';
import {
    Grid
} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Header from '../../mantine/header.js'
import Footer from '../../components/Footer.js';
import { useEffect } from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CursoExcel() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        // if (typeof window !== "undefined") {
        // window.addEventListener("beforeunload", function (e) {
        //     var confirmationMessage = "Esta seguro?";
        //     setOpen(true)
        //     e.returnValue = confirmationMessage;
        //     return confirmationMessage;
        // });
        // var ClosingVar = true
        // window.onbeforeunload = ExitCheck;
        // function ExitCheck() {
        //     if (ClosingVar == true) {
        //         ExitCheck = false;
        //         return "IMPORTANTE: Queda pendiente el registro de la instalación para su puesta en servicio.";
        //     }
        // }
        // }
        function window_mouseout(obj, evt, fn) {

            if (obj.addEventListener) {

                obj.addEventListener(evt, fn, false);
            }
            else if (obj.attachEvent) {

                obj.attachEvent('on' + evt, fn);
            }
        }

        window_mouseout(document, 'mouseout', event => {

            event = event ? event : window.event;

            var from = event.relatedTarget || event.toElement;

            // Si quieres que solo salga una vez el mensaje borra lo comentado
            // y así se guarda en localStorage

            let leftWindow = localStorage.getItem('leftWindow') || false;

            if (!leftWindow && (!from || from.nodeName === 'HTML')) {

                // Haz lo que quieras aquí
                // alert( '¿Quieres abandonar mi página?' );
                setOpen(true)
                localStorage.setItem('leftWindow', true);
            }
        });

    }, [])

    return (
        <>
            <Header />
            <div className='bg-portada parallax2'>
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ fontWeight: '900', textAlign: "center", color: "white" }}
                >
                    Bienvenidos al Curso Gratuito de Excel
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        {/* <Paper sx={{ m: 1 }} elevation={4}> */}
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1juTdvPhfVwQW_5c1smpUThs0bWi1Iv_H/preview" allow="autoplay"></iframe>
                        {/* </Paper> */}
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        {/* <Paper sx={{ m: 1 }} elevation={4}> */}
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1G4K-3M95YZdEBiCBpOQON63SGqXO9qft/preview" allow="autoplay"></iframe>
                        {/* </Paper> */}
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        {/* <Paper sx={{ m: 1 }} elevation={4}> */}
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1pCCcC3WdSaIJna3cFVjYaN7kExyB67yk/preview" allow="autoplay"></iframe>
                        {/* </Paper> */}
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        {/* <Paper sx={{ m: 1 }} elevation={4}> */}
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/140E8Bs69a2aldfSvFbMVnUuH3XwtNvQg/preview" allow="autoplay"></iframe>
                        {/* </Paper> */}
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1Pv38Q5KLMJ8KAh3NbfFo_cPrinJroVCF/preview" allow="autoplay"></iframe>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/11AyvhMsc4_-6sAP2TF-nxbh6X2xfzijt/preview" allow="autoplay"></iframe>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1hAYVzT0pgeJgXmuHHk36ZMznnuCxDOCM/preview" allow="autoplay"></iframe>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1M4HM1uDZEwnwMRm235BXaSlNDY6yJvXr/preview" allow="autoplay"></iframe>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                        <iframe style={{ border: "10px solid green" }} src="https://drive.google.com/file/d/1TvBNB9gvP9IA_t5DAd4BrodJ1mnfmDSY/preview" allow="autoplay"></iframe>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={12} sm={12}>
                        <Paper sx={{ m: 1 }} elevation={4}>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                Certificate ante Microsoft Internacional
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                En WORD y EXCEL associate o expert al 2X1
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center", color: "green" }}
                            >
                                $2500 MXN
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                <button className="button is-success"><a href="https://wa.link/18hz2v" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Contacta a un asesor AHORA</a></button>
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                Ya nos conoces somos CEDUCATY y hemos lanzado el RETO ACADÉMICO DE EXCEL en todo México y Latinoamérica
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            <Footer />

            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Paper sx={{ m: 1 }} elevation={4}>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                Certificate ante Microsoft Internacional
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                Certificate en EXCEL Y WORD al
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                2X1
                            </Typography>
                            <Typography
                                variant="h6"
                                component="h6"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                Por tan solo
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                $2500 MXN
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ fontWeight: '900', textAlign: "center" }}
                            >
                                <button className="button is-success"><a href="https://wa.link/18hz2v" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Contacta a un asesor AHORA</a></button>
                            </Typography>
                        </Paper>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default CursoExcel