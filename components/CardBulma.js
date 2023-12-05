import Appbare from '../components/Appbare.js'
import Container from '../components/Container.js'
import Card from '../components/Card'
import Link from '@mui/material/Link';
import Video from '../components/Video'
import Image from 'next/image'
// import Logo from '../images/logoceducaty.jpg'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import {
    Grid
} from '@material-ui/core';
import NavBarBulma from '../components/NavBarBulma'

import ButtonCustomized from '../elementsMaterialUI/ButtonCustomized'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function CardBulma(props) {

    return (
        <>

            <div className="card">
                <div className="card-image">
                    {/* <figure className="image is-4by3"> */}
                    <Image
                        src={props.imagen}
                        alt="Picture of the author"
                    // width={100}
                    // height={75}
                    />
                    {/* </figure> */}
                </div>
                <div className="card-content">
                    <div className="content">
                        <p style={{fontWeight:'bold'}}>{props.estandar}</p>
                        <p>{props.descripcion}</p>
                        {props.link &&
                            <a href={props.link} target="_blank" rel="noreferrer">Descarga el Estándar de Competencia</a>
                        }
                    </div>
                    <ButtonCustomized label="Ingresar" url={props.url} interna={true} />
                </div>
            </div>

        </>
    )
}

export default CardBulma