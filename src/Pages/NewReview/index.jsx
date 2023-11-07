import { Container, Form, TextArea } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NewTag } from "../../components/NewTag";

import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function NewReview() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState()

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')
    
    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewReview() {
        
        if(!title) {
            return alert('Digite o título da nota.')
          }
      
          if(newTag) {
            return alert('Você inseriu uma tag, mas não adicionou. Clique no botão de adicionar')
          }


        await api.post("/movies", {
            title,
            description,
            rating,
            tags
        })

        alert("Review criado com sucesso!")
        navigate(-1)
        
    }

    return (
        <Container>
            <Header/>

            <Form>
                <header>
                    <Link to="/">
                        <FiArrowLeft/>
                        Voltar
                    </Link>
                    <h1>Novo filme</h1>
                </header>
                
                <Input 
                    type="text" 
                    placeholder="Título" 
                    onChange={e => setTitle(e.target.value)}
                />
                <Input 
                    type="number" 
                    min="0" 
                    max="5" 
                    step="1" 
                    placeholder="Sua nota (0 a 5)" 
                    onChange={e => setRating(e.target.value)}
                />

                <TextArea  
                    placeholder="Observações" 
                    onChange={e => setDescription(e.target.value)}
                />

                <div className="tags-section">
                    <h3>Marcadores</h3>
                    <div className="tags">
                        {
                            tags.map(tag => (
                                <NewTag
                                    key={tag}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <NewTag 
                            isNew 
                            placeholder="Novo marcador"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
                    </div>
                </div>

                <Button deleteBtn title="Excluir filme"/>
                <Button 
                    title="Salvar alterações"
                    onClick={handleNewReview}
                />
            </Form>
        </Container>
    )
}