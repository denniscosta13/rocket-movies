import { api } from '../../services/api'
 
import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert('Preencha todos os campos.')
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert('Cadastro realizado com sucesso!')
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            }

            alert("Não foi possível cadastrar.")
        })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Avalie e comente sobre os filmes que você já assistiu</p>

                <h2>Faça seu login</h2>

                <Input 
                    Icon={FiUser} 
                    placeholder="Nome completo" 
                    type="text"
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    Icon={FiMail} 
                    placeholder="E-mail" 
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    Icon={FiLock}  
                    placeholder="Senha" 
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button  title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/"> 
                    <FiArrowLeft/>
                    Voltar para o login
                </Link>
            </Form>
            <Background />
        </Container>
    )
}