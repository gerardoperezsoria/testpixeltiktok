import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';
import dynamic from 'next/dynamic'
import CircularProgress from '@mui/material/CircularProgress';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

export default function Home() {
    const [emailContent, setEmailContent] = useState('');
    const [asunto, setAsunto] = useState('');

    const [correos, setCorreos] = useState([])
    const [isProcessing, setIsProcessing] = useState(false);
    const [campos, setCampos] = useState(false);

    const leerCorreos = async () => {
        try {
            const spreadsheetId = '1XszCNtAtA3aZLFB7V219fAOB0lHW6-j0A_itweqGMUk';
            const sheetName = 'conocer!A2:AZ1000000';
            const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            if (data && data.values) {
                const rows = data.values;
                setCorreos(rows)
                console.log("correos", rows)
            } else {
                console.log('No se encontraron datos en el Google Sheet.');
            }
        } catch (error) {
            console.log('Error al leer el archivo de Google Sheet:', error);
        }
    };


    const handleChange = (content, delta, source, editor) => {
        setEmailContent(content);
    };


    const handleCorreosSend = async (e) => {
        e.preventDefault();
        try {
            setIsProcessing(true)
            correos.map(async (correo) => {
                await axios.post('/api/send', { nombre: correo[0], email: correo[2], asunto, emailContent });
            })
            setAsunto('');
            setEmailContent(null);
            // router.push(url)
            setIsProcessing(false)
        } catch (error) {
            console.log(error)
            alert('Hubo un error al guardar los datos');
            setIsProcessing(false)
        }
    };

    useState(() => {
        leerCorreos()
    }, [])

    // useState(() => {
    //     if (asunto !== "") {
    //         setCampos(false)
    //     }else{
    //         setCampos(true)
    //     }
    // }, [asunto])

    return <>
        <input type="text" value={asunto} onChange={(e) => { setAsunto(e.target.value) }} />
        <QuillNoSSRWrapper onChange={handleChange} modules={modules} formats={formats} theme="snow" />
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
                disabled={campos}
                onClick={(e) => { handleCorreosSend(e) }}
            >
                Enviar correos
            </Button>
        }
        {/* <input type="button" value="Enviar correos" onClick={(e) => { handleCorreosSend(e) }} /> */}
    </>
}
