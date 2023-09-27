import { FiSearch } from "react-icons/fi";

import { Container, Profile } from "./styles";

import { Input } from '../Input'


export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input Icon={FiSearch} type="text" placeholder="Pesquisar pelo título" />
            <Profile>
                <div>
                    <strong>Dennis Costa</strong>
                    <span>sair</span>
                </div>

                <img src="https://github.com/denniscosta13.png" alt="" />
            </Profile>
        </Container>

    )
}