import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Link } from "react-router-dom";

import { FiLock, FiMail } from 'react-icons/fi'

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Avalie e comente sobre os filmes que você já assistiu</p>

                <h2>Faça seu login</h2>

                <Input Icon={FiMail} placeholder="E-mail" type="email" />
                <Input Icon={FiLock} placeholder="Senha" type="password" />

                <Button  title="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    )
}