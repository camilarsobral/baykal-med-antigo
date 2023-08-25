import WhatsAppLogo from '../../assets/whatsapp.png'
import { Container, Image } from './styles'

function WhatsApp() {
    return (
        <Container>
            <a
                href="https://wa.me/905320590126"
                target="_blank"
                rel="noreferrer"
            >
                <Image src={WhatsAppLogo} alt="" />
            </a>
        </Container>
    )
}

export default WhatsApp
