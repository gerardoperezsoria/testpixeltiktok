import React from 'react';
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
import BN10 from '../../images/BN10.jpeg'
function Instructor() {
    const router = useRouter();
    const [images, setImages] = useState(
        [
            logoceducaty,
            bgc,
            ec
        ]
    )

    const [url, setUrl] = React.useState("")
    const [ws, setWs] = React.useState("")


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


    const getRecord = async () => {
        try {
            const spreadsheetId = '1ZJbgwMRmMycbiU740wZX10sjYbe6whRNglNosGiYmtI';
            const sheetName = 'seminario!A2:AZ1000000';
            const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            if (data && data.values) {
                setUrl(data.values[0][0])
                setWs(data.values[0][1])
            } else {
                console.log('No se encontraron datos en el Google Sheet.');
            }
        } catch (error) {
            console.log('Error al leer el archivo de Google Sheet:', error);
        }
    };


    React.useEffect(() => {
        getRecord()
    }, []);


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
                        Como iniciar tu propio NEGOCIO de capacitación con AVAL de SEP-CONOCER
                    </Typography>
                </Grid>
            </Grid>

            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} xs={10}>

                    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
                        <iframe
                            title="Mi Iframe"
                            src={url}
                            frameBorder="0"
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>


                </Grid>
                <Grid item style={{ textAlign: "left" }} xs={10}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        <p>✅ Alineación, evaluación y Certificación 100% en linea</p>
                        <p>✅ Inicia hoy mismo.</p>
                        <p>✅ Material listo en la plataforma</p>
                        <p>✅ Acompañamiento para dudas en todo momento</p>
                        <p>✅ Material desarrollado listo para que inicies hoy mismo</p>
                        <p>✅ Tienes BLINDAJE en todo el proceso de formación, quiere decir que si no resultas COMPETENTE al momento de realizar el proceso de Certificación puedes realizarlo las veces que sea necesario con costo $0</p>
                        <p>✅ Tiempo estimado de CERTIFICACIÓN de 1 a 3 meses(Tiempo promedio en tu tiempo libre. No dudes en que puedes realizarlo en un tiempo menor)</p>
                    </Typography>
                </Grid>
            </Grid>
            <hr />
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={12} sm={12}>
                    <div className='centrar-button-div'>
                        <Image src={BN10} alt="" />
                    </div>
                    <br />
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        ✅Usa el cupón BF10 y obten 10% de descuento
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: '#6bb023' }}
                    >
                        ✅3 y 6 meses sin intereses con TC
                    </Typography>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={10} sm={10}>
                    <Card style={{ backgroundColor: 'lightblue' }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="h6"
                            // sx={{ color: '#6bb023' }}
                            >
                                Instructor
                            </Typography>
                            <hr />
                            <p>✅EC0301</p>
                            <p>✅ EC0217.01</p>
                            <p>(*No incluye Certificados)</p>
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
                                <Link href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=idr3i7cf" color="inherit">
                                    <p>Clic para ADQUIRIR</p>
                                </Link>
                            </Button>
                        </Typography>
                        <br />
                    </Card>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={10} sm={10}>
                    <Card style={{ backgroundColor: 'lightblue' }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="h6"
                            // sx={{ color: '#6bb023' }}
                            >
                                Diseñador de Cursos en linea
                            </Typography>
                            <hr />
                            <p>✅EC0301</p>
                            <p>✅ EC0217.01</p>
                            <p>✅ EC0366</p>
                            <p>(*No incluye Certificados)</p>
                            <hr />
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: '#6bb023' }}
                            >
                                <p>$3476 MXN</p>
                            </Typography>
                        </CardContent>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#6bb023' }}
                        >
                            <Button variant="contained" color="primary">
                                <Link href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=9yprpjmr" color="inherit">
                                    <p>Clic para ADQUIRIR</p>
                                </Link>
                            </Button>
                        </Typography>
                        <br />
                    </Card>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={10} sm={10}>
                    {/* <div className='centrar-button-div'> */}
                    {/* <a onclick="return false;" href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=u7wq3de0" class="hotmart-fb hotmart__button-checkout"> */}
                    <Card style={{ backgroundColor: 'lightblue' }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="h6"
                            // sx={{ color: '#6bb023' }}
                            >
                                Director de tu propio Centro Evaluador
                            </Typography>
                            <hr />
                            <p>✅EC0301</p>
                            <p>✅ EC0217.01</p>
                            <p>✅ EC0366</p>
                            <p>✅ LandingPage</p>
                            <p>✅Curso de Marketing Digital</p>
                            <p>(*No incluye Certificados)</p>
                            <hr />
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: '#6bb023' }}
                            >
                                $3700 MXN
                            </Typography>
                        </CardContent>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ color: '#6bb023' }}
                        >
                            <Button variant="contained" color="primary">
                                <Link href="https://pay.hotmart.com/N88475063Y?checkoutMode=2&off=4vaxqmw2" color="inherit">
                                    CLIC PARA ADQUIRIR
                                </Link>
                            </Button>
                        </Typography>
                        <br />
                    </Card>
                    <br />
                </Grid>
            </Grid >


            <hr />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={10} sm={10}>
                    <Card style={{ backgroundColor: 'lightblue' }}>
                        <CardContent>
                            Otras formas de pago
                            <hr />
                            <Typography
                                variant="h6"
                                component="h6"
                            // sx={{ color: '' }}
                            >
                                <p>Datos Bancarios Centro evaluador CEDUCATY</p>
                                <hr />
                                <p>Cuenta Santander Pyme</p>
                                <p>No. Cuenta: 65509209638</p>
                                <p>Cuenta Clabe:014537655092096389</p>
                                <p>Beneficiario: ceducaty sas de cv</p>
                                <hr />
                                *Si requieres factura favor de enviar tu constancia de situación fiscal
                                <p>*Nota: No se permiten depositos a nombre de personas fisicas, ya que de lo contrario no se hara valida la garantía</p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <br />
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={10} sm={10}>
                    <hr />
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ color: '#6bb023' }}
                    >
                        <a href="https://wa.link/ndy9p2">Enviar Captura de pago y/o Contactar con un asesor para aclarar dudas</a>
                    </Typography>
                    <hr />
                </Grid>
            </Grid>

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