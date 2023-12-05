import * as React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import cintillo from '../../../images/cintillo.png'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




const SMGracias = () => {
const [linkws, setlinkws]=React.useState("")
    const grupowhatsapp = async () => {
        try {
            const spreadsheetId = '1ZJbgwMRmMycbiU740wZX10sjYbe6whRNglNosGiYmtI';
            const sheetName = 'microsoft!A2:AZ1000000';
            const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            if (data && data.values) {
                setlinkws(data.values[0][6])
            } else {
                console.log('No se encontraron datos en el Google Sheet.');
            }
        } catch (error) {
            console.log('Error al leer el archivo de Google Sheet:', error);
        }
    };

    React.useEffect(()=>{
        grupowhatsapp()
    },[])

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={10}>
                    <div style={{ textAlign: 'center' }}>
                        <Image src={cintillo} alt="Banner" width={800} height={400} />
                    </div>
                </Grid>
                <Grid xs={10}>
                    <Typography
                        variant="h6"
                        component="h6"
                        align="center"
                    >
                        ¡Felicidades!
                        ¡Estás a un paso de asegurar tu lugar en nuestro seminario GRATUITO!
                        Ya sólo da clic en el siguiente botón para confirmar tu registro por WhatsApp; es automático,

                        ¡sin necesidad de escribir nada!

                        Usamos WhatsApp para enviarte materiales y regalos del seminario.
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
                            src="https://www.canva.com/design/DAFrisf8V4c/view?embed">
                        </iframe>
                    </div>
                </Grid>
                <Grid xs={10}>
                    <Typography
                        variant="h6"
                        component="h6"
                        align="center"
                    >
                        <Button variant="contained" color="primary">
                            <Link href={linkws} color="inherit">
                                ¡Unirme al Grupo de Whatsapp Ahora!
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
                        Recuerda que las transmisiones serán TOTALMENTE EN VIVO a través de zoom.
                        Por WhatsApp te llegará la liga de acceso..
                        ¡¡Prepárate!!
                        ¡¡Estamos ansiosos por conocerte!!
                        ¡¡Nos vemos en el seminario!!.
                    </Typography>
                </Grid>
            </Grid>
        </Box >


    );
};

export default SMGracias;