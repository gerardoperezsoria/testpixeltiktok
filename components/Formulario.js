import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

const Formulario = ({ruta, certificacion}) => {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [origen, setOrigen] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [url, seturl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsProcessing(true)
      await axios.post('/api/guardar-datos', { nombre, telefono, email, certificacion:origen });
      setNombre('');
      setEmail('');
      setTelefono('');
      setOrigen('');
      router.push(url)
    } catch (error) {
      alert('Hubo un error al guardar los datos');
      setIsProcessing(false)
    }
  };

  const handleTelefonoChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Eliminar cualquier carácter que no sea un número
    setTelefono(inputValue.slice(0, 10)); // Limitar a 10 dígitos
  };

  useEffect(()=>{
    seturl(ruta)
  },[ruta])

  useEffect(()=>{
    setOrigen(certificacion)
  },[certificacion])

  return (

    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box sx={{ boxShadow: 3, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', mb: 2 }}>
          Registrate a nuestro SEMINARIO GRATUITO ¡AHORA!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Teléfono"
            fullWidth
            value={telefono}
            onChange={handleTelefonoChange}
            variant="outlined"
            sx={{ mb: 2 }}
            inputProps={{
              maxLength: 10, // Limitar el número máximo de caracteres a 10
              inputMode: 'numeric', // Indicar que solo se permiten caracteres numéricos en dispositivos móviles
            }}
            required
          />
          <TextField
            label="Correo"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
            required
          />
          {isProcessing
            ?
            <CircularProgress />
            :
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
              disabled={false}
            >
              Registrarme
            </Button>
          }
        </form>
      </Box>

    </Container>
  );
};

export default Formulario;
