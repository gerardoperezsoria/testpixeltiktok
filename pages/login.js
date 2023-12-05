'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import SnackBar from '../components/SnackBar'

export default function Login() {
  const router = useRouter()
  const [correo, setcorreo] = useState("")
  const [password, setpassword] = useState("")
  const [codigo, setcodigo] = useState("")
  const [color, setColor] = useState("")
  const [sb, setSB] = useState(false)

  const validarCorreoEnGoogleSheet = async (correo, password, codigo) => {
    try {
      const spreadsheetId = '1ndn0ghcjwmTxV3ldqXtGbnRdGtI_U0PvxbNIqMOFULo';
      const sheetName = 'A2:AZ100';
      const apiKey = 'AIzaSyD-omat1PFvatdHmnJunZjqqJl68y_jRcs';

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      if (data && data.values) {
        const rows = data.values;
        const login = rows.some(row => row[5] === codigo);

        if (login) {
          localStorage.setItem('session', true);
          router.push("/courses")
        } else {
          localStorage.setItem('session', false);
          // window.sessionStorage.setItem("session", false)
          setColor('danger')
          setSB(true)
        }
      } else {
        console.log('No se encontraron datos en el Google Sheet.');
      }
    } catch (error) {
      console.log('Error al leer el archivo de Google Sheet:', error);
    }
  };
  useEffect(() => {
  }, []);


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm formulario">
          <div>
            <label for="codigo" className="block text-sm font-medium leading-6 text-gray-900">Ingresa tú Código</label>
            <div className="mt-2">
              <input value={codigo} onChange={(e) => { setcodigo(e.target.value) }} id="codigo" name="codigo" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <br />
          <div>
            <button onClick={() => { validarCorreoEnGoogleSheet(correo, password, codigo) }} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ingresar</button>
          </div>

        </div>
      </div>
      <SnackBar color={color} valor={sb}/>
    </>
  )
}
