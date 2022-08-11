import styled from "styled-components";

export const FooterContainer = styled.footer`
    padding: .75rem 10rem .75rem;
    display: flex;
    align-items: flex-end;
    background-color: #222831;
    font-size: .75rem;
    color: silver;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: silver;
    }
    
    a:hover {
        text-decoration: underline;
    }

    p {
        justify-self: center;
        text-align: right;
    }

    .tmdb {
        text-align: left;
        font-size: .6rem;
    }

    @media screen and (max-width: 1500px) {
       padding: .75rem 4rem .75rem;
    }

    @media screen and (max-width: 1000px) {
       padding: .75rem 2rem .75rem;
    }

    @media screen and (max-width: 800px) {
        padding: .75rem 1rem .75rem;

        .tmdb {
            width: 50%;
        }
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 1rem;
    min-width: 5rem;

    img{
        width: 4rem;
        height: 3rem;
        object-fit: contain;
        margin-bottom: .25rem;
    }

    div {
        display: flex;   
        justify-content: flex-start;
        align-items: flex-end;

        p {
            margin: .75rem;
        }
    }
`