import { Container, Text } from './styles'

function Produtos() {
    return (
        <Container>
            <h1>Produtos</h1>
            <p>
                Trabalhamos somente com produtos originais e procedência
                ilibada, toda verificação é realizada dentro dos mais
                criteriosos parâmetros, tudo para que você receba seu produto
                com segurança e confiabilidade.
            </p>
            <Text>
                <div>
                    <h3>Linhas de marca</h3>
                    <p>
                        Produtos farmacêuticos de marca são produtos
                        farmacêuticos desenvolvidos por empresas farmacêuticas
                        internacionais como Pfizer, Roche, BMS, GSK, Amgen,
                        Sanofi, Novo Nordisk, etc. A BaykalMed buscará ajudá-lo
                        acessar esses produtos com os melhores preços para
                        linhas de marca. Importante destacar que o produto que é
                        fabricado por empresas internacionais, geralmente tem a
                        mesma origem, mesmo que sejam comercializados em países
                        diferentes. Assim, no seu orçamento estarão informações
                        sobre a origem, lote e validade.
                    </p>
                </div>
                <div>
                    <h3>Genéricos Turcos</h3>
                    <p>
                        Os Genéricos Turcos são os produtos farmacêuticos
                        fabricados na Republica da Turquia, como as marcas Onco
                        Ilac, Deva, Kocak e Nobel Ilac. Os fabricantes turcos
                        geralmente fabricam genéricos para linhas de marca,
                        depois que a patente seja superior a 20 anos. Além
                        disso, a Turquia é membro do PICS (Práticas Integrativas
                        e Complementares), a qualidade dos genéricos turcos é a
                        mesma dos produtos fabricados na UE, mas os preços são
                        muito mais baixos do que os produtos farmacêuticos de
                        marca.
                    </p>
                </div>
            </Text>
        </Container>
    )
}

export default Produtos
