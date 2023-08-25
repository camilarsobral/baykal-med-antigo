import Produtos from '../../components/Produtos'
import QuemSomos from '../../components/QuemSomos'
import { Background, Container, Header, Text } from '../home/styles'

function Home() {
    return (
        <>
            <Background id="home">
                <Container>
                    <Header>
                        <h1>BaykalMed. Medicamentos até você.</h1>
                        <p>
                            Medicamentos especiais, oncológicos e para doenças
                            raras.
                        </p>
                    </Header>
                    <Text>
                        <p>
                            Nascemos para realizar sonhos, cultivar esperanças e
                            disponibilizar os melhores tratamentos, com
                            medicamentos modernos que atendam às suas demandas.
                        </p>
                        <a href="/">Solicite um orçamento</a>
                    </Text>
                </Container>
            </Background>
            <QuemSomos />
            <Produtos />
        </>
    )
}

export default Home
