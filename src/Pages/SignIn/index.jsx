import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Link } from "react-router-dom";

import { FiLock, FiMail } from 'react-icons/fi'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    function handleKeyPress(e) {
        if(e.key == "Enter") {
            handleSignIn()
        }
    }

    return (
        <Container onKeyDown={e => handleKeyPress(e)}>
            <Form>
                <h1>RocketMovies</h1>
                <p>Avalie e comente sobre os filmes que você já assistiu</p>

                <h2>Faça seu login</h2>

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

                <Button 
                    title="Entrar" 
                    onClick={handleSignIn}
                />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    )
}