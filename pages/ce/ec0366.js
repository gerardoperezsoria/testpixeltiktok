import Typography from '@mui/material/Typography';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized';
import {
    Grid
} from '@material-ui/core';
import Header from '../../mantine/header.js'
import Footer from '../../components/Footer.js';

function EC0366() {
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
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ color: 'black' }}
                                >
                                    Precio: $3472.52 MXN
                                </Typography>
                                <p>IVA incluido</p>
                                <br />
                                <div className='centrar-button-div'>
                                    <div style={{ backgroundColor: "yellow", color: "blue" }}>
                                        <Typography
                                            variant="p"
                                            component="p"
                                        >
                                            Accede a una Doble Certificación por el precio de una
                                        </Typography>
                                        <Typography
                                            variant="p"
                                            component="p"
                                        >
                                            ¡Solo hoy!
                                        </Typography>
                                    </div>
                                </div>
                                <br />
                                <div className='centrar-button-div'>
                                    <ButtonCustomized label="Tomar esta Certificación AHORA" url='https://pay.hotmart.com/Q79291205R?off=f1qjadtr&bid=1684798685398' interna={false} />
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
                                    📋 Incluye Certificado SEP-CONOCER
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    📶 Alineación y evaluación 100% en linea
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    💻 Sesiones en vivo por VIDEOLLAMADA
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    🛡 Garantía de Certificación
                                </Typography>

                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    ✅ Tutor personal certificado
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="h4"
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, textAlign: "left" }}
                                >
                                    👥 Asistencia personalizada por medio de whatsapp, correo, documentos compartidos
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

export default EC0366