import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

import { Container, ContainerItems } from './styles'

function PerguntasFrequentes() {
    return (
        <Container>
            <h1>Perguntas Frequentes</h1>
            <ContainerItems>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            1. Quais os documentos necessários para a
                            importação?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Receita médica, válida e redigida em português
                            contendo: Nome e endereço completo do paciente; Nome
                            comercial e/ou do princípio ativo do medicamento;
                            Quantidade para aquisição; Posologia; Data (a
                            receita tem validade de 180 dias); Carimbo (com nome
                            legível), assinatura e CRM; Cópia Simples do
                            documento de identidade do paciente; Cópia Simples
                            do documento CPF do paciente; Pacientes menor de
                            idade: certidão de nascimento + Cópia simples dos
                            documentos de identidade e CPF do responsável.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            2. Quem pode importar medicamentos?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Toda pessoa física pode importar medicamentos para
                            seu próprio tratamento, ou de seus dependentes. A
                            importação para medicamentos tem isenção tributária
                            (para processos de até US$ 10.000).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            3. Tem medicamentos para pronta entrega?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Não, trabalhamos com a mediação entre você e
                            fornecedores de medicamentos, com a garantia de que
                            o fornecedor cumpre as normativas da ANVISA para a
                            estocagem dos mesmos. Adquirir medicamentos
                            importados com pronta entrega, pode ser prejudicial
                            e pode colocar a saúde do paciente em risco, pois
                            não há como garantir a qualidade dos produtos, que
                            possuem prazo de validade e que podem sofrer
                            alterações provocadas por condições ambientais
                            inadequadas, especialmente por longos períodos de
                            armazenagem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            4. Qual o prazo para receber o medicamento em casa?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            O processo de importação direta para o paciente leva
                            de 20 a 30 dias, a partir do envio da documentação
                            necessária. Durante este período, o medicamento
                            passa por fiscalização no país de origem (saída) e
                            na chegada ao Brasil, garantindo que os mesmos sejam
                            entregues ao usuário respeitando a legalidade e
                            preservando a qualidade do produto.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            5. O medicamento pode ser tributado ou taxado no
                            Brasil?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Os medicamentos* destinados à pessoa física têm
                            alíquota ZERO de Imposto de Importação e Isenção do
                            Imposto sobre Produtos Industrializados (*até o
                            limite de US$ 10.000).
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            6. Quais as formas de pagamento?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            O pagamento poderá ser feito através de cartão de
                            crédito internacional ou remessa bancária. Em ambos
                            os casos, o pagamento é efetuado diretamente ao
                            fornecedor.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7a-content"
                        id="panel7a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            7. Como saber o preço do medicamento e do frete?{' '}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Na nossa página inicial pode solicitar orçamento ou
                            enviar e-mail para baykalmed@.com.br, informando o
                            nome comercial ou princípio ativo para a cotação,
                            com imagem da receita e endereço da entrega.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel8a-content"
                        id="panel8a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            8. Como fazer o pedido?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Junto ao e-mail com a sua cotação, seguirão
                            documentos para a finalização do pedido, basta
                            preenchê-los e enviar as cópias dos documentos
                            requeridos. E, caso fique em dúvida, basta nos
                            contatar.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel9a-content"
                        id="panel9a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            9. Como acompanho meu pedido?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Após a confirmação do pagamento ao fornecedor, você
                            receberá o código de rastreamento, onde poderá
                            verificar o andamento do processo. A equipe da
                            BaykalMed notificará cada passo do processo até a
                            chegada do medicamento ao endereço de entrega.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel10a-content"
                        id="panel10a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            10. Posso importar medicamento refrigerado?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Sim, os medicamentos refrigerados são enviados em
                            embalagens especiais para garantir que cheguem ao
                            seu destino dentro dos parâmetros indicados pelo
                            laboratório fabricante.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel11a-content"
                        id="panel11a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            11. Posso cancelar um pedido?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            O pedido somente poderá ser cancelado até o momento
                            em que for despachado pelo fornecedor. Após ser
                            despachado, não é possível cancelar o pedido.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel12a-content"
                        id="panel12a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            12. Posso devolver o medicamento?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            As legislações da Europa e EUA não permitem a
                            devolução de medicamento ao laboratório ou
                            fornecedor.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel13a-content"
                        id="panel13a-header"
                    >
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            13. Quero obter informações adicionais sobre
                            importação de medicamentos...
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{ fontFamily: 'Montserrat, sans serif' }}
                        >
                            Você pode acessar páginas oficiais da Receita
                            Federal e ANVİSA: 1- Receita Federal do Brasil -
                            Importação de Bens Via Remessa Postal ou Encomenda
                            Aérea Internacional, Inclusive para Remessa de
                            Compras Realizadas Via Internet - RTS (Regime de
                            Tributação). Para maiores informações, visite o site
                            da RECEITA FEDERAL 2- Receita Federal do Brasil -
                            Instrução Normativa SRF N° 1737 - Dispõe sobre o
                            tratamento tributário e os procedimentos de controle
                            aduaneiro aplicáveis às remessas internacionais Para
                            maiores informações, visite o site da RECEITA
                            FEDERAL 3- ANVISA :Portaria N° 344 - dispõe sobre os
                            medicamentos, sua classificação e permissão de
                            entrada no Brasil. Para maiores informações, visite
                            o site da ANVISA 4- Receita Federal do Brasil,
                            Instrução Normativa 51 que altera Instrução
                            Normativa 29 - que estabelece procedimento
                            simplificado para o despacho aduaneiro de
                            medicamentos destinados a pessoas físicas. Para
                            maiores informações, visite o site da RECEITA
                            FEDERAL 5- Lei 5991 de 17 de dezembro de 1973,
                            dispõe sobre o controle sanitário do comércio de
                            drogas, medicamentos, insumos farmacêuticos e
                            correlatos, e dá outras providências. Para maiores
                            informações, visite o site da Casa Civil
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ContainerItems>
        </Container>
    )
}

export default PerguntasFrequentes
