import { Container, Text } from './styles'

function ComoFunciona() {
    return (
        <Container id="comofunciona">
            <h1>Como importar medicamentos: Passo a Passo</h1>
            <Text>
                <div>
                    <h3>1 - Prescrição</h3>
                    <p>
                        Seu médico/a lhe dará a prescrição (receita) atualizada,
                        contendo: o medicamento, a dosagem, forma que deverá ser
                        ministrado (posologia), assinatura, o CRM do médico/a,
                        CID e período de tratamento. Envie o documento para os
                        especialistas da BaykalMed realizarem a análise e
                        validação, bem como verificarem a possibilidade de
                        importação do referido medicamento e o orçamento.
                    </p>
                </div>
                <div>
                    <h3>2 - Solicitando um Medicamento</h3>
                    <p>
                        Em porte da prescrição médica e documentos do paciente
                        (RG, CPF e comprovante de endereço), entre em contato
                        com a BaykalMed através dos nossos canais de atendimento
                        para solicitar sua importação. O pagamento será
                        realizado no momento da solicitação, de acordo com a
                        quantidade que será importada.
                    </p>
                </div>
                <div>
                    <h3>3 - Importação</h3>
                    <p>
                        A BaykalMed prestará a assessoria para a aquisição dos
                        medicamentos e, de posse da documentação do paciente,
                        fará o trâmite legal junto aos distribuidores e
                        laboratórios autorizados no país de origem do produto,
                        para importar os medicamentos a favor do paciente.
                    </p>
                </div>
                <div>
                    <h3>4 - Transporte</h3>
                    <p>
                        Após aquisição junto ao laboratório, o medicamento será
                        imediatamente enviado ao Brasil, seguindo rigorosamente
                        os critérios de armazenamento e transporte descritos na
                        bula do fabricante, preservando a temperatura exigida, a
                        fim de manter a segurança e eficácia do produto e do seu
                        tratamento.
                    </p>
                </div>
                <div>
                    <h3>5 - Entrega</h3>
                    <p>
                        Seu medicamento seguirá diretamente do país de origem ao
                        endereço que nos foi informado no momento da
                        solicitação. Quando a medicação chegar ao Brasil será
                        analisada pelo órgão sanitário vigente, a ANVISA
                        (Agência Nacional de Vigilância Sanitária) e seguirá ao
                        destino final sem nenhum transtorno ou custo adicional
                        ao paciente.
                    </p>
                </div>
            </Text>
        </Container>
    )
}

export default ComoFunciona
