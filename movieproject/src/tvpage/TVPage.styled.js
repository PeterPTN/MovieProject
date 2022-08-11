import styled from "styled-components";

export const TVWrapper = styled.div`
    background-image:  linear-gradient(#DADADA 2.2px, transparent 2.2px), linear-gradient(90deg, #DADADA 2.2px, transparent 2.2px), linear-gradient(#DADADA 1.1px, transparent 1.1px), linear-gradient(90deg, #DADADA 1.1px, #EEEEEE 1.1px);
    background-size: 55px 55px, 55px 55px, 11px 11px, 11px 11px;
    background-position: -2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px;
    padding: 6rem 10rem .5rem;

    @media screen and (max-width: 1500px) {
        padding: 5.75rem 4rem 1rem;
    }

    @media screen and (max-width: 1000px) {
        padding: 5.75rem 2rem 1rem;
    }

    @media screen and (max-width: 800px) {
        padding: 5.75rem 1rem 1rem;
    }

    @media screen and (max-width: 500px) {
        padding: 5.4rem 1rem 1rem;
    }
`

export const TVContainer = styled.div`
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
