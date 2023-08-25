import { useState } from 'react'

import api from '../../services/api'
import { Container, Form } from './styles'

function Orcamento() {
    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        telefone: '',
        anexo: ''
    })

    function handleInputChange(event) {
        if (event.target.name === 'anexo') {
            campos[event.target.name] = event.target.files[0]
        } else {
            campos[event.target.name] = event.target.value
            setCampos(campos)
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(campos)
        send()
    }

    async function send() {
        const formData = new FormData()
        Object.keys(campos).forEach((key) => formData.append(key, campos[key]))
        await api.post('/send', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        })
    }

    return (
        <Container className="container" id="contato">
            <h1>Solicite um orçamento</h1>
            <Form onSubmit={handleFormSubmit}>
                <label className="hide" htmlFor="nome">
                    Nome:{' '}
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    onChange={handleInputChange}
                    required
                />
                <label className="hide" htmlFor="nome">
                    E-mail:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                    required
                />
                <label className="hide" htmlFor="nome">
                    Telefone:
                </label>
                <input
                    type="tel"
                    id="telefone"
                    pattern="[0-9]{2} [0-9]{1} [0-9]{4} [0-9]{4}"
                    maxLength="11"
                    name="telefone"
                    placeholder="Telefone com DDD"
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="nome">Receita médica: </label>
                <input
                    className="file"
                    type="file"
                    accept="image/png, image/jpeg, application/pdf"
                    id="anexo"
                    name="anexo"
                    onChange={handleInputChange}
                    multiple
                    required
                />

                <input className="submit" type="submit" value="Enviar" />
            </Form>
        </Container>
    )
}

export default Orcamento
