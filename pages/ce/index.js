import Appbare from '../../components/Appbare.js'
import Container from '../../components/Container.js'
import Card from '../../components/Card'
import Link from '@mui/material/Link';
import Video from '../../components/Video'
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Hero2 from '../../mantine/hero2'
import ec from '../../images/ec.gif'
import bgc from '../../images/backgroundceducaty.svg'

// import Header from '../../mantine/header.ts'
import Hero from '../../mantine/hero'
import Button from '../../mantine/buttons'
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized';
import {
  Grid
} from '@material-ui/core';
import NavBarBulma from '../../components/NavBarBulma'
import Header from '../../mantine/header.js'

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Index() {
  return (
    <>
      <Header />
      <div style={{ height: '500px' }} className='bg-portada parallax2'>
        <div className="container">
          <div className="vertical-center">
            <Grid container justifyContent="center">
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: '900' }}
                >
                  Estándar EC0217.01
                </Typography>
                <br />
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ color: 'black' }}
                >
                  Impartición de cursos de formación del capital humano de manera
                  presencial grupal
                </Typography>
                <br />
                <div className='centrar-button-div'>
                  <ButtonCustomized label="Certificarme" url='/precios' interna={true} />
                </div>
              </Grid>
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}></Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className="parallax">
        <Typography
          variant="h4"
          component="h4"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >

        </Typography>
      </div>

      <div style={{ height: '500px' }} className='bg-portada33 parallax33'>
        <div className="container">
          <div className="vertical-center">
            <Grid container justifyContent="center">
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}></Grid>
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: '900' }}
                >
                  Estándar EC0301
                </Typography>
                <br />
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ color: 'black' }}
                >
                  Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso.
                </Typography>
                <br />
                <div className='centrar-button-div'>
                  <ButtonCustomized label="Certificarme" url='/precios' interna={true} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className="parallax2">
        <Typography
          variant="h4"
          component="h4"
        // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >

        </Typography>
      </div>
      <div style={{ height: '500px' }} className='bg-portada44 parallax44'>
        <div className="container">
          <div className="vertical-center">
            <Grid container justifyContent="center">
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: '900' }}
                >
                  Estándar EC0366
                </Typography>
                <br />
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ color: 'black' }}
                >
                  Desarrollo de cursos de formación en línea
                </Typography>
                <br />
                <div className='centrar-button-div'>
                  <ButtonCustomized label="Certificarme" url='/precios' interna={true} />
                </div>
              </Grid>
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}></Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className="parallax2">
        <Typography
          variant="h4"
          component="h4"
        // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >

        </Typography>
      </div>

      <div style={{ height: '500px' }} className='bg-portada55 parallax55'>
        <div className="container">
          <div className="vertical-center">
            <Grid container justifyContent="center">
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}></Grid>
              <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{ fontWeight: '900' }}
                >
                  Estándar EC0076
                </Typography>
                <br />
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ color: 'black' }}
                >
                  Evaluación de la competencia de candidatos con base en Estándares de
                  Competencia
                </Typography>
                <br />
                {/* <div className='centrar-button-div'>
                  <ButtonCustomized label="Certificarme" url='#' interna={true} />
                </div> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>Ceducaty | Copyright © 2021 | Todos los derechos reservados.</p>
          <p>Tus datos están seguros con nuestra <a href="https://landing.ceducaty.com/aviso_privacidad">política de privacidad</a></p>
        </div>
      </footer>
    </>
  )
}

export default Index