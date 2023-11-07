import { FiPlus } from 'react-icons/fi'

import { Container, Content, NewButton } from './styles'

import { Header } from '../../components/Header'
import { MovieReview } from '../../components/MovieReview'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Home() {
    const [reviews, setReviews] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function fetchReviews() {
            const response = await api.get(`/movies?title=${search}`)
            setReviews(response.data)
        }

        fetchReviews()
    }, [search])

    return (
        <Container>
            <Header 
                onChange={e => setSearch(e.target.value)}
            />

            <main>

                <header>
                    <h1>Meus filmes</h1>

                    <NewButton to="/new"> 
                        <FiPlus />
                        <span>Adicionar filme</span>
                    </NewButton>

                </header>

                <Content>
                    {
                        reviews.map(review => (
                                <MovieReview
                                    key={String(review.id)} 
                                    data={{
                                        title: review.title,
                                        rating: String(review.rating),
                                        description: review.description,
                                        tags: review.movieTags
                                        // tags: [
                                        //     { id: 1, name: 'outer space'},
                                        //     { id: 2, name: 'science'},
                                        //     { id: 3, name: 'adventure'}
                                        // ]
                                    }} 
                                />   

                            )
                        )
                    }
                    

                    
                </Content>
            </main>
        </Container>
    )
}

