import * as React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Grow } from '@mui/material';
import Image from 'next/image';
import certificado from '../../../images/certificado.png'
import ruta from '../../../images/ruta.jpeg'
import puestodirectivo from '../../../images/puestodirectivo.jpeg'
import cintillo from '../../../images/cintillo.png'
import Formulario from '../../../components/Formulario';
import Contador from '../../../components/Contador'
import { Card, CardContent, CardHeader } from '@mui/material';
import ActionButton from '../../../components/RequestComponent';
import { Link } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const LPEI = () => {
    const [hora, sethora] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [showTransition, setShowTransition] = useState(false);
    const [dia, setdia] = useState("")
    const [mes, setmes] = useState("")
    const [anio, setanio] = useState("")
    const [nombredia, setnombredia] = useState("")
    const [nombremes, setnombremes] = useState("")
    const [leyenda, setleyenda] = useState("")

    const fechaLanzamiento = async () => {
        try {
            const spreadsheetId = '1ZJbgwMRmMycbiU740wZX10sjYbe6whRNglNosGiYmtI';
            const sheetName = 'microsoft!A2:AZ1000000';
            const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            if (data && data.values) {
                setdia(data.values[0][0])
                setmes(data.values[0][1])
                setanio(data.values[0][2])
                setnombredia(data.values[0][3])
                setnombremes(data.values[0][4])
                setleyenda(data.values[0][5])
                sethora(data.values[0][7])
            } else {
                console.log('No se encontraron datos en el Google Sheet.');
            }
        } catch (error) {
            console.log('Error al leer el archivo de Google Sheet:', error);
        }
    };


    useEffect(() => {
        fechaLanzamiento()
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 200; // La posición de scroll en la que se activará la transición
            setShowTransition(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* <Box height="100vh" />


            <Grow in={showTransition}>
                <Box bgcolor="primary.main" color="white" padding={3}>
                    Contenido Animado al Hacer Scroll
                </Box>
            </Grow>


            <Box height="100vh" /> */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Image src={cintillo} alt="Banner" width={800} height={400} />
                        </div>
                    </Grid>

                    <Grid xs={12}>
                        <Typography
                            variant="h3"
                            component="h3"
                            align="center"
                        >
                            PLAN DE CARRERA PROFESIONAL
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            {leyenda}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography
                            variant="h4"
                            component="h4"
                            align="center"
                            xs={{
                                fontWeight: 'bold'
                            }}
                        >
                            Seminario gratuito revela la ruta paso a paso para trazar un plan de carrera profesional, ganar el doble de tu salario actual y postularte a un puesto directivo en 6 meses.
                        </Typography>
                    </Grid>

                    <Grid xs={12}>
                        <Contador dia={dia} mes={mes} anio={anio} nombredia={nombredia} nombremes={nombremes} />
                    </Grid>

                    <Grid xs={12} id="formulario-registro">
                        <Formulario ruta="/mkt/excel/gracias" certificacion="microsoft"/>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            ¿Que aprenderemos?
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Realidad del mercado laboral en México y las habilidades transversales que se requieren para un puesto directivo.
                            Tendrás acceso gratuito a una herramienta internacional con la que podrás diagnosticar tus competencias profesionales.
                        </Typography>
                    </Grid>

                    <Grid xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Image src={puestodirectivo} alt="Banner" width={800} height={400} />
                        </div>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Excel como herramienta para crear soluciones corporativas.
                            Descubre el impacto de utilizar Microsoft Excel, catalogada como la herramienta de mayor demanda en todos los puestos de trabajo, para desarrollar soluciones corporativas efectivas.
                        </Typography>
                    </Grid>

                    <Grid xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Image src={certificado} alt="Banner" width={800} height={400} />
                        </div>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Ruta paso a paso para conseguir movilidad laboral en 6 meses y colocarte en puesto directivo.
                            Presentaremos el plan estratégico que te permitirá lograr un ascenso laboral y perfilarte a un puesto directivo.
                        </Typography>
                    </Grid>

                    <Grid xs={12}>
                        <div style={{ textAlign: 'center' }}>
                            <Image src={ruta} alt="Banner" width={800} height={400} />
                        </div>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            <Button variant="contained" color="primary">
                                <Link href="#formulario-registro" color="inherit">
                                    ¡Si Quiero Registrarme!
                                </Link>
                            </Button>
                        </Typography>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h5"
                            component="h5"
                            align="center"
                            xs={{
                                fontWeight: 'bold'
                            }}
                        >
                            ¿Cuándo inicia el Seminario Gratuito?
                        </Typography>
                    </Grid>

                    <Grid xs={5}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            {`${nombredia} ${dia} de ${nombremes} ${anio}`}
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            {hora}
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Evento Completamente en vivo por ZOOM
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            El cupo es limitado, ¡Regístrate y Asegura Tu Lugar!
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            <Button variant="contained" color="primary">
                                <Link href="#formulario-registro" color="inherit">
                                    ¡Registrarme Ahora!
                                </Link>
                            </Button>
                        </Typography>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            ¡¡El cupo es limitado!! Regístrate y
                            ¡¡Asegura tu lugar!!
                        </Typography>
                    </Grid>
                    <Grid xs={5}>
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: '0',
                                paddingTop: "83.8298%",
                                paddingBottom: '0',
                                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                                marginTop: '1.6em',
                                marginBottom: '0.9em',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                willChange: 'transform'
                            }}
                        >
                            <iframe loading="lazy" style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: '0',
                                left: '0',
                                border: 'none',
                                padding: '0',
                                margin: '0'
                            }}
                                src="https://www.canva.com/design/DAFricfmP_8/view?embed">
                            </iframe>
                        </div>
                    </Grid>
                    <Grid xs={5}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            No tiene sentido mirar hacia atrás y pensar: Debería haber hecho esto o aquello. Lo que importa es lo que estás haciendo ahora.
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="right"
                        >
                            -Steve Jobs-
                        </Typography>
                    </Grid>
                </Grid>
            </Box >

        </>
    );
};

export default LPEI;