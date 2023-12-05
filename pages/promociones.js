import Appbare from '../components/Appbare.js'
import Container from '../components/Container.js'
import Card from '../components/Card'
import Link from '@mui/material/Link';
import Video from '../components/Video'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Hero2 from '../mantine/hero2'
import ec from '../images/ec.gif'
import bgc from '../images/backgroundceducaty.svg'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



// import Header from '../mantine/header.ts'
import Hero from '../mantine/hero'
import Button from '../mantine/buttons'
import ButtonCustomized from '../elementsMaterialUI/ButtonCustomized'
import {
    Grid
} from '@material-ui/core';
import NavBarBulma from '../components/NavBarBulma'
import Header from '../mantine/header.js'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Promociones() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Header />
            <div style={{ height: '500px' }} className='bg-portada parallax2'>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    Hola, hemos creado una serie de paquetes para ayudarte en tu crecimiento personal
                                </Typography>
                                <br />
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    sx={{ color: 'red' }}
                                >
                                    ¡Solo por tiempo limitado aprovecha!
                                </Typography>
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}></Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div style={{ height: '500px' }} className=''>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            {!matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Doble Certificación
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ color: 'red' }}
                                    >
                                        Combina los estándares a tu manera.
                                    </Typography>
                                </Grid>
                            }
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    $2997 MXN + iva
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Paga en 12 mensualidades con tarjeta de Crédito
                                </Typography>
                                <Typography
                                    variant="P"
                                    component="P"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Después de haber realizado tu pago envianos captura del pago además de nombre completo, dirección física completa, teléfono y correo para agilizar el alta en el sistema de Certificaciones Microsoft.
                                </Typography>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized label="Adquirir esta promocion" url='https://pay.hotmart.com/Q79291205R?off=f1qjadtr' interna={false} />
                                </div>
                                <br />
                                <a href="https://wa.link/t8ek4p" target="_blank" rel="noreferrer">¡Envia tu comprobante de pago AQUÍ!</a>
                            </Grid>
                            {matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Doble Certificación
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ color: 'red' }}
                                    >
                                        Combina los estándares a tu manera.
                                    </Typography>
                                    <br />
                                </Grid>
                            }
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div style={{ height: '500px' }} className=''>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    Triple certificacion
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    sx={{ color: 'red' }}
                                >
                                    Obtienes los estandares EC0217.01, EC0301 y EC0366
                                </Typography>
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    $3500 MXN + iva
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Paga en 12 mensualidades con tarjeta de Crédito
                                </Typography>
                                <Typography
                                    variant="P"
                                    component="P"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Después de haber realizado tu pago envianos captura del pago además de nombre completo, dirección física completa, teléfono y correo para agilizar el alta en el sistema de Certificaciones Microsoft.
                                </Typography>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized label="Adquirir esta promocion" url='https://pay.hotmart.com/Q79291205R?off=vwrjebjn' interna={true} />
                                </div>
                                <br />
                                <a href="https://wa.link/t8ek4p" target="_blank" rel="noreferrer">¡Envia tu comprobante de pago AQUÍ!</a>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div style={{ height: '500px' }} className=''>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            {!matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Certificate en Microsoft Word Associate o Expert
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{ color: 'red' }}
                                    >
                                        Aprovecha que el dólar esta a un precio bajo y comienza la capacitación para Certificarte ante Microsoft Excel.
                                    </Typography>
                                    <br />
                                </Grid>
                            }
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    $97 DOLARES + iva
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Paga en 12 mensualidades con tarjeta de Crédito
                                </Typography>
                                <Typography
                                    variant="P"
                                    component="P"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Después de haber realizado tu pago envianos captura del pago además de nombre completo, dirección física completa, teléfono y correo para agilizar el alta en el sistema de Certificaciones Microsoft.
                                </Typography>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized interna={false} label="Adquirir esta promocion" url='https://pay.hotmart.com/D77563036F?off=131arslw&bid=1675314289924' />
                                </div>
                                <br />
                                <a href="https://wa.link/t8ek4p" target="_blank" rel="noreferrer">¡Envia tu comprobante de pago AQUÍ!</a>

                            </Grid>
                            {matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Certificate en Microsoft Word Associate o Expert
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{ color: 'red' }}
                                    >
                                        Aprovecha que el dólar esta a un precio bajo y comienza la capacitación para Certificarte ante Microsoft Excel.
                                    </Typography>
                                    <br />
                                </Grid>
                            }
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div style={{ height: '500px' }} className=''>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            {!matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Certificate en Microsoft Excel Associate o Expert
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{ color: 'red' }}
                                    >
                                        Aprovecha que el dólar esta a un precio bajo y comienza la capacitación para Certificarte ante Microsoft Excel.
                                    </Typography>
                                </Grid>
                            }
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    $97 DOLARES + iva
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Paga en 12 mensualidades con tarjeta de Crédito
                                </Typography>
                                <Typography
                                    variant="P"
                                    component="P"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Después de haber realizado tu pago envianos captura del pago además de nombre completo, dirección física completa, teléfono y correo para agilizar el alta en el sistema de Certificaciones Microsoft.
                                </Typography>
                                <div className='centrar-button-div'>
                                    <ButtonCustomized interna={false} label="Adquirir esta promocion" url='https://pay.hotmart.com/D77563036F?off=131arslw&bid=1675314289924' />
                                </div>
                                <br />
                                <a href="https://wa.link/t8ek4p" target="_blank" rel="noreferrer">¡Envia tu comprobante de pago AQUÍ!</a>
                                <br />
                            </Grid>
                            {matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Certificate en Microsoft Excel Associate o Expert
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{ color: 'red' }}
                                    >
                                        Aprovecha que el dólar esta a un precio bajo y comienza la capacitación para Certificarte ante Microsoft Excel.
                                    </Typography>
                                </Grid>
                            }
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div style={{ height: '500px' }} className=''>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    Paquete Amigo 2X1 + iva
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    sx={{ color: 'red' }}
                                >
                                    Invita a un colega, familiar o amigo a certificarse en Microsoft Excel a un excelente precio para ambos
                                </Typography>
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    $150 DOLARES + iva
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Paga en 12 mensualidades con tarjeta de Crédito
                                </Typography>
                                <Typography
                                    variant="P"
                                    component="P"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Después de haber realizado tu pago envianos captura del pago además de nombre completo, dirección física completa, teléfono y correo para agilizar el alta en el sistema de Certificaciones Microsoft.
                                </Typography>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized interna={false} label="Adquirir esta promocion" url='https://pay.hotmart.com/D77563036F?off=r57galk6&bid=1675312730911' />
                                </div>
                                <br />
                                <a href="https://wa.link/t8ek4p" target="_blank" rel="noreferrer">¡Envia tu comprobante de pago AQUÍ!</a>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <div className="parallax">
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div style={{ height: '500px' }} className=''>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            {!matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Paquete DUO
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{ color: 'red' }}
                                    >
                                        Certificate en Microsoft Excel y Microsoft Word a un super precio.
                                    </Typography>
                                </Grid>
                            }
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    $150 DOLARES + iva
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Paga en 12 mensualidades con tarjeta de Crédito
                                </Typography>
                                <Typography
                                    variant="P"
                                    component="P"
                                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                >
                                    Después de haber realizado tu pago envianos captura del pago además de nombre completo, dirección física completa, teléfono y correo para agilizar el alta en el sistema de Certificaciones Microsoft.
                                </Typography>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized interna={false} label="Adquirir esta promocion" url='https://pay.hotmart.com/D77563036F?off=r57galk6&bid=1675312730911' />
                                </div>
                                <br />
                                <a href="https://wa.link/t8ek4p" target="_blank" rel="noreferrer">¡Envia tu comprobante de pago AQUÍ!</a>
                            </Grid>
                            {matches &&
                                <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                    <Typography
                                        variant="h4"
                                        component="h4"
                                        sx={{ fontWeight: '900' }}
                                    >
                                        Paquete DUO
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{ color: 'red' }}
                                    >
                                        Certificate en Microsoft Excel y Microsoft Word a un super precio.
                                    </Typography>
                                </Grid>
                            }
                        </Grid>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>Ceducaty | Copyright © 2021 | Todos los derechos reservados.</p>
                    <p>Tus datos están seguros con nuestra <a href="https://landing.ceducaty.com/aviso_privacidad">política de privacidad</a></p>
                </div>
            </footer>
        </>
    )
}

export default Promociones