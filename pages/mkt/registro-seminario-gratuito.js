import * as React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Grow } from '@mui/material';
import Image from 'next/image';
import Banner from '../../images/banner.svg'
import Formulario from '../../components/Formulario';
import Contador from '../../components/Contador'
import { Card, CardContent, CardHeader } from '@mui/material';
import ActionButton from '../../components/RequestComponent';
import { Link } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const LPEI = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [showTransition, setShowTransition] = useState(false);
    const [dia,setdia] = useState("")
    const [mes,setmes] = useState("")
    const [anio,setanio] = useState("")
    const [nombredia,setnombredia] = useState("")
    const [nombremes,setnombremes] = useState("")

    const fechaLanzamiento = async () => {
        try {
            const spreadsheetId = '1ZJbgwMRmMycbiU740wZX10sjYbe6whRNglNosGiYmtI';
            const sheetName = 'lanzamiento!A2:AZ1000000';
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
                            <Image src={Banner} alt="Banner" width={800} height={400} />
                        </div>
                    </Grid>

                    <Grid xs={12}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Seminario GRATUITO Completamente en VIVO Revela...
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
                            Comó iniciar tu propio negocio de capacitación, con Aval de la SEP
                        </Typography>
                    </Grid>

                    <Grid xs={12}>
                        <Contador dia={dia} mes={mes} anio={anio} nombredia={nombredia} nombremes={nombremes}/>
                    </Grid>

                    <Grid xs={12} id="formulario-registro">
                        <Formulario ruta="/mkt/seminario-gratuito-gracias" certificacion="conocer"/>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            En el Seminario Gratuito te revelaremos Cómo Incrementar tus Ingresos y tus Oportunidades Profesionales Diseñando e Impartiendo Cursos Alineados a los Requerimientos de la SEP y Cómo Conseguir tu Registro Nacional Como Instructor Certificado ante la SEP-CONOCER
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            La mejor manera de capacitar es seguir criterios metodológicos y científicos; que se basen en las mejores prácticas a nivel nacional e internacional y que sobre todo garanticen resultados. Brindar capacitación, presencial o en línea, con base a estándares oficiales y reconocidos por la SEP es una excelente oportunidad para:
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="left"
                        >
                            <p>✅ Conocer y ayudar a otras personas.</p>
                            <p>✅ Incrementar tus ingresos.</p>
                            <p>✅ Transmitir exitosamente tus conocimientos, tus habilidades y tus valores.</p>
                            <p>✅ Generar relaciones de negocio.</p>
                            <p>✅ Sembrar la semilla del desarrollo.</p>
                            <p>✅ Influir positivamente en otras personas.</p>
                            <p>✅ Transformar vidas, ¡incluyendo la tuya!</p>
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
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
                            Para lograr todo esto, ¡hay que saber como capacitar adecuadamente!
                            En el SEMINARIO GRATUITO:
                            Como incrementar tus ingresos diseñando e impartiendo cursos alineados a los requerimientos de la SEP y cómo obtener tu registro nacional como instructor certificado ante el gobierno, aprenderás como hacerlo.
                        </Typography>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Para ser COMPETENTE en el sector de la capacitación, es importante conocer técnicas y herramientas que faciliten la adecuada transmisión del conocimiento. También, es muy importante saber como llevar clientes a tus cursos.

                            Hay grandes oportunidades en el mercado del diseño e impartición de cursos pues la demanda se expande año con año; además, las reformas legales han generado una alta necesidad de formadores PROFESIONALES que den buenos resultados. Si aprendes y dominas estas habilidades, además de conocer y ayudar a muchas personas, ¡puedes incrementar tus ingresos!
                        </Typography>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            En México hay NUEVOS estándares oficiales que establecen los criterios reconocidos por la SEP para diseñar e impartir capacitación con base a las mejores prácticas nacionales e internacionales.



                            En el seminario GRATUITO aprenderás:
                        </Typography>
                    </Grid>

                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="left"
                        >
                            <p>✅ La realidad actual del mercado de la capacitación en México y América Latina.</p>
                            <p>✅ El NUEVO estándar de competencia, avalado por la SEP, para impartir capacitación.</p>
                            <p>✅ Las oportunidades que trajo la pandemia en materia de capacitación.</p>
                            <p>✅ La mejor manera de conseguir clientes para tus cursos de capacitación.</p>
                            <p>✅ Cómo desarrollar objetivos de aprendizajes, bajo el enfoque por competencias.</p>
                            <p>✅ Cómo detectar necesidades reales de capacitación en personas y organizaciones.</p>
                            <p>✅ Cómo diseñar cursos que se vendan.</p>
                            <p>✅ La manera más efectiva de obtener una doble certificación oficial y tu REGISTRO NACIONAL en diseño e impartición de cursos.</p>
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
                        <div
                            style={{
                                position: "relative",
                                width: "100%",
                                height: '0',
                                paddingTop: "83.8298%",
                                paddingBottom: '0',
                                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                                marginTop: '0em',
                                marginBottom: '0em',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                willChange: 'transform'
                            }}
                        >
                            <iframe loading="lazy" style={{
                                position: 'absolute',
                                width: '100%',
                                height: '75%',
                                top: '0',
                                left: '0',
                                border: 'none',
                                padding: '0',
                                margin: '0'
                            }}
                                src="https://www.canva.com/design/DAFrit1y0N8/view?embed" >
                            </iframe>

                        </div>
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
                            20:00 horas. Hora centro de CDMX
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
                            Tener entusiasmo ya no es suficiente; hay quienes, contando con adecuados conocimientos y habilidades, y con genuinas intenciones de enseñar y ayudar, ¡no saben capacitar! ¡Es la verdad!
                            Hoy, muchos instructores carecen de claros diferenciadores que los hagan más visibles y los muestren como COMPETENTES. En el seminario vas a aprender como diferenciarte genuinamente de los demás y ¡como conseguir clientes para tus cursos!
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            ¡¡Contar con los conocimientos, habilidades, destrezas, desempeños, actitudes, hábitos y valores adecuados, hace más rentable esta maravillosa actividad!!
                            Además, certificar tus conocimientos y habilidades, ¡puede ser una gran idea! Ya que garantiza de antemano que darás buenos resultados en tus cursos de formación, ¡permitiéndote contar con mas clientes y mayores ingresos!
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
                                src="https://www.canva.com/design/DAFj5LmvtVU/view?embed">
                            </iframe>
                        </div>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Los certificados oficiales, expedidos por la autoridad, son los mejores diferenciadores en cualquier actividad profesional. Afortunadamente en México existe un mecanismo para obtener tu registro nacional como instructor certificado ante el gobierno, ¡Conócelo!
                        </Typography>
                    </Grid>

                    <Grid xs={10}>
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
                                src="https://www.canva.com/design/DAFoAaAXUtY/view?embed">
                            </iframe>
                        </div>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            México requiere de instructores y formadores COMPETENTES en todos los sectores productivos, ¡¡URGE!!
                            Muchas personas están entendiendo la importancia de estar bien capacitados en momentos de incertidumbre y crisis como los que estamos viviendo; saben que las mejores oportunidades las reciben quienes cuentan con más habilidades y talentos y que, además, ¡lo puedan probar!
                            Muchos mexicanos, por cuenta propia, están buscando quien les capacite de manera adecuada y ¡tú puedes ayudarles enseñándoles lo que sabes!
                            Además, por ley, las empresas mexicanas requieren capacitar a sus trabajadores en diferentes temas y habilidades, por lo tanto, hay NECESIDAD de talento PROFESIONAL para formar adecuadamente a las personas, tú puedes compartir tus conocimientos y habilidades para ayudar a otros mexicanos a lograr sus objetivos de vida y de paso, ¡aumentar tus ingresos!
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Hay una demanda real de instructores de calidad. Puedes, si así lo deseas, incursionar de forma exitosa en el mundo de la capacitación, e incluso, obtener el RECONOCIMIENTO OFICIAL DE LA SEP para diseñar e impartir cursos de formación de manera COMPETITIVA.
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
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
                            Lo que dicen nuestros clientes:
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
                        <Typography
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            Este seminario tiene un costo habitual de $2,750.00

                            Por tiempo Limitado Será Gratis.
                        </Typography>
                    </Grid>
                    <Grid xs={10}>
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