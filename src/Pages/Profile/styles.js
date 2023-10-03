import styled from "styled-components";

export const  Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    
    
    > header {
        width: 100%;
        background-color: #FF859B0D;

        padding: 6.4rem 0 6.4rem calc(7vw + 1rem) ;

        a {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 1.6rem;

            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
        }
    }
`

export const Form = styled.form`
    width: min(70%, 34rem);

    margin: 4rem auto;

    div + div {
        margin-top: .8rem;
    }

    div{
        &:nth-child(4), :nth-child(6) {
            margin-top: 2.4rem;
        }
    }
`

export const Avatar = styled.div`
    margin: -12.8rem auto 6.4rem;
    position: relative;

    width: 18.4rem;

    > img {
        width: 18.4rem;
        height: auto;

        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 7px;
        bottom: 7px;

        cursor: pointer;

        transition: filter 0.2s;

        input {
            display: none;
        }

        svg {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        }

        &:hover {
            filter: brightness(0.9);
        }
    }

`