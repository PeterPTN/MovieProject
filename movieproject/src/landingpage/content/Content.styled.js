import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: #EEEEEE;
    opacity: 1;
    height: 84rem;
    background-image:  linear-gradient(#DADADA 2.2px, transparent 2.2px), linear-gradient(90deg, #DADADA 2.2px, transparent 2.2px), linear-gradient(#DADADA 1.1px, transparent 1.1px), linear-gradient(90deg, #DADADA 1.1px, #EEEEEE 1.1px);
    background-size: 55px 55px, 55px 55px, 11px 11px, 11px 11px;
    background-position: -2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px;

    @media screen and (max-width: 800px) {
        height: 88.5rem;
    }

    @media screen and (max-width: 500px) {
        height: 83.5rem;  
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    margin-bottom: 2rem;
 `

export const ContentCardWrapper = styled.div`
    margin-top: 1.5rem;
    
    h3 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.blue};
        display: inline-block;  
        padding: .75rem 0rem;
        width: 100%;
    }

    h4 {
        margin: .25rem 0;
        width: 10rem;
        position: relative;
    }


    @media screen and (max-width: 800px) {
            margin-top: 3rem;
    }

    @media screen and (max-width: 500px) {
            margin-top: 2rem;  
    }
`

export const ContentCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    column-gap: .5rem;
    align-items: stretch;
    background-color: #eee;
    height: 21.75rem;
`

export const ContentCard = styled(Link)`
    display: inline-block;
    cursor: pointer;
    background-color: white;
    text-decoration: none;
    color: black;
    text-align: center;

    h3 {
        width: 10rem;
        position: relative;
    }
`

export const ContentPicture = styled.div`
        height: 15rem;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            background-color: white;
        }
`

export const ContentInfo = styled.div`
    padding: .5rem;
    background-color: white;

    h3 {
        font-size: 1rem;
    }

    p {
        border-radius: .15rem;
        width: 1.75rem;
        line-height: 1.2;
        text-align: center;
        display: inline-block;
        background-color: #ff7600;
        color: white;  
    }
`