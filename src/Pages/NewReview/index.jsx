import { Container, Form, TextArea } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";

import { FiArrowLeft } from "react-icons/fi";

export function NewReview() {
    return (
        <Container>
            <Header/>

            <Form>
                <header>
                    <ButtonText Icon={FiArrowLeft} title="Voltar" />
                    <h1>Novo filme</h1>
                </header>
                
                <Input type="text" placeholder="Título" />
                <Input type="number" min="0" max="5" step="1" placeholder="Sua nota (0 a 5)" />

                <TextArea  placeholder="Observações" />

                <div className="tags-section">
                    <h3>Marcadores</h3>
                    <div className="tags">
                        <NewTag value="teste"/>
                        <NewTag value="teste"/>
                        <NewTag isNew placeholder="Novo marcador"/>
                    </div>
                </div>

                <Button deleteBtn title="Excluir filme"/>
                <Button title="Salvar alterações"/>
            </Form>
        </Container>
    )
}