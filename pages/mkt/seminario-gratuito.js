import * as React from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import Banner from '../../images/banner.svg'
import Formulario from '../../components/Formulario';

import { Card, CardContent, CardHeader } from '@mui/material';

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

    const handleTelefonoChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, ''); // Eliminar cualquier carácter que no sea un número
        setTelefono(inputValue.slice(0, 10)); // Limitar a 10 dígitos
    };


    async function saveDataToSheetpost(name, phone, email) {
        const SPREADSHEET_ID = '1XszCNtAtA3aZLFB7V219fAOB0lHW6-j0A_itweqGMUk'
        const AUTH_TOKEN = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs'; // Reemplaza esto con el token de autenticación que obtuviste al autenticar la cuenta de servicio.
        try {
            const range = 'A1:C1'; // Rango donde se guardarán los datos (A1:C1 representa las columnas A, B y C de la fila 1).
            const values = [[name, phone, email]]; // Datos a guardar como una matriz de filas.

            const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AUTH_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ values }),
            });

            // Verifica la respuesta, si es exitosa, el dato se ha guardado correctamente.
            if (response.ok) {
                console.log('Datos guardados correctamente en la hoja de cálculo.');
            } else {
                console.error('Error al guardar los datos en la hoja de cálculo.');
            }
        } catch (error) {
            console.error('Error al guardar los datos en la hoja de cálculo:', error);
        }
    }


    async function saveDataToSheet(name, phone, email) {
        // const spreadsheetId = '1E32kDzzxL80oJMSwx4ZEXD14QeXffyYDGYU7H1N0JMA';
        // const sheetName = 'A2:AZ100';
        // const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

        // const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;


        const SPREADSHEET_ID = '1XszCNtAtA3aZLFB7V219fAOB0lHW6-j0A_itweqGMUk';
        const AUTH_TOKEN = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs'; // Reemplaza esto con el token de autenticación que obtuviste al autenticar la cuenta de servicio.
        try {
            const range = 'A2:C2'; // Rango donde se guardarán los datos (A1:C1 representa las columnas A, B y C de la fila 1).
            const values = [[name, phone, email]]; // Datos a guardar como una matriz de filas.

            const response = await axios({
                method: 'post',
                url: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}:append`,
                params: {
                    valueInputOption: 'RAW', // Opción para ingresar los valores sin formato.
                    insertDataOption: 'INSERT_ROWS', // Insertar nuevas filas para los datos.
                    includeValuesInResponse: false,
                    access_token: AUTH_TOKEN,
                },
                data: {
                    values,
                },
            });

            // Verifica la respuesta, si es exitosa, el dato se ha guardado correctamente.
            if (response.status === 200) {
                console.log('Datos guardados correctamente en la hoja de cálculo.');
            } else {
                console.error('Error al guardar los datos en la hoja de cálculo.');
            }
        } catch (error) {
            console.error('Error al guardar los datos en la hoja de cálculo:', error);
        }
    }


    const implementation = async () => {
        debugger
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx7YvV2mZfepcpz8DllW-6jkCWMAyNF6KA4N_umG3rdj7joVwvP0rQje5D7_vF2wXd2/exec'
        const form = document.forms['submit-form']
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        })

    }


    const handleSubmitX = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx7YvV2mZfepcpz8DllW-6jkCWMAyNF6KA4N_umG3rdj7joVwvP0rQje5D7_vF2wXd2/exec';
        const form = e.target;
        debugger
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form),
            });

            if (response.ok) {
                console.log('Success!', response);
            } else {
                console.error('Error!', response.statusText);
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        // Aquí puedes validar los datos ingresados antes de enviarlos a Google Sheets
        // if (!nombre || !telefono || !correo) {
        //     alert('Por favor, completa todos los campos del formulario.');
        //     return;
        // }

        try {
            // const values = {
            //     nombre,
            //     telefono,
            //     correo,
            // };

            await implementation()
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Ocurrió un error al enviar el formulario. Por favor, intenta nuevamente.');
        }

    };

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid xs={12} md={12}>
                    <div style={{ textAlign: 'center' }}>
                        <Image src={Banner} alt="Banner" width={800} height={400} />
                    </div>
                </Grid>
                <Grid xs={12} md={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >
                        Carrera de EVALUADOR INDEPENDIENTE avalado por SEP-CONOCER
                    </Typography>
                </Grid>
                <Grid xs={12} md={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >
                        Obtén un ingreso extra desde casa y en tu tiempo libre evaluando a personas en tu área de expertis, con el aval de SEP-CONOCER en tan solo 4 meses.
                    </Typography>
                </Grid>
                <Grid xs={12} md={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >

                    </Typography>
                </Grid>

                <Grid xs={12} md={12}>
                    <Formulario />
                </Grid>

                <Grid xs={12} md={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >
                        Costos
                    </Typography>
                </Grid>

                <Grid xs={12} md={6}>
                    <Card>
                        <CardHeader title="4 Mensualidades de" />
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                $2,500 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid xs={12} md={6}>
                    <Card>
                        <CardHeader title="Inscripción GRATIS" />
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                $0 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* <Grid xs={4} md={4}>
                    <Card>
                        <CardHeader title="Certificación" />
                        <CardContent>
                            <Typography variant="h4" component="h4">
                                $800 MXN
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid> */}

                <Grid xs={12} md={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >
                        Formas de Inscripción
                    </Typography>
                </Grid>

                <Grid xs={12} md={6}>
                    <Card>
                        <CardHeader title="Contactar con un asesor" />
                    </Card>
                </Grid>

                <Grid xs={12} md={6}>
                    <Card>
                        <CardHeader title="Registrate a nuestro próximo evento" />
                    </Card>
                </Grid>

                <Grid xs={12} md={12}>
                    <Typography
                        variant="h4"
                        component="h4"
                        align="center"
                    >
                        Preguntas Frecuentes
                    </Typography>
                </Grid>
                <Grid xs={12} md={6}>
                    ¿Que es un evaluador independiente?
                </Grid>
                <Grid xs={12} md={6}>
                    ¿Que hace un evaluador independiente?
                </Grid>
                <Grid xs={12} md={6}>
                    ¿Quien puede ser un evaluador independiente?
                </Grid>
                <Grid xs={12} md={6}>
                    ¿Cual es el area laboral de un evaluador independiente?
                </Grid>
                <Grid xs={12} md={6}>
                    ¿Existe posibilidad de crecimiento despues de ser Evaluador independiente?
                </Grid>
            </Grid>
        </Box >


    );
};

export default LPEI;