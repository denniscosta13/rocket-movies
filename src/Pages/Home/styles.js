import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: max-content auto;
    grid-template-areas:
    "header"
    "content";

    
    height: 100vh;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    > main {
        margin: 5rem auto 0;

        width: min(80%, 112rem);

        overflow-y: auto;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 4rem;

            svg {
                font-size: 2.4rem;
            }

            h1 {
                font-size: 3.2rem;
                font-weight: 400;
            }

            button {
                display: flex;
                align-items: center;
                gap: .8rem;

                height: 4.8rem;

                background-color: ${({ theme }) => theme.COLORS.PINK};

                border: none;
                border-radius: .8rem;

                padding: 1.6rem 3.2rem;
            }

            
        }
    } 

`


export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

`