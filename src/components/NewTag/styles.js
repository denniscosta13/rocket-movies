import styled from "styled-components";

export const Container = styled.div`
    padding: 1.6rem;

    height: 5.6rem;
    width: fit-content;


    border-radius: 1rem;

    display: flex;
    gap: 1.6rem;
    align-items: center;

    
    background-color: ${({ theme, $isnew }) => $isnew === "true"  ? "transparent" : theme.COLORS.BACKGROUND_700};
    border: ${({ theme, $isnew }) => $isnew === "true"  ? `2px dashed ${theme.COLORS.GRAY_300}` : "none" };
    
    > input {
        width: 100%;
        height: 5.6rem;
        
        background-color: transparent;
        
        border: none;
        border-radius: 1rem;
        
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        text-transform: capitalize;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}; 
        }

        
    }
    

    > button {
        border: none;
        background: none;
        height: 2.4rem;

        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;

        padding: 0;
        margin: 0;
    }
    
`