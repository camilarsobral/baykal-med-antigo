// import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/mainlogo.png'
import { Container, Image, Menu, Li } from './styles'

function Navigation() {
    // const [changeHomeLink, setChangeHomeLink] = useState(false)

    // window.onscroll = () => {
    //     if (!changeHomeLink && window.scrollY > 500) {
    //         setChangeHomeLink(true)
    //     }
    //     if (changeHomeLink && window.scrollY <= 500) {
    //         setChangeHomeLink(false)
    //     }
    // }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <Container>
            <Image src={Logo} alt="" />
            <Menu>
                <Li>
                    <Link to={'/'} smooth onClick={scrollToTop}>
                        Home
                    </Link>
                </Li>
                <Li>
                    <Link to={'/orcamento'} smooth>
                        Faça Seu Orçamento
                    </Link>
                </Li>
                <Li>
                    <Link to={'/como-funciona'} smooth>
                        Como Funciona
                    </Link>
                </Li>
                <Li>
                    <Link to={'/perguntas-frequentes'} smooth>
                        Perguntas Frequentes
                    </Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Navigation
