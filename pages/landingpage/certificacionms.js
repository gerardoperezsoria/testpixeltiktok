import Image from 'next/image'
import Typography from '@mui/material/Typography';

import ec from '../../images/ec.gif'
import bgc from '../../images/backgroundceducaty.svg'
import { useRouter } from 'next/router';
import ButtonCustomized from '../../elementsMaterialUI/ButtonCustomized'
import logoceducaty from '../../images/logoceducaty.png'
import {
    Grid
} from '@material-ui/core';
import Header from '../../mantine/header.js'
import { useState } from 'react';
import Footer from '../../components/Footer.js';

function CertificacionMS() {
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

            <div style={{ height: '300px' }} className='bg-portada parallax'>
                <br />
                <Grid container justifyContent="center">
                    <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
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
                            Cetificate en EXCEL EXPERT, EXCEL ASSOCIATE Ó WORD ASSOCIATE ante MICROSOFT INTERNACIONAL
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                        {/* <div className="containeriframe">
                            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/b_EwwwyEqnk?controls=0"></iframe>
                        </div> */}
                    </Grid>
                </Grid>
            </div>

            <Grid container justifyContent="center">
                <Grid item style={{ textAlign: "center" }} md={6} sm={10}>
                    <div className='centervertical'>
                        <Image

                            src={logoceducaty}
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>
                </Grid>
                <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                    <div className='centervertical'>
                        <div>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: '#6bb023' }}
                            >
                                ¡Felicidades fuiste seleccionado para obtener una beca!
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: 'black', textDecoration: 'line-through' }}
                            >
                                De: $4999 MXN
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: 'black' }}
                            >
                                A: $2320 MXN
                            </Typography>
                            <br />
                            <div className='centrar-button-div'>
                                <ButtonCustomized style={{ textAlign: "center" }} label="!Clic para obtener esta oferta AHORA¡" url='https://pay.hotmart.com/D77563036F?off=s4634v72&bid=1684981121678' interna={false} />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default CertificacionMS