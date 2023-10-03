import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Avalie e comente sobre os filmes que você já assistiu</p>

                <h2>Faça seu login</h2>

                <Input Icon={FiUser} placeholder="Nome completo" type="text" />
                <Input Icon={FiMail} placeholder="E-mail" type="email" />
                <Input Icon={FiLock} placeholder="Senha" type="password" />

                <Button  title="Cadastrar"/>

                <Link to="/"> 
                    <FiArrowLeft/>
                    Voltar para o login
                </Link>
            </Form>
            <Background />
        </Container>
    )
}