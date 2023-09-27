import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() { 
    return (
        <Container>
            <header>
                <ButtonText Icon={FiArrowLeft} title="Voltar"/>
            </header>
            <Form>

                <Avatar>
                    <img src="https://github.com/denniscosta13.png" alt="Foto usuário" />
                    <label htmlFor="update-photo">
                        <FiCamera />
                        <input type="file" id="update-photo" />
                    </label>
                </Avatar>

                <Input Icon={FiUser} type="text" placeholder="Nome" />
                <Input Icon={FiMail} type="email" placeholder="E-mail" />
                <Input Icon={FiLock} type="password" placeholder="Senha atual" />
                <Input Icon={FiLock} type="password" placeholder="Nova senha" />
                <Button  title="Salvar"/>
            </Form>
        </Container>
    )
}