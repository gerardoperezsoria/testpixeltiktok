
// import Appbare from '../components/Appbare.js'
// import Container from '../components/Container.js'
// import Card from '../components/Card'
import Link from '@mui/material/Link';
// import Video from '../components/Video'
import Image from 'next/image'
// import Logo from '../images/logoceducaty.jpg'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// import CardBulma from '../components/CardBulma'
// import ArticleBulma from '../components/ArticleBulma'
// import Table from '../components/Table'
// import EC0076 from '../images/group6.jpg'
// import EC0301 from '../images/group3.jpg'
// import EC0217 from '../images/group7.jpg'
// import EC0366 from '../images/group5.jpg'
// import EC0727 from '../images/developer.jpg'


import {
    Grid
} from '@material-ui/core';
// import NavBarBulma from '../components/NavBarBulma'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function CertificacionMicrosoft() {
    return (
        <>
            <section className="hero is-medium is-link">
                <div className="hero-body">
                    {/* <img src="https://bulma.io/images/placeholders/128x128.png" />
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                    <p className="title">
                        ¿Quieres ser un instructor de Excel más confiado y capacitado?
                    </p>
                    <p className="subtitle">
                        Obtener una certificación de Microsoft Office Specialist Excel es la forma perfecta de hacerlo.
                    </p> */}
                </div>
            </section>


            <section className="hero bg-image-section">
                <div className="hero-body">
                Hola GPS!!!
                </div>
            </section>
            <section className="hero bg-image-section">
                <div className="hero-body">
                    Hola GPS!!!
                </div>
            </section>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>Ceducaty | Copyright © 2021 | Todos los derechos reservados.</p>
                    <p>Tus datos están seguros con nuestra <a href="https://landing.ceducaty.com/aviso_privacidad">política de privacidad</a></p>
                </div>
            </footer>
        </>
    )
}

export default CertificacionMicrosoft