import { FiSearch } from "react-icons/fi";

import { Container, Profile, Logo } from "./styles";

import { Input } from '../Input'


export function Header() {
    return (
        <Container>
            <Logo to="/">
                <h1>RocketMovies</h1>
            </Logo>
            <Input Icon={FiSearch} type="text" placeholder="Pesquisar pelo título" />
            <Profile to="/profile">
                <div>
                    <strong>Dennis Costa</strong>
                    <span>sair</span>
                </div>

                <img src="https://github.com/denniscosta13.png" alt="" />
            </Profile>
        </Container>

    )
}