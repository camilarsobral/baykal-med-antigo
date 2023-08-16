import { useState } from 'react'

import api from '../../services/api'
import { Container, Form } from './styles'

function Contato() {
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
        await api
            .post('/send', formData, {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
                }
            })
            .then((response) => alert(response.data))
    }

    return (
        <Container className="container">
            <h1>Solicite um orçamento</h1>
            <Form onSubmit={handleFormSubmit}>
                <label htmlFor="nome">Nome: </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    onChange={handleInputChange}
                />
                <label htmlFor="nome">E-mail: </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                />
                <label htmlFor="nome">Telefone: </label>
                <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="Telefone com DDD"
                    onChange={handleInputChange}
                />
                <label htmlFor="nome">Receita médica: </label>
                <input
                    className="file"
                    type="file"
                    id="anexo"
                    name="anexo"
                    onChange={handleInputChange}
                />

                <input className="submit" type="submit" value="Enviar" />
            </Form>
        </Container>
    )
}

export default Contato
