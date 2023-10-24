import { FiSearch } from "react-icons/fi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Container, Profile, Logo } from "./styles";

import { Input } from '../Input'
import { useAuth } from "../../hooks/auth";

import { Link ,useNavigate } from "react-router-dom";

export function Header() {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return (
        <Container>
            <Logo to="/">
                <h1>RocketMovies</h1>
            </Logo>
            <Input Icon={FiSearch} type="text" placeholder="Pesquisar pelo título" />
            <Profile>
                <div>
                    <Link to="/profile">{user.name}</Link>
                    <button onClick={handleSignOut}>sair</button>
                </div>
                <Link to="/profile">
                    <img src={avatarURL} alt={user.name} />
                </Link>
            </Profile>
        </Container>

    )
}