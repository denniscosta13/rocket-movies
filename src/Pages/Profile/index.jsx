import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)



    async function handleUpdateProfile(){
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }
        
        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar
                </Link>
            </header>
            <Form>

                <Avatar>
                    <img src={avatar} alt="Foto usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            type="file" 
                            id="avatar" 
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input 
                    Icon={FiUser} 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    Icon={FiMail} 
                    type="email" 
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input 
                    Icon={FiLock} 
                    type="password" 
                    placeholder="Senha atual"
                    onChange={e => setOldPassword(e.target.value)}

                />
                <Input 
                    Icon={FiLock} 
                    type="password" 
                    placeholder="Nova senha"
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button 
                    title="Salvar"
                    onClick={handleUpdateProfile}
                />
            </Form>
        </Container>
    )
}