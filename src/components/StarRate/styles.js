import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: row;
    gap: .8rem;

    list-style: none;
    
    > li svg {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2.4rem;

    }
`