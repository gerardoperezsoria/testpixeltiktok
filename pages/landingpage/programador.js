import Image from 'next/image'
import Typography from '@mui/material/Typography';

import ec from '../../images/ec.gif'
import bgc from '../../images/backgroundceducaty.svg'
import { useRouter } from 'next/router';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized'
import logoceducaty from '../../images/logoceducaty.png'
import {
    Grid
} from '@material-ui/core';
import Header from '../../mantine/header.js'
import { useState } from 'react';
import Footer from '../../components/Footer.js';

function Programador() {
    const router = useRouter();
    const [images, setImages] = useState(
        [
            logoceducaty,
            bgc,
            ec
        ]
    )

    return (
        <>
            <Header />

            <div className='bg-portada parallax'>
                <br />
                <br />
                <br />
                <Grid container justifyContent="center">
                    <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ color: 'red' }}
                        >
                            Cetificate en Desarrollo de aplicaciones web y móviles ante SEP-CONOCER
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                        <div className='centervertical'>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: 'black', textAlign: 'justify' }}
                            >
                                ¿Aprendiste a programar por tu cuenta?. Valida tus conocimientos con una certificación oficial
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                    <div className='centervertical'>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                    <div className='centervertical'>
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'justify' }}
                            >
                                ¿Qué es el Estándar de Competencia EC0727?
                                El Estándar de Competencia EC0727 es un marco de referencia diseñado para evaluar y 
                                certificar las competencias profesionales requeridas en el ámbito laboral. 
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid >
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                    <div className='centervertical'>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                    <div className='centervertical'>
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'justify' }}
                            >
                                Beneficios de obtener la certificación EC0727
                                Obtener la certificación basada en el Estándar de Competencia EC0727 tiene numerosos 
                                beneficios para tu desarrollo profesional:
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'left' }}
                            >
                                ✅ Reconocimiento oficial: La certificación está respaldada por la Secretaría de Educación Pública, lo que la hace ampliamente reconocida y valorada en el mercado laboral.
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'left' }}
                            >
                                ✅ Mejora de competencias: El EC0727 evalúa tus habilidades y conocimientos en relación con los estándares requeridos por la industria. Al obtener la certificación, demuestras un alto nivel de competencia en tu área.
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'left' }}
                            >
                                ✅ Credibilidad profesional: La certificación EC0727 agrega credibilidad a tu perfil profesional y te distingue como un experto en tu campo.
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'left' }}
                            >
                                ✅ Oportunidades de empleo: Muchas empresas y organizaciones valoran la certificación EC0727 al momento de contratar o promover a profesionales. Puedes acceder a nuevas oportunidades laborales y aumentar tus posibilidades de crecimiento en tu carrera.
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'left' }}
                            >
                                ✅ Desarrollo continuo: El proceso de certificación EC0727 te brinda la oportunidad de identificar tus fortalezas y áreas de mejora, lo que te permite enfocarte en el desarrollo continuo de tus competencias.
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                    <div className='centervertical'>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                    <div className='centervertical'>
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'justify' }}
                            >
                                ¡Felicidades!
                                Una vez que hayas completado con éxito tu proceso de alineación, evaluación y certificación,
                                recibirás tu certificado oficial reconocido por la SEP.
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: "left" }}
                            >
                                ✅ Este documento te respaldará y abrirá nuevas oportunidades en tu campo profesional.
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: "left" }}
                            >
                                ✅ Adicionalmente, tu logro será registrado en el <a href="https://conocer.gob.mx/registro-nacional-personas-competencias-certificadas/" target="_blank" rel="noreferrer">RENAP</a>, lo que permitirá a los empleadores verificar tu certificación en cualquier momento.
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                    <div className='centervertical'>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                    <div className='centervertical'>
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023', textAlign: 'justify' }}
                            >

                                No pierdas la oportunidad de obtener una certificación avalada por la SEP y dar un impulso significativo a tu carrera profesional. ¡Comienza tu camino hacia el éxito con CEDUCATY!

                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                    <div className='centervertical'>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                    <div className='centervertical'>
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023' }}
                            >
                                ¡Felicidades fuiste seleccionado para obtener una beca!
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: 'black', textDecoration: 'line-through' }}
                            >
                                De: $7999 MXN
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: 'black' }}
                            >
                                A $3476.52 MXN
                            </Typography>
                            <br />
                            <div className='centrar-button-div'>
                                <ButtonCustomized style={{ textAlign: "center" }} label="!Clic para obtener esta oferta AHORA¡" url='https://pay.hotmart.com/Q79291205R?off=okq05638&bid=1684957490854' interna={false} />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default Programador