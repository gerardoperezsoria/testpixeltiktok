import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized';
import {
    Grid
} from '@material-ui/core';
import Image from 'next/image'
import Header from '../../mantine/header.js'
import Footer from '../../components/Footer.js';
import buenfin from '../../images/buenfin.png'

function EC0301() {

    useEffect(() => {
        function importHotmartDownsell() {
            var imported = document.createElement('script');
            imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
            document.head.appendChild(imported);
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
            document.head.appendChild(link);
        }
        importHotmartDownsell();


        // function importHotmartUpsell() {
        //     var imported = document.createElement('script');
        //     imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
        //     document.head.appendChild(imported);
        //     var link = document.createElement('link');
        //     link.rel = 'stylesheet';
        //     link.type = 'text/css';
        //     link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        //     document.head.appendChild(link);
        // }
        // importHotmartUpsell();

    })

    return (
        <>
            {/* <Header /> */}
            <div className='bg-portada parallax2'>
                {/* <div className="container">
                    <div className="vertical-center"> */}
                <Grid container justifyContent="center">
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ color: 'black' }}
                        >
                            Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso
                        </Typography>
                        <br />
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ fontWeight: '900' }}
                        >
                            Estándar EC0301
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            📋 Incluye Certificado SEP-CONOCER
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            📶 Alineación y evaluación 100% en linea
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            💻 Sesiones en vivo por VIDEOLLAMADA
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            🛡 Garantía de Certificación
                        </Typography>

                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            ✅ Tutor personal certificado
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            👥 Asistencia personalizada por medio de whatsapp, correo, documentos compartidos
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                        // sx={{ mr: 2, display: { md: 'flex' }, textAlign: "left" }}
                        >
                            ✅ Solicita tu factura para México(Solo pago con spei o deposito bancario)
                        </Typography>

                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: 'black', textDecorationLine: "line-through" }}
                        >
                            Precio: $5997 MXN
                        </Typography>
                        <p>IVA incluido</p>
                        <br />
                        <div className='centrar-button-div'>
                            {/* <div style={{ backgroundColor: "black", color: "red" }}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                >
                                    BUEN FIN
                                </Typography>
                                <Typography
                                    variant="p"
                                    component="p"
                                >
                                    ¡Solo disponible durante el BUEN FIN!
                                </Typography>
                            </div> */}
                            <Image src={buenfin} alt="" />
                        </div>
                        <br />
                    </Grid>

                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <br />
                        <div className='centrar-button-div'>
                            <a onclick="return false;" href="https://pay.hotmart.com/D88111625H?checkoutMode=2&off=zdnjy5hu" class="hotmart-fb hotmart__button-checkout">
                                Clic para Adquirir Curso + Certificación SEP-CONOCER
                                <p>$2316.52 MXN</p>
                                <p>Hasta 6 meses sin intereses</p>
                            </a>
                            <p></p>
                        </div>
                    </Grid>

                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <br />
                        <div className='centrar-button-div'>
                            <a onclick="return false;" href="https://pay.hotmart.com/D88111625H?checkoutMode=2&off=bm5t8a7j" class="hotmart-fb hotmart__button-checkout">
                                Clic para Adquirir Solo Curso(Sin Certificado)
                                <p>$578.84 MXN</p>
                                <p>Hasta 6 meses sin intereses</p>
                            </a>
                        </div>
                    </Grid>
                    <div className='centrar-button-div'>
                        <a href="https://wa.me/527152185509/?text=Hola deseo certificarme puede contactarme un asesor. Mi nombre es: " target="_blank" rel="noreferrer">
                            !Tienes dudas contactanos dando click AQUI!
                        </a>
                    </div>
                </Grid>
                {/* </div>
                </div> */}
            </div>

            <Footer whatsapp={false} />
        </>
    )
}

export default EC0301