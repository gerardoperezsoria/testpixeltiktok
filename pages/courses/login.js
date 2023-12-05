import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function AuthenticationImage() {
  const router = useRouter();
  const { classes } = useStyles();
  const [correo, setcorreo] = useState("")
  const [password, setpassword] = useState("")

  async function onSubmit() {
    try {
      const data = {
        correo: correo,
        password: password,
        status: 1
      }
      const url = "https://lodashy.com:9009/api/authentication"
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      const respuesta = await response.json()
      console.log("respuesta", respuesta[0].username, respuesta.length)
      if (respuesta.length > 0) {
        localStorage.setItem('user', JSON.stringify(respuesta[0].username));
        router.push(`/courses/ec0301`)
      } else {
        alert("Usuario o Password incorrectos")
      }

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
          Bienvenido a UNIVERSIDAD ceducaty
        </Title>
        <TextInput label="Correo" placeholder="hello@gmail.com" size="md" value={correo} onChange={(e) => { setcorreo(e.target.value) }} />
        <PasswordInput label="Contraseña" placeholder="Your password" mt="md" size="md" value={password} onChange={(e) => { setpassword(e.target.value) }} />
        <Checkbox label="Mantenerme conectado" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={() => { onSubmit() }}>
          Ingresar
        </Button>

        <Text align="center" mt="md">
          ¿No tienes una cuenta?{' '}
          <a href="#" weight={700} onClick={(event) => event.preventDefault()}>
            Registrarme
          </a>
        </Text>
      </Paper>
    </div>
  );
}