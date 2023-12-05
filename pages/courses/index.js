import Appbare from '../../components/Appbare.js'
import CardBulma from '../../components/CardBulma'
import backgroundec0301 from '../../images/backgroundec0301.png'
import backgroundec021701 from '../../images/backgroundec0301.png'
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
function Index() {
    return (
        <>
            <Header />
            <br />
            <br />


            <section className="hero">
                <div className="hero-body">
                    <h3 className="title">Cursos disponibles</h3>

                    <div className="columns">
                        <div className="column">
                            <CardBulma
                                // link='https://conocer.gob.mx/RENEC/fichaEstandar.do?method=obtenerPDFEstandar&idEstandar=280'
                                estandar='Estándar EC0301'
                                descripcion="Diseño de cursos de formación del capital humano de manera presencial grupal, sus instrumentos de evaluación y manuales del curso."
                                imagen={backgroundec0301}
                                url="courses/ec0301"
                            />
                        </div>
                        <div className="column">
                            <CardBulma
                                estandar='Estándar EC0217.01'
                                descripcion="Impartición de cursos de formación del capital humano de manera presencial grupal"
                                imagen={backgroundec021701}
                                url="courses/ec021701"
                            />
                        </div>
                        {/* <div className="column">
                            <CardBulma
                                // link='https://conocer.gob.mx/RENEC/fichaEstandar.do?method=obtenerPDFEstandar&idEstandar=1544'
                                estandar='Curso de Excel Microsoft Internacional'
                                descripcion="Alineación para proceso de certificación ante Microsoft Internacional y SEP-CONOCER México."
                                imagen={ExcelExpert}
                            />
                        </div> */}
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

export default Index