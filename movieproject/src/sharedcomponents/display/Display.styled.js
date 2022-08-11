import styled from "styled-components";

export const DisplayWrapper = styled.div`
`

export const DisplayVidImgsContainer = styled.div`
    display: flex;
    column-gap: .5rem;
    height: 39.5rem;
    margin-bottom: .5rem;

    img {
        background-color: #eee;
        object-fit: cover;
        flex: 1;
    }

    @media screen and (max-width: 1350px) {
        height: 30rem;
    }

    @media screen and (max-width: 1150px) {
        height: 28rem;

        img {
            width: 15rem;
        }
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: auto;

        img {
           display: none; 
        }
    }
   
`

export const VidContainer = styled.div`
    flex: 5;
    background-color: white;
    position: relative;
    
    iframe {
        height: 100%;
        width: 100%;
        background-color: #eee;
    }

    .novid {
        height: 100%;
        width: 100%;
        background-color: grey;
        text-align: center;
        font-size: 2rem;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: auto;

        iframe {
            height: 30rem;   
            margin-bottom: 2rem;
        }
    }
`



export const VideoToggle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 14rem;
    display: flex;
    column-gap: 1px;
    border-radius: .25rem;

    button {
        border: none;
        padding: .5rem;
        background-color: #2C2C2C;
        color: white;
        cursor: pointer;
        width: 7rem;
        border-radius: .25rem;
    }

    button:hover {
        color: ${({ theme }) => theme.colors.orange};
    }
`

export const DisplayTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    padding: 0 .25rem;

    h2 {
        font-size: 2.5rem;
        letter-spacing: -0.15rem;
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 500;
    }

    p {
        margin-left: 1rem;
        font-size: 2rem;
        border-radius: .15rem;
        line-height: 1.3;
        width: 3.5rem;
        text-align: center;
        display: inline-block;
        color: white;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;


        h2 {
            font-size: 2rem;
            margin: .5rem 0;
        }

        p {
            font-size: 1.5rem;
            text-align: center;
            width: 3.5rem;
            margin: 0;
        }
    }
`