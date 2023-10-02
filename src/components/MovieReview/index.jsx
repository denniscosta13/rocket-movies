import { Container } from "./styles";

import { StarRate } from '../StarRate'
import { Tag } from '../Tag'

export function MovieReview({ data, ...rest}) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <StarRate rating={data.rating}/>
            <p>{data.description.split(/\s+/).slice(0, 20).join(" ")}...</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }

                </footer>
            }
        </Container>
    )
}