import Image from 'next/image'
import logowhatsapp from "../images/logo-wasap.png"
function Whatsapp() {
    return (
        <a href="https://wa.me/527152185509/?text=Hola deseo certificarme puede contactarme un asesor. Mi nombre es: " target="_blank" rel="noreferrer">
            {/* <img src="logo.png" width="50" height="50"> */}
            <Image
                src={logowhatsapp}
                alt="Contactanos por whatsapp"
                width={70}
                height={70}
            />
        </a>
    );
}

export default Whatsapp