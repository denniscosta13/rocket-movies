import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    width: 100%;
    
    border-radius: 1rem;
    
    display: flex;
    align-items: center;
    
    > input {
        background: transparent;

        border: none;
        border-radius: 1rem;
        
        
        padding: 1.6rem 2.4rem;
        
        width: 100%;
        height: 5.6rem;

        color: ${({ theme }) => theme.COLORS.WHITE};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-left: 1.6rem;
    } 
`