import * as React from 'react';
import Appbare from '../../components/Appbare.js'
import Container from '../../components/Container.js'
import Card from '../../components/Card.js'
import Link from '@mui/material/Link';
import Video from '../../components/Video.js'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Hero2 from '../../mantine/hero2.js'
import ec from '../../images/ec.gif'
import bgc from '../../images/backgroundceducaty.svg'
import { useRouter } from 'next/router';
// import Header from '../../mantine/header.ts'
import Hero from '../../mantine/hero.js'
import Button from '../../mantine/buttons.js'
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized.js'
import logoceducaty from '../../images/logoceducaty.png'
import Accordeon from '../../elementsMaterialUI/Accordion.js'
import WithPrivateRoute from '../../components/WithPrivateRoute.js'

import {
    Grid
} from '@material-ui/core';
import NavBarBulma from '../../components/NavBarBulma.js'
import Header from '../../mantine/header.js'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function CEC021701() {
    const router = useRouter();

    const [links, setLinks] = React.useState([])
    const [linksec021701, setLinksec021701] = React.useState([])
    const [sheetdata, setSheetData] = React.useState([])
    const [datos, setdatos] = React.useState([])
    const leerLinks = async () => {
        try {
            const spreadsheetId = '1yTirUbb5rZp32hIGtDGSGgOdrlWespXVWY7OI4R0Ipo';
            const sheetName = 'ec021701!A2:AZ1000000';
            const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            if (data && data.values) {
                const rows = data.values;
                setLinks(rows)
            } else {
                console.log('No se encontraron datos en el Google Sheet.');
            }
        } catch (error) {
            console.log('Error al leer el archivo de Google Sheet:', error);
        }
    };

    const leerLinksec021701 = async () => {
        try {
            const spreadsheetId = '1KSbngYtTgpp4JDXnno49lkHOIDtx6swHVTF1558_r68';
            const sheetName = 'ec021701!A2:AZ1000000';
            const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            let arrayec021701 = []
            if (data && data.values) {
                const rows = data.values;
                rows.map((row, index) => {
                    arrayec021701.push({
                        titulo: row[0],
                        boton: <><a href={row[1]} download target="_blank" rel="noreferrer">
                            Descargar
                        </a>
                        </>
                    })
                })
                setdatos(arrayec021701)
            } else {
                console.log('No se encontraron datos en el Google Sheet.');
            }
        } catch (error) {
            console.log('Error al leer el archivo de Google Sheet:', error);
        }
    };

    React.useState(() => {
        if (typeof window !== "undefined") {
            const logueado = localStorage.getItem("session")
            if (!logueado || logueado === null) {
                router.push("/login")
            } else {
                leerLinks()
                leerLinksec021701()
            }
        }
    }, [])


    return (
        <>
            <Header />
            <div style={{ height: '300px' }} className='bg-portada parallax'>
                <br />
                <br />
                <br />
                <Grid container justifyContent="center">
                    <Grid item style={{ textAlign: "center" }} xs={12}>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{ fontWeight: '900' }}
                        >
                            Alineación estándar de competencia EC0217.01
                        </Typography>
                        <br />
                        <Typography
                            variant="h5"
                            component="h5"
                            sx={{ color: 'red' }}
                        >
                            Impartición de cursos de formación del capital humano de manera presencial grupal
                        </Typography>
                        {/* <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        /> */}
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <br />

            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={10} sm={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{ fontWeight: '900' }}
                    >
                        Grabaciones de las sesiones
                    </Typography>
                </Grid>

                {links.map((row, index) => {
                    return <Grid key={index} item style={{ textAlign: "center" }} md={4} sm={12}>
                        <h2>{row[0]}</h2>
                        <iframe style={{ border: "10px solid green" }} src={row[1]} allow="autoplay"></iframe>
                    </Grid>
                })
                }

                <Grid item style={{ textAlign: "center" }} md={10} sm={12}>
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontWeight: '900' }}
                    >
                        <a href="https://chat.whatsapp.com/ICMzjqaWL6k6TwLlaCHfZ2" target="_blank" rel="noreferrer">
                            Unirte al grupo de whatsapp para el EC0217.01
                        </a>
                    </Typography>
                </Grid>
            </Grid>

            <br />
            {/* <br />
            <br />
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} xs={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        sx={{ fontWeight: '900' }}
                    >
                        Video de introducción
                    </Typography>
                    <br />
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={{ color: 'red' }}
                    >
                        El participante al finalizar el video identificará y comprenderá el concepto del Modelo del enfoque de competencias, con base en el referente histórico que comparte el Dr. Christian Ríos, para que cuente con los conocimientos requeridos para el desarrollo de evidencias de evaluación en el EC0301.
                    </Typography>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={4} sm={12}>
                    <iframe style={{ border: "10px solid green" }} src="https://player.vimeo.com/video/597316539?h=93403012e0&title=0&byline=0&portrait=0" allow="autoplay"></iframe>
                </Grid>
            </Grid> */}

            <div className="parallax2">
                <Typography
                    variant="h4"
                    component="h4"
                // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >

                </Typography>
            </div>

            <div className='bg-portada55'>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            <Grid item style={{ textAlign: "center" }} md={10} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    A continuación podrás encontrar el material que utilizarás a lo largo de tu capacitación.(Material Descargable)
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={10} sm={12}>
                    <Accordeon datosprop={datos} />
                </Grid>
            </Grid>

            <footer className="footer">
                <div className="content has-text-centered">
                    <p>Ceducaty | Copyright © 2021 | Todos los derechos reservados.</p>
                    <p>Tus datos están seguros con nuestra <a href="https://landing.ceducaty.com/aviso_privacidad">política de privacidad</a></p>
                </div>
            </footer>
        </>
    )
}

export default CEC021701
CEC021701.Auth = WithPrivateRoute