import { Container } from "./styles";

export function Tag({ title, onDetails = false, ...rest}) {
    return (
        <Container $ondetails={onDetails.toString()} {...rest}>
            {title}
        </Container>
    )
}