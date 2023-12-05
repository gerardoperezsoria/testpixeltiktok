import React from 'react';
import Image from 'next/image'
import Typography from '@mui/material/Typography';

import { useRouter } from 'next/router';

import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized'
import {
    Grid
} from '@material-ui/core';

import Footer from '../../components/Footer.js';
import { useState } from 'react';

function IndexPrincipal() {
    const router = useRouter();
    const [url, setUrl] = React.useState("")
    const [ws, setWs] = React.useState("")

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

            <Grid container spacing={2} justifyContent='center' alignItems="center">
                <Grid item xs={12} justifyContent='center'>
                    <Typography variant="h5" component="h5" sx={{ color: 'red', textAlign: "center" }}>
                        Grabación Seminario Gratuito
                    </Typography>
                    <Typography variant="h5" component="h5" sx={{ color: 'red', textAlign: "center" }}>
                        Como iniciar TU PROPIO NEGOCIO DE CAPACITACIÓN con AVAL de SEP-CONOCER
                    </Typography>
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={10}>
                    <ButtonCustomized label="CLIC para Obtener una BECA COMPLETA" url={ws} interna={false} />
                </Grid>
            </Grid>


            <Footer />
        </>
    )
}

export default IndexPrincipal