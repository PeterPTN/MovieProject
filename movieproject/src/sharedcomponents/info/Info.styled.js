import styled from "styled-components";

export const InfoWrapper = styled.div`
    padding: 0 .25rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.blue};

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        border-top: .125rem solid  ${({ theme }) => theme.colors.blue};
        border-bottom: .125rem solid  ${({ theme }) => theme.colors.blue};

        div:nth-child(1) {
            order: 2;
        }
    }
`

export const InfoContainerColumn = styled.div`
    letter-spacing: .05rem;
    flex: ${(props) => props.second ? "2" : "1.25"};
    line-height: 1.5;
    background-color: white;
    padding: .25rem .25rem;
    text-align: ${(props) => props.second ? "center" : ""};
    background-color: ${(props) => props.second ? "" : "#FCFCFC"};
    margin: .125rem 0;

    * {
        text-decoration: none;
        font-weight: 500;
    }

    h2 {
        line-height: 1.2;
        margin-bottom: .25rem;
    }

    a {
        color: #B01F00;
    }

    a:hover {
        color: ${({ theme }) => theme.colors.orange};
    }

    h4, p {
        display: inline-block;
    }

    h4 {
        width: 7rem;
        font-weight: bold;
    }

    h3 {
        margin-top: 1rem;
        text-align: center;
        font-style: italic;
        font-weight: lighter;
        color: ${({ theme }) => theme.colors.blue};
    }

    @media screen and (max-width: 1300px) {
        margin: 0;

        h2 {
            margin-top: .5rem;
        }

        h3 {
            margin-bottom: .5rem;
        }
    }

    @media screen and (max-width: 1000px) {
        font-size: .95rem;
    }

    @media screen and (max-width: 600px) {
        h4 {
            width: 100%;
        }
    }
`