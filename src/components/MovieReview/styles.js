import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    
    padding: 3.2rem;

    background-color: rgba(255, 133, 155, 0.05);;

    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: start;

    border: none;
    border-radius: 1.6rem;

   > ul {
    margin: .8rem 0 1.5rem;
   }

   > p {
    margin-bottom: 2rem;
   }

   > footer {
    span + span {
        margin-left: .8rem;
    }
   }

`