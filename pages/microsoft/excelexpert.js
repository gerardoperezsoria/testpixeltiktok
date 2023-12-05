import Typography from '@mui/material/Typography';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized';
import {
    Grid
} from '@material-ui/core';
import Header from '../../mantine/header.js'
import Footer from '../../components/Footer.js';

function ExcelExpert() {
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
                                    EXCEL EXPERT
                                </Typography>
                                <br />
                                <Typography
                                    variant="h5"
                                    component="h5"
                                    sx={{ color: 'black' }}
                                >
                                    Obten tu certificación en EXCEL EXPERT ante MICROSOFT INTERNACIONAL en 3 meses o menos
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ color: 'black' }}
                                >
                                    Precio: $2320 MXN
                                </Typography>
                                <p>IVA incluido</p>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized label="Tomar esta Certificación AHORA" url='https://pay.hotmart.com/D77563036F?off=s4634v72&bid=1684810974792' interna={false} />
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
                                    📋 Incluye Certificado EXCEL EXPERT ante MICROSOFT INTERNACIONAL
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    📶 Proceso de capacitación y certificación 100% en linea
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    💻 Sesiones en vivo semanales
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    🛡 Mas de 100 horas de capacitación en video desde 0 hasta avanzado
                                </Typography>

                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    ✅ Simuladores y examenes de prueba precertificación
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    ✅ Solicita tu factura para México(Solo pago con spei o deposito bancario)
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

export default ExcelExpert