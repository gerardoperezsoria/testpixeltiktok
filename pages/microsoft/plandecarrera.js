import Typography from '@mui/material/Typography';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized';
import {
    Grid
} from '@material-ui/core';
import Header from '../../mantine/header.js'
import Footer from '../../components/Footer.js';

function PlanDeCarrera() {
    return (
        <>
            <Header />
            <div className='bg-portada parallax2'>
                <div className="container">
                    <div className="vertical-center">
                        <Grid container justifyContent="center">
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ fontWeight: '900' }}
                                >
                                    PLAN DE CARRERA PROFESIONAL
                                </Typography>
                                <br />
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    sx={{ color: 'black' }}
                                >
                                    Enfocado a mejorar las habilidades GERENCIALES Y MANDOS MEDIOS de las personas que aspiran a puestos directivos y duplicar su sueldo en los proximos 6 meses.
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ color: 'black' }}
                                >
                                    PLAN A: $3900 MXN
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ color: 'black' }}
                                >
                                    PLAN B: $1950 MXN
                                </Typography>
                                <p>IVA incluido</p>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized label="Tomar esta Certificación AHORA" url='https://www.icemexicodigital.com/plan-de-carrera-profesional-oferta?sck=CCM0025-OC063-22' interna={false} />
                                </div>
                                <br />
                                <div className='centrar-button-div'>
                                    <a href="https://wa.link/3tg3ar" target="_blank" rel="noreferrer">
                                        !Tienes dudas contactanos dando click AQUI!
                                    </a>
                                </div>
                            </Grid>
                            <Grid item style={{ textAlign: "center" }} md={6} sm={12}>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    📋 Incluye Certificado EXCEL ante MICROSOFT INTERNACIONAL
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    📶 Habilidades Profesionales para Mandos Medios o Directivos
                                </Typography>

                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    💻 Diseño de Plan de Carrera
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default PlanDeCarrera