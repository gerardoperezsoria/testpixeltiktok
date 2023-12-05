import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Whatsapp from "./whatsapp"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
function Footer({whatsapp=true}) {
    return (
        <>
            <footer className="footer">
                <div className="content has-text-centered">
                    <Link href="https://www.youtube.com/channel/UCT11YvsZMDagv8fykVlm9SQ"><YouTubeIcon /></Link>
                    <Link href="https://www.facebook.com/ceducatymx"><FacebookIcon /></Link>
                    <Link href="https://www.instagram.com/ceducaty_sas_de_cv/"><InstagramIcon /></Link>
                    <Link href="https://www.linkedin.com/in/ceducaty/"><LinkedInIcon /></Link>
                    <Link href="https://twitter.com/ceducaty"><TwitterIcon /></Link>
                </div>
                <div className="content has-text-centered">
                    <p>Ceducaty | Copyright © 2021 | Todos los derechos reservados.</p>
                    <p>Tus datos están seguros con nuestra <a href="https://landing.ceducaty.com/aviso_privacidad">política de privacidad</a></p>
                </div>
            </footer>
            {whatsapp &&
                <div>
                    <div style={{ position: "fixed", bottom: 1, right: "1%" }}>
                        <Whatsapp />
                    </div>
                </div>
            }
        </>
    )
}

export default Footer