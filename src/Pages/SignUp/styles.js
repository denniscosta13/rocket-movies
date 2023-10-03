import styled from "styled-components";
import bgImage from '../../assets/movie-bg.jpeg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row-reverse;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Form = styled.form`
    width: max(40%,650px);

    display: flex;
    flex-direction: column;

    padding: 0 14rem;

    align-self: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK}; 
    }
    
    > p {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE}; 
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE}; 

        margin: 4.8rem 0;
    }

    > div + div {
        margin-top: .8rem;
    }

    > button {
        margin-top: 2.4rem;
        
    }

    a {
        margin-top: 4.2rem;
        align-self: center;

        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 1.6rem;

        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
    }
    
`

export const Background = styled.div`
    flex: 1;
    background: url(${bgImage}) lightgray  no-repeat center center;
    background-size: cover;

    opacity: 0.3;
`

