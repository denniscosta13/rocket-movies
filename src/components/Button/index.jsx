import { Container } from './styles'

export function Button({ title, loading = false, deleteBtn = false, ...rest }) {
    return (
        <Container 
            type="button"
            disabled={ loading }
            $deletebtn = {deleteBtn.toString()}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}