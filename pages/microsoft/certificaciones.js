import Appbare from '../../components/Appbare.js'
import CardBulma from '../../components/CardBulma'
import ExcelAssociate from '../../images/ExcelAssociate.png'
import ExcelExpert from '../../images/ExcelExpert.png'
import WordAssociate from '../../images/WordAssociate.png'
import Header from '../../mantine/header'

import {
    Grid
} from '@material-ui/core';
import NavBarBulma from '../../components/NavBarBulma'

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function Certificaciones() {
    return (
        <>
            <Header />
            <br />
            <br />


            <section className="hero">
                <div className="hero-body">
                    <h3 className="title">Certificaciones Microsoft Internacional</h3>

                    <div className="columns">
                        <div className="column">
                            <CardBulma
                                // link='https://conocer.gob.mx/RENEC/fichaEstandar.do?method=obtenerPDFEstandar&idEstandar=280'
                                estandar='Certificación Microsoft Internacional Excel Associate'
                                descripcion="Curso, coaching semanal en vivo de preparación para aplicar a la certificación en plataforma oficial Microsoft. Tiempo estimado 3 meses"
                                imagen={ExcelAssociate}
                            />
                        </div>
                        <div className="column">
                            <CardBulma
                                // link='https://conocer.gob.mx/RENEC/fichaEstandar.do?method=obtenerPDFEstandar&idEstandar=1544'
                                estandar='Certificación Microsoft Internacional Excel Expert'
                                descripcion="Curso, coaching semanal en vivo de preparación para aplicar a la certificación en plataforma oficial Microsoft. Tiempo estimado 3 meses"
                                imagen={ExcelExpert}
                            />
                        </div>
                        <div className="column">
                            <CardBulma
                                // link='https://conocer.gob.mx/RENEC/fichaEstandar.do?method=obtenerPDFEstandar&idEstandar=1627'
                                estandar='Certificación Microsoft Internacional Word Associate'
                                descripcion="Curso, coaching semanal en vivo de preparación para aplicar a la certificación en plataforma oficial Microsoft. Tiempo estimado 3 meses"
                                imagen={WordAssociate}
                            />
                        </div>
                    </div>

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

export default Certificaciones