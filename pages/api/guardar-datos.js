import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, telefono, email, certificacion } = req.body;
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbwDLirPtbN4PxbaDu_GIpj1Rf5iQ4jyeU_KJaIdrZfWvBrEOamXSSnOYvQyZZ7LVEnM/exec';
    
    try {
      await axios.post(scriptUrl, { nombre, telefono, email, certificacion });
      res.status(200).json({ message: 'Datos guardados correctamente' });
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      res.status(500).json({ error: 'Hubo un error al guardar los datos' });
    }
  } else {
    res.status(405).end();
  }
}
