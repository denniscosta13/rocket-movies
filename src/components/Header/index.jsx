import { FiSearch } from "react-icons/fi";

import { Container, Profile } from "./styles";

import { Input } from '../Input'


export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input Icon={FiSearch} type="text" placeholder="Pesquisar pelo título" />
            <Profile />
        </Container>

    )
}