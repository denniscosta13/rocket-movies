import styled from "styled-components";

export const Container = styled.button`
    color: ${({theme}) => theme.COLORS.PINK};
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;

    border: none;
    background: transparent;

    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
`