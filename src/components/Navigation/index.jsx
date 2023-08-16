import { Link } from 'react-router-dom'

import Logo from '../../assets/mainlogo.png'
import { Container, Image, Menu, Li } from './styles'

function Navigation() {
    return (
        <Container>
            <Image src={Logo} alt="" />
            <Menu>
                <Li>
                    <Link to={''}>Home</Link>
                </Li>
                <Li>
                    <Link to={''}>Quem Somos</Link>
                </Li>
                <Li>
                    <Link to={''}>Como Funciona</Link>
                </Li>
                <Li>
                    <Link to={''}>Produtos</Link>
                </Li>
                <Li>
                    <Link to={''}>Contato</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Navigation
