import styled from "styled-components";

export const Container = styled.div`
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

    > h1 {
        color: ${({theme}) => theme.COLORS.PINK};
        font-size: 2.4rem;
    }

    > img {
        width: 6.4rem;
        border-radius: 50%;
    }
`

export const Profile = styled.div`

`
