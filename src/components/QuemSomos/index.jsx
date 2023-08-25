import Doctor from '../../assets/doctor.png'
import Healthcare from '../../assets/healthcare.png'
import Hospital from '../../assets/hospital.png'
import Prescription from '../../assets/prescription.png'
import {
    Container,
    ContainerItems,
    LeftContainer,
    RightContainer,
    TopContainer,
    BottomContainer,
    Image
} from './styles'

function QuemSomos() {
    return (
        <>
            <Container id="quemsomos">
                <h1>Quem somos</h1>
                <ContainerItems>
                    <LeftContainer>
                        <p>
                            A BaykalMed é sua assessoria completa em importação
                            de medicamentos especiais, oncológicos e para
                            doenças raras. Oferecemos serviço especializado na
                            assessoria às empresas, pessoas físicas, órgãos e
                            instituições públicas, que necessitem importar
                            medicamentos aprovados em órgãos internacionais como{' '}
                            <span>FDA</span> e <span>EMA</span>, mas que não são
                            comercializados no Brasil, ou estejam indisponíveis
                            no mercado nacional. <br></br>
                            <br></br>A BaykalMed facilita sua vida, ao
                            personalizar o atendimento de importação às suas
                            necessidades. Com a BaykalMed você fica tranquilo,
                            pois todo o processo operacional obedece
                            estritamente a legislação brasileira e é feito em
                            nome do paciente contratante, de maneira que a
                            BaykalMed aplica o seu conhecimento sobre os
                            trâmites aduaneiros para que os seus clientes
                            recebam o medicamento com segurança, em sua
                            residência.<br></br>
                            <br></br> Contamos com profissionais capacitados que
                            oferecem suporte aos clientes de maneira prática,
                            segura, discreta e atenciosa. A BaykalMed conecta
                            você aos produtos de altíssima qualidade,
                            desenvolvidos por profissionais de excelência, dos
                            mais renomados centros de pesquisas e laboratórios
                            do mundo. <br></br>
                            <br></br>Então, seja qual o medicamento que
                            necessite, em qualquer região do país, nós da
                            BaykalMed lhe atenderemos com agilidade e atenção,
                            faremos um orçamento especial, para que você tenha o
                            melhor tratamento fármaco para a sua saúde e seu
                            bem-estar.
                        </p>
                    </LeftContainer>
                    <RightContainer>
                        <TopContainer>
                            <h2>A BaykalMed atende:</h2>
                            <div>
                                <p>
                                    <Image src={Prescription} />
                                    Pessoa Física em posse de prescrição médica.
                                </p>
                                <p>
                                    <Image src={Healthcare} />
                                    Secretarias e Órgãos públicos de saúde.
                                </p>
                                <p>
                                    <Image src={Hospital} />
                                    Hospitais públicos e privados.
                                </p>
                                <p>
                                    <Image src={Doctor} />
                                    Clínicas.
                                </p>
                            </div>
                        </TopContainer>
                        <BottomContainer>
                            <h2>Contamos com...</h2>
                            <div>
                                <h3>Atendimento Personalizado</h3>
                                <p>
                                    Atendimento integral ao paciente, da
                                    solicitação do medicamento até a sua
                                    entrega. O paciente é atualizado a cada
                                    etapa do processo.
                                </p>
                            </div>
                            <div>
                                <h3>Procedência</h3>
                                <p>
                                    Fiscalização da carga na chegada ao Brasil
                                    pela ANVISA e pela Receita Federal,
                                    garantindo a qualidade do medicamento e a
                                    legalidade da importação do produto.
                                </p>
                            </div>
                            <div>
                                <h3>Profissionais Especializados</h3>
                                <p>
                                    Temos uma equipe operacional completa e
                                    especializada para garantir a eficácia e
                                    segurança do processo de importação.
                                </p>
                            </div>
                        </BottomContainer>
                    </RightContainer>
                </ContainerItems>
            </Container>
        </>
    )
}

export default QuemSomos
