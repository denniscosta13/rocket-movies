import styled from "styled-components";

export const Container = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    text-transform: uppercase;

    background-color: ${({ theme, $ondetails }) => $ondetails === 'true' ? theme.COLORS.WINE : theme.COLORS.BACKGROUND_600};

    padding: 0.8rem 1.6rem;

    border-radius: 0.8rem;
`