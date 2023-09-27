import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function StarRate({ rating = 0 }) { 
    let rate = []     
        for (let index = 1; index <= 5; index++) {
            if(index === 0) {
                rate = [...rate,{
                    id: index,
                    active: false 
                }]
            } else if(index <= rating) {
                rate = [...rate, {
                    id:index,
                    active: true
                }]
            } else {
                rate = [...rate, {
                    id:index,
                    active: false
                }]
            }
            
        }

        return (
            <Container>
                    {
                        rate.map(rating => rating.active ? <li key={rating.id} > <AiFillStar /> </li> : <li key={rating.id} > <AiOutlineStar /> </li> )
                    }
            </Container>
        )
}