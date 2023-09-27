//icons
import { FiArrowLeft } from 'react-icons/fi'
import { FiClock } from 'react-icons/fi'

// components
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { StarRate } from "../../components/StarRate"
import { Tag } from "../../components/Tag"

// styled containers
import { Container, Heading, TagList } from './styles'

export function Details() {
    return (
        <Container>
            <Header/>
            <main>

                <Heading>
                    <ButtonText Icon={FiArrowLeft} title="Voltar"/>

                    <div className="movie">
                        <h1>Interestellar</h1>
                        <StarRate rating={5}/>
                    </div>

                    <div className="review-creation">
                        <p id="author">
                            <img src="https://github.com/denniscosta13.png" alt="Foto do usuário" />
                            Por Dennis Costa
                        </p>
                        <p id="created-at">
                            <FiClock/>
                            27/09/22 às 10:03
                        </p>
                    </div>

                </Heading>

                <TagList>
                    <Tag onDetails title="Ficção Científica"/>
                    <Tag onDetails title="Drama"/>
                    <Tag onDetails title="Família"/>
                </TagList>

                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam, ad nemo fugiat dolores corrupti error delectus officia nisi voluptate accusantium soluta ipsa fugit, tempora vel omnis dolor! Quidem, nesciunt?
                    Quis architecto eum voluptatem perspiciatis obcaecati neque nihil, aperiam illo quibusdam voluptate praesentium repellat quam quia nulla vitae commodi vero enim corporis unde quod, nisi odio? Minima sunt id enim.
                    Molestias fugiat repudiandae modi. Dignissimos voluptatem, quos exercitationem asperiores quaerat vero culpa ea molestiae quis dolor alias at sit. Distinctio voluptatem adipisci facilis omnis quod sunt sed voluptates aliquid quidem!
                    Quisquam quod magni veniam earum? Repudiandae, quos? Voluptatem similique dolores eveniet quaerat perspiciatis soluta natus eum, alias veniam dignissimos minima magni tempora cum temporibus animi et modi id, repellendus cupiditate.
                    Magnam, cum? Dolorum blanditiis quos, asperiores libero possimus adipisci voluptates assumenda illo earum aspernatur culpa saepe tenetur explicabo beatae. Temporibus odit nam sapiente necessitatibus ad id repudiandae vel soluta voluptate.
                    Corporis, a? Totam delectus laudantium, quos, modi ullam asperiores enim nulla magni, necessitatibus similique harum? Asperiores, ea quia! In incidunt reiciendis quos! Eligendi reprehenderit perspiciatis vel, beatae eveniet architecto pariatur?
                    Neque nesciunt voluptate temporibus minus nulla consectetur dolorem eum iste cum, porro ratione, nam dicta animi, debitis praesentium vel consequuntur ipsa. Quo laboriosam quae adipisci, tenetur harum aut facere unde?
                </p>

            </main>

        </Container>
    )
}