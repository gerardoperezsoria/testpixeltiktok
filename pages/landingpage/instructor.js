import Image from 'next/image'
import Typography from '@mui/material/Typography';

import ec from '../../images/ec.gif'
import bgc from '../../images/backgroundceducaty.svg'
import { useRouter } from 'next/router';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized'
import logoceducaty from '../../images/logoceducaty.png'
import garantia from '../../images/garantia.png'
import {
    Grid
} from '@material-ui/core';
import { Button, Link, Card, CardContent, CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Header from '../../mantine/header.js'
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer.js';
import Banner from '../../images/banner.svg'
import buenfin from '../../images/buenfin.png'
function Instructor() {
    const router = useRouter();
    const [images, setImages] = useState(
        [
            logoceducaty,
            bgc,
            ec
        ]
    )


    useEffect(() => {
        function importHotmart() {
            var imported = document.createElement('script');
            imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
            document.head.appendChild(imported);
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
            document.head.appendChild(link);
        }
        importHotmart();
    })

    return (
        <>

            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={12} sm={12}>
                    <Grid xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Image src={Banner} alt="Banner" width={800} height={400} />
                        </div>
                    </Grid>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{ color: 'black' }}
                    >
                        Certificate como INSTRUCTOR
                    </Typography>
                </Grid>
            </Grid>

            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} xs={10}>
                    <div className='centervertical'>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#gray' }}
                        >
                            ¿Qué Obtendrás?
                        </Typography>
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "left" }} xs={10}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        <p>✅ Doble Certificación en EC0217.01 Impartición de cursos y EC0301 Diseño de cursos</p>
                        <p>✅ Documento oﬁcial avalado por la SEP, con valor en toda la República Mexicana(Opcional).</p>
                        <p>✅ Valor curricular nacional e internacional</p>
                        <p>✅ Podrás ser considerado en licitaciones del sector público y privado.</p>
                        <p>✅ Obtendrás un número de registro ante el Registro Nacional de Personas con competencias Certiﬁcadas (RENAP)</p>
                        <p>✅ Movilidad laboral en todo el país.</p>
                        <p>✅ Tienes BLINDAJE en todo el proceso de formación, quiere decir que si no resultas COMPETENTE al momento de realizar el proceso de Certificación puedes realizarlo las veces que sea necesario con costo $0</p>
                        <p>✅ Tiempo estimado de CERTIFICACIÓN de 1 a 3 meses(Tiempo promedio, no dudes en que puedes realizarlo en un tiempo menor)</p>
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} xs={10}>
                    <div className='centervertical'>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#gray' }}
                        >
                            El Proceso de Certificación se realiza en 4 etapas
                        </Typography>
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "left" }} xs={10}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        <p>1. Alineación (Opcional). Que tiene como objetivo darle a conocer los conocimientos, desempeños y habilidades que marca el estándar de competencia oficial.</p>
                        <br />
                        <p>2. Seguimiento de conformación de portafolios (Opcional). Tiene como objetivo brindar un acompañamiento personalizado en todo el proceso de certificación en el que se asesora al candidato en la elaboración de su portafolio y su preparación.</p>
                        <br />
                        <p>3. Evaluación. Una vez que el participante se encuentre preparado se lleva a cabo la evaluación en el cual demostrará conocimientos, desempeños, habilidades, actitudes, hábitos y valores alineados a los requerimientos de los estándares de certificación correspondientes.</p>
                        <br />
                        <p>4. Gestión del Certificado. El documento oficial llega en 90 días hábiles después de que el participante haya sido dictaminado COMPETENTE.).</p>
                    </Typography>
                </Grid>
            </Grid>
            <hr />
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={12} sm={12}>
                    <div className='centrar-button-div'>
                        <Image src={buenfin} alt="" />
                    </div>
                    <br />
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        Usa el cupón BF20 y obten 20% de descuento
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        Tienes 3 y 6 meses sin intereses con TC
                    </Typography>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                    <Card style={{backgroundColor:'lightblue'}}>
                        <CardContent>
                            <p>Acceso solo a la Alineación</p>
                            <hr />
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: '#6bb023' }}
                            >
                                <p>$1500 MXN</p>
                            </Typography>
                        </CardContent>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#6bb023' }}
                        >
                            <Button variant="contained" color="primary">
                                <Link href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=n4lpwhiw" color="inherit">
                                    <p>Clic para ADQUIRIR</p>
                                </Link>
                            </Button>
                        </Typography>
                        <br />
                    </Card>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                    <Card style={{backgroundColor:'lightblue'}}>
                        <CardContent>
                            <p>Alineación, Evaluación y Proceso de Certificación</p>
                            <p>(*No incluye Certificados)</p>
                            <br />
                            <p>(*Los certificados se pagan una vez resultes COMPETENTE, costo $800 MXN c/u)</p>
                            <hr />
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: '#6bb023' }}
                            >
                                <p>$2997 MXN</p>
                            </Typography>
                        </CardContent>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#6bb023' }}
                        >
                            <Button variant="contained" color="primary">
                                <Link href="https://pay.hotmart.com/N88475063Y?checkoutMode=2" color="inherit">
                                    <p>Clic para ADQUIRIR</p>
                                </Link>
                            </Button>
                        </Typography>
                        <br />
                    </Card>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                    {/* <div className='centrar-button-div'> */}
                    {/* <a onclick="return false;" href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=u7wq3de0" class="hotmart-fb hotmart__button-checkout"> */}
                    <Card style={{backgroundColor:'lightblue'}}>
                        <CardContent>

                            <p>Alineación, Evaluación, Proceso de Certificación</p>
                            <p>(Incluye 2 Certificados)</p>
                            <hr />
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: '#6bb023' }}
                            >
                                $4597 MXN
                            </Typography>
                        </CardContent>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#6bb023' }}
                        >
                            <Button variant="contained" color="primary">
                                <Link href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=u7wq3de0" color="inherit">
                                    CLIC PARA ADQUIRIR
                                </Link>
                            </Button>
                        </Typography>
                        <br />
                    </Card>
                    <br />
                </Grid>
            </Grid>


            <hr />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} xs={10}>
                    <div className='centervertical'>
                        {/* <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#6bb023' }}
                        >
                            7 DÍAS DE GARANTIA
                        </Typography> */}
                        <Image

                            src={garantia}
                            alt="Garantia"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
            </Grid>
            <Footer />


        </>
    )
}

export default Instructor