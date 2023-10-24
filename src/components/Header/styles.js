import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 11.5rem;

    padding: 2.4rem 12.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-bottom: 1px solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY_400};


    > img {
        width: 6.4rem;
        border-radius: 50%;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: max-content;

        line-height: 2.4rem;

        a {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.WHITE};
            text-decoration: none;
            font-weight: bold;

        }
        
        button {
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.GRAY_300};
            font-size: 1.4rem;
            border: none;
            background: none;
        }
    }
    

    > a img {
        width: 6.4rem;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY_400}; 
    }

    `

export const Logo = styled(Link)`
    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2.4rem;
    }
`