import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchContentWrapper = styled.div`
    background-image:  linear-gradient(#DADADA 2.2px, transparent 2.2px), linear-gradient(90deg, #DADADA 2.2px, transparent 2.2px), linear-gradient(#DADADA 1.1px, transparent 1.1px), linear-gradient(90deg, #DADADA 1.1px, #EEEEEE 1.1px);
    background-size: 55px 55px, 55px 55px, 11px 11px, 11px 11px;
    background-position: -2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px;
    width: 100%;
    min-height: 90.7vh;
    padding: 5.5rem 0 0 0;

    h2 {
        line-height: 2;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.blue};
        text-align: center;
        background-color: ${({ theme }) => theme.colors.white};
    }

    @media screen and (max-width: 800px) {
        padding: 4.4rem 0 0 0;
    }

    @media screen and (max-width: 500px) {
        padding: 8rem 0 0 0;
    }
`

export const SearchContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    padding-bottom: .5rem;

    @media screen and (max-width: 800px) {
        row-gap: 1rem;
        padding: 1rem 0;
    }

    @media screen and (max-width: 500px) {
        row-gap: 1rem;
        padding: 0 0 1rem 0;
    }
`

export const TempDisplay = styled.div`
    margin: auto; 
    background-color: #eee;
    width: 100%;

    h3 {
        color: ${({ theme }) => theme.colors.blue};
        text-align: center;
        padding-bottom: .5rem;
    }
`

export const SearchContentCard = styled(Link)`
    background-color: white;
    display: flex;
    flex-direction:row;
    text-decoration: none;
    color: black;

    p {
        display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;  
            overflow: hidden;
    }

    img {
        min-height: 18rem;
        max-width: 12rem;
        object-fit: cover;
        border: .5rem solid white;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        
        p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }


        img {
            padding: .5rem;
            width: 100%;
            height: 100%;
        }
    }


`

export const SearchContentInfo = styled.div`
    padding: .75rem 0;

    h3 {
        margin-bottom: .25rem;
    }

    p {
        line-height: 1.5;
        margin-bottom: .25rem;
    }

    .date {
        line-height: 1.2;
        font-size: .9rem;
    }
`