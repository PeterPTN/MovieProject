import styled from "styled-components";

export const MovieWrapper = styled.div`
    background-image:  linear-gradient(#DADADA 2.2px, transparent 2.2px), linear-gradient(90deg, #DADADA 2.2px, transparent 2.2px), linear-gradient(#DADADA 1.1px, transparent 1.1px), linear-gradient(90deg, #DADADA 1.1px, #EEEEEE 1.1px);
    background-size: 55px 55px, 55px 55px, 11px 11px, 11px 11px;
    background-position: -2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px;
    padding-top: 5.75rem;
    padding-bottom: 1rem;
`

export const MovieContainer = styled.div`
    background-color: white;
    padding: .5rem;

    .loading {
        height: 100vh;
        text-align: center;

        h2 {
            color: ${({theme}) => theme.colors.navy};
        }
    }
`