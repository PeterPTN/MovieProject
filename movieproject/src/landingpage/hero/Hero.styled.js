import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    padding: 6rem 10rem .5rem;
    background-color: #EEEEEE;
    opacity: 1;
    background-image:  linear-gradient(#DADADA 2.2px, transparent 2.2px), linear-gradient(90deg, #DADADA 2.2px, transparent 2.2px), linear-gradient(#DADADA 1.1px, transparent 1.1px), linear-gradient(90deg, #DADADA 1.1px, #EEEEEE 1.1px);
    background-size: 55px 55px, 55px 55px, 11px 11px, 11px 11px;
    background-position: -2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px;

    @media screen and (max-width: 1500px) {
        padding: 6rem 4rem 0rem;
    }

    @media screen and (max-width: 1000px) {
        padding: 6rem 2rem 0rem;
    }

    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        padding: 5.7rem 1rem 0rem;
    }

    @media screen and (max-width: 500px) {
        padding: 9rem 1rem 0rem;
    }

    
`

export const HeroContainer = styled.div`
    width: 100%;
    position: relative;
    background-color: #eee;

    @media screen and (min-width: 2000px) {
        margin: auto;
        width: 1800px;
    }
`

export const HeroDisplayContainer = styled.div`
    display: flex;
        
    @media screen and (max-width: 1500px) {
        flex-direction: column;
    }  
`

export const TrailerView = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3.25;
    height: 44rem;

        h2 {
            background-color: black;
            padding: .25rem 0.5rem;
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.orange};
        }

        iframe {
            flex: 1;
            background-color: white;
        }

    @media screen and (max-width: 1500px) {
        height: 40rem;
        flex: none;
    }  
  
`

export const HeroCard = styled.div`
    overflow-y: scroll;
    flex: 1.25;
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    margin-left: .5rem;
    height: 44rem;
  
    @media screen and (max-width: 1500px) {
        flex: 1.1;
        margin-left: 0rem;
        flex-wrap: wrap;
        overflow-y: hidden;
        margin-top: .5rem;
        column-gap: .5rem;
        height: 10rem;
    }

    @media screen and (max-width: 800px) {
        height: 8rem;
    }

`

export const HeroDisplay = styled.div`
    display: flex;
    cursor: pointer;
    flex: 1;
    background-color: white;
 

    img {
        width: 9rem;
        height: 12.5rem;
    }

    a {
        width: 4rem;
    }

    @media screen and (max-width: 1500px) {
        min-width: 20rem;
        max-width: 20rem;
    }



`

export const HeroInfo = styled.div`
    flex: 1;
    padding: .5rem;
    position: relative;
    display: flex;
    flex-direction: column;

    * {
       margin-bottom: .5rem
    }
  
    h3 {
        font-size: 1rem;
    }

    p {
        border-radius: .15rem;
        width: 1.75rem;
        line-height: 1.2;
        text-align: center;
        color: white;
        font-weight: normal;
    }

    h4 {
        font-weight: 500;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    svg {
        margin-top: .5rem;
        font-size: 1.5em;
        display: block;
        position: absolute;
        bottom: .25rem;
    }

    @media screen and (max-width: 1500px) {
        svg {
            align-self: flex-end;
        }
    }
        
`





