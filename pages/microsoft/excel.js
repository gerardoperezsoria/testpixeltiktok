import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
    Grid
} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicTextfield from '../../elementsMaterialUI/BasicTextField'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicStack() {
    const router = useRouter();
    const [usuario, setUsuario] = useState('')

    function handleChange(e) {
        setUsuario(e.target.value)
        console.log("setUsuario", e.target.value)
    }

    async function onSubmit(username, password) {
        console.log("username, password", username, password)
        const data = {
            username: username,
            password: password
        }
        // return userService.login(username, password)
        //     .then(() => {
        //         // get return url from query parameters or default to '/'
        //         const returnUrl = router.query.returnUrl || '/';
        //         router.push(returnUrl);
        //     })
        //     .catch(alertService.error);
        // Example POST method implementation:
        const url = "https://lodashy.com:9009/authentication"
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // return response.json(); // parses JSON response into native JavaScript objects
        console.log("response", response)
        if(response.statusText==="OK"){
            localStorage.setItem('user', JSON.stringify(data));
            router.push("/microsoft/cursogratis")
        }
    }

    return (
        <Grid container justify="center">
            <Grid item xs={6} style={{ textAlign: "center" }}>

                <Box sx={{ width: '100%' }} direction="row">
                    <Stack spacing={2} >
                        <Item>
                            <p>
                                Curso Gratuito solo para miembros registrados en el reto Academico de Excel
                            </p>
                            <BasicTextfield titulo="Escribe tu correo" value={usuario} onChange={(e) => handleChange(e)} />
                            <Button
                                key="/"
                                onClick={() => onSubmit(usuario, usuario)}
                                // sx={{ my: 2, color: 'black', display: 'block' }}
                                color="primary"
                                variant="contained"
                            >
                                Ingresar
                            </Button>
                        </Item>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
}
