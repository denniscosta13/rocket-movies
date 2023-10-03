import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: max-content auto;
    grid-template-areas:
    "header"
    "content";


    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Form = styled.form`
    grid-area: content;
    overflow-y: auto;

    padding: 4rem 12rem 8rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr) 272px repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 40px; 

    > header {
        grid-area: 1 / 1 / 2 / 3;

        h1 {
            margin-top: 2.4rem;
        }

        a {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 1.6rem;
            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
        }
    }

    > input:first-child {
        grid-area: 2 / 1 / 3 / 2;
    }

    > input:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
    }

    > button:first-child {
        grid-area: 5 / 1 / 6 / 2;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > button:last-child {
        grid-area: 5 / 2 / 6 / 3;
    }

    .tags-section {
        grid-area: 4 / 1 / 5 / 3;

        > h3 {
            font-size: 2rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    .tags {
        padding: 1.6rem;
        margin-top: 2.4rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        border-radius: 0.8rem;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2.4rem;
    }
`
export const TextArea = styled.textarea`
    grid-area: 3 / 1 / 4 / 3;

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 1.8rem 1.6rem;

    resize: none;

    border: none;
    border-radius: 1rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }
`

