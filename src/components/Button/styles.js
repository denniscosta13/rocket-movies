import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    border-radius: 1rem;
    border: none;

    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme, $deletebtn }) => $deletebtn === "true" ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_600};

    background-color: ${({ theme, $deletebtn  }) => $deletebtn === "true" ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`