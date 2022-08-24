import styled from "styled-components";

export const PersonWrapper = styled.div`
    background-image:  linear-gradient(#DADADA 2.2px, transparent 2.2px), linear-gradient(90deg, #DADADA 2.2px, transparent 2.2px), linear-gradient(#DADADA 1.1px, transparent 1.1px), linear-gradient(90deg, #DADADA 1.1px, #EEEEEE 1.1px);
    background-size: 55px 55px, 55px 55px, 11px 11px, 11px 11px;
    background-position: -2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px;
    padding-top: 5.75rem;
    padding-bottom: 1rem;

    img {
        background-color: #eee;
    }
`

export const PersonContainer = styled.div`
    background-color: white;
    padding: .5rem;
    display: flex;
    flex-direction: column;

    .loading {
        height: 100vh;
        text-align: center;

        h2 {
            color: ${({ theme }) => theme.colors.navy};
        }
    }

    @media screen and (min-width: 2000px) {
        width: 1800px;
        margin: auto;
    }
`

export const PersonInfo = styled.div`
    background-color: white;
    margin: auto;
    margin-bottom: .5rem;
    position: relative;
    width: 100%;
    
    h2 { 
        text-align: center;
        padding: 0.5rem 0;
        background-color: ${({ theme }) => theme.colors.navy};
        color: white;
        letter-spacing: .125rem;
        font-size: 1.85rem;
    }

    button {
        position: absolute;
        bottom: -.5rem;
        right: 0;
        background-color: ${({ theme }) => theme.colors.orange};
        padding: .5rem;
        border: none;
        color: ${({ theme }) => theme.colors.white};
        width: 5.5rem;
        cursor: pointer;
    }
    
    button.hide::after {
        content: " more"
    }

    button.show::after {
        content: " less"
    }

    @media screen and (max-width: 1000px) {
        button {
            bottom: -2.45rem;
            left: 0;
        }
    }

    @media screen and (max-width: 630px) {
        button {
            bottom: -2.4rem;
            width: 5.75rem;
        }
    }
`

export const PersonSummary = styled.div`
    display: flex;
    background-color: #FCFCFC;
    padding: .25rem;
    justify-content: center;
    margin: auto;
    
    p {
        line-height: 1.5;
    }
`

export const PersonSummaryQueries = styled.div`
    padding: 0 1.5rem;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: bold;
`

export const PersonSummaryDescriptors = styled.div`

`

export const Overview = styled.div`
    text-align: center;
    margin: auto;
    width: 72.5%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    text-overflow: ellipsis;
    padding: 0.25rem 0;

    &.show {
        -webkit-line-clamp: initial;
    }

    p {
        line-height: 1.65;
    }

    @media screen and (max-width: 1000px) {
        padding: .25rem 1rem;
        width: 100%;
        margin: 0;
    }
`

export const PersonDisplay = styled.div`
    display: flex;
    column-gap: .5rem;

    @media screen and (max-width: 630px) {
        flex-direction: column;
    }
`

export const HeadShot = styled.div`
    background-color: ${({ theme }) => theme.colors.navy};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //Crap exact values
    height: 45.75rem;

     img {
        border-right: none;
        border-left: none;
        height: 30rem;
    }

    @media screen and (max-width: 1000px) {
        img {
            height: 20rem;
        }
    }

    @media screen and (max-width: 630px) {
        height: auto;

        img {
            border: none;
        }
    }

    @media screen and (max-width: 400px) {
        img {
            border: none;
            padding: .5rem 0;
        }
    }
`

export const DiscographyContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    justify-content: center;

    h2 {
        background-color: ${({ theme }) => theme.colors.navy};
        color: ${({ theme }) => theme.colors.white};
        padding: .5rem .5rem;
        margin-bottom: .5rem;
        letter-spacing: .125rem;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 630px) {
        h2 {
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.navy};
            text-align: center; 
        }
    }
`

export const Discography = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    flex-wrap: nowrap;
    background-color: #eee;
    row-gap: .5rem;
    height: 100%;

    @media screen and (max-width: 630px) {
        flex-direction: row;
        column-gap: .5rem;
        background-color: white;
    }
`

export const DiscographyCard = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: .5rem;
    height: 100%;
    background-color: whitesmoke;

    .empty {
            margin: 0 .5rem;
            font-size: 1.5rem;
        }

    a {
        text-decoration: none;
        color: black;
        text-align: center;
        background-color: white;
        min-height: 20rem;

        img {
            //Crap exact values
            min-width: 11rem;
            min-height: 15rem;
            max-height: 15rem;
            object-fit: fill;
        }

        h3, p {
            padding: 0 .5rem;
            max-width: 10.5rem;
        }
        
        h3 {
            font-size: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }


        p {
            padding-bottom: .15rem;
            font-size: .9rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }
    }

    @media screen and (max-width: 630px) {
        flex-direction: row;
        gap: .5rem;
        
        img {
            margin-top: .5rem;
            max-width: auto;
        }
    }
   
`