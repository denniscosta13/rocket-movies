import { FiPlus } from 'react-icons/fi'

import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { MovieReview } from '../../components/MovieReview'

export function Home() {
    return (
        <Container>
            <Header />

            <main>

                <header>
                    <h1>Meus filmes</h1>
                    <button type="button">
                        <FiPlus />
                        <span>Adicionar filme</span>
                    </button>
                </header>

                <Content>
                    <MovieReview data={{
                        title: 'Interstellar',
                        rating: '5',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia, animi ratione quisquam error praesentium. Ullam dignissimos commodi rerum! Repellendus quibusdam doloribus magnam! Sint illum voluptas unde culpa amet nobis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia, animi ratione quisquam error praesentium. Ullam dignissimos commodi rerum! Repellendus quibusdam doloribus magnam! Sint illum voluptas unde culpa amet nobis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia, animi ratione quisquam error praesentium. Ullam dignissimos commodi rerum! Repellendus quibusdam doloribus magnam! Sint illum voluptas unde culpa amet nobis?',
                        tags: [
                            { id: 1, name: 'outer space'},
                            { id: 2, name: 'science'},
                            { id: 3, name: 'adventure'}
                        ]
                    }} />

                    <MovieReview data={{
                        title: 'Spider-man',
                        rating: '4',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia, animi ratione quisquam error praesentium. Ullam dignissimos commodi rerum! Repellendus quibusdam doloribus magnam! Sint illum voluptas unde culpa amet nobis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia, animi ratione quisquam error praesentium. Ullam dignissimos commodi rerum! Repellendus quibusdam doloribus magnam! Sint illum voluptas unde culpa amet nobis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quia, animi ratione quisquam error praesentium. Ullam dignissimos commodi rerum! Repellendus quibusdam doloribus magnam! Sint illum voluptas unde culpa amet nobis?',
                        tags: [
                            { id: 1, name: 'marvel'},
                            { id: 2, name: 'heroes'},
                            { id: 3, name: 'adventure'}
                        ]
                    }} />

                    
                </Content>
            </main>
        </Container>
    )
}

