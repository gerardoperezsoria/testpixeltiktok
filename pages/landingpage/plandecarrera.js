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

function PlanDeCarrera() {
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

            <div className='bg-portada parallax'>
                <br />
                <br />
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
                            Plan de Carrera Profesional
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center" }} md={6} sm={10} xs={10}>
                        <div className='centervertical'>
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{ color: 'black', textAlign: 'justify' }}
                            >
                                Para quien desea aspirar a un puesto DIRECTIVO ó 
                                MANDO MEDIO en los próximos 6 meses y duplicar su salario.
                            </Typography>
                        </div>
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
                                sx={{ color: 'black' }}
                            >
                                PLAN A: $1950 MXN
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h4"
                                sx={{ color: 'black' }}
                            >
                                PLAN B: $3900 MXN
                            </Typography>
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

export default PlanDeCarrera