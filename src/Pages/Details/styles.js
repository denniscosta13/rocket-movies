import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};;

    display: grid;
    grid-template-rows: max-content auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;

        display: flex;
        flex-direction: column;
        gap: 4rem;
        
        padding: 4rem 12rem 15.4rem;

        overflow-y: auto;

        &::-webkit-scrollbar {
            width: .8rem;
            height: 9.6rem;
            border-radius: .8rem;
            background: ${({ theme }) => theme.COLORS.PINK};
        }

        p {
            width: clamp(45ch, 50% 75ch);

            font-size: 1.6rem;
            text-align: justify;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
  
`


export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .movie  {
        display: flex;
        align-items: baseline;
        gap: 1.6rem;
    }

    .review-creation {
        display: flex;
        gap: .8rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.WHITE};

        img {
            width: 1.6rem;
            height: auto;
    
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
            border-radius: 50%;
    
            margin-right: .8rem;
        }
        
        svg {
            margin-right: .8rem;
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }
`

export const TagList = styled.div`
     span + span {
        margin-left: .8rem;
    }
`