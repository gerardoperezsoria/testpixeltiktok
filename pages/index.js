import Appbare from '../components/Appbare.js'
import Container from '../components/Container.js'
import Card from '../components/Card'
import Link from '@mui/material/Link';
// import Video from '../components/Video'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Hero2 from '../mantine/hero2'
import ec from '../images/ec.gif'
import bgc from '../images/backgroundceducaty.svg'
import certificate from "../images/certificate.jpeg"
import excelexpert from "../images/ExcelExpert.png"
import plandecarrera from "../images/pdcp.jpeg"
import programador from "../images/programador.jpeg"
import { useRouter } from 'next/router';
// import Header from '../mantine/header.ts'
import Hero from '../mantine/hero'
import Button from '../mantine/buttons'
import ButtonCustomized from '../elementsMaterialUI/ButtonCustomized'
import logoceducaty from '../images/logoceducaty.png'
import {
  Grid
} from '@material-ui/core';
import NavBarBulma from '../components/NavBarBulma'
import Header from '../mantine/header.js'
import Carousel from '../components/Carousel.js'
import CarrousselV2 from '../components/CarrousselV2.js'
import Whatsapp from "../components/whatsapp.js"
import { useState } from 'react';
import BasicFab from '../elementsM/BasicFab.js'
import Footer from '../components/Footer.js';
// import { Certificate } from 'crypto';
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function IndexPrincipal() {
  const router = useRouter();
  const [images, setImages] = useState(
    [
      logoceducaty,
      bgc,
      ec
    ]
  )

  return (
    <>
      <Header />

      {/* <Carousel images={images} /> */}
      
        <CarrousselV2 />
      
      <div style={{ height: '300px' }} className='bg-portada parallax'>
        <br />
        <br />
        <br />
        <Grid container justifyContent="center">
          <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
            <Image

              src={logoceducaty}
              alt="Picture of the author"
              width={300}
              height={200}
            />
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: 'red' }}
            >
              Número de Acreditación ante SEP-CONOCER CE1274-OC063-18
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "center" }} md={6} sm={12} xs={12}>
            <div className="containeriframe">
              <iframe className="responsive-iframe" src="https://www.youtube.com/embed/b_EwwwyEqnk?controls=0"></iframe>
            </div>
          </Grid>
        </Grid>
      </div>

      <br />
      <Grid container justifyContent="center">
        <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
          <div className='centervertical'>
            <Image

              src={certificate}
              alt="Certificate"
              width={300}
              height={200}
            />
          </div>
        </Grid>
        <Grid item style={{ textAlign: "center" }} md={6} sm={12} xs={12}>
          <div className='centervertical'>
            <div>
              <Typography
                variant="h5"
                component="h5"
                sx={{ color: '#6bb023' }}
              >
                Certificate como instructor
              </Typography>
              <div className='centrar-button-div'>
                <ButtonCustomized label="Mas información..." url='/landingpage/instructor' interna={true} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <br />
      <Grid container justifyContent="center">
        <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
          <div className='centervertical'>
            <Image

              src={plandecarrera}
              alt="Plan de Carrera"
              width={300}
              height={200}
            />
          </div>
        </Grid>
        <Grid item style={{ textAlign: "center" }} md={6} sm={12} xs={12}>
          <div className='centervertical'>
            <div>
              <Typography
                variant="h5"
                component="h5"
                sx={{ color: '#6bb023' }}
              >
                ¿Aspiras a un cargo Directivo ó Mando Medio?
              </Typography>
              <div className='centrar-button-div'>
                <ButtonCustomized label="Mas información..." url='/landingpage/plandecarrera' interna={true} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <br />
      <Grid container justifyContent="center">
        <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
          <div className='centervertical'>
            <Image

              src={excelexpert}
              alt="Excel"
              width={300}
              height={200}
            />
          </div>
        </Grid>
        <Grid item style={{ textAlign: "center" }} md={6} sm={12} xs={12}>
          <div className='centervertical'>
            <div>
              <Typography
                variant="h5"
                component="h5"
                sx={{ color: '#6bb023' }}
              >
                Certificate en EXCEL y WORD ante MICROSOFT INTERNACIONAL
              </Typography>
              <div className='centrar-button-div'>
                <ButtonCustomized label="Mas información..." url='/landingpage/certificacionms' interna={true} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <br />
      <Grid container justifyContent="center">
        <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
          <div className='centervertical'>
            <Image

              src={programador}
              alt="Certificate"
              width={300}
              height={200}
            />
          </div>
        </Grid>
        <Grid item style={{ textAlign: "center" }} md={6} sm={12} xs={12}>
          <div className='centervertical'>
            <div>
              <Typography
                variant="h5"
                component="h5"
                sx={{ color: '#6bb023' }}
              >
                ¿Como tener tu propio NEGOCIO de CAPACITACIÓN con AVAL de SEP-CONOCER?.
              </Typography>
              <div className='centrar-button-div'>
                <ButtonCustomized style={{ textAlign: "center" }} label="Mas información..." url='/landingpage/negocio' interna={true} />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <br />
      <Footer />
    </>
  )
}

export default IndexPrincipal