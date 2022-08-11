import styled from "styled-components";

//Styling the <header> tag
export const HeaderWrapper = styled("header")`
    background-color: ${({ theme }) => theme.colors.navy};
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 100;
`

export const HeaderContainer = styled("div")`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.navy};
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        margin-top: .5rem;
        margin-right: .5rem;
        border: 2px solid ${({ theme }) => theme.colors.navy};
    }   

    h1 {
        color: ${({ theme }) => theme.colors.orange};
        font-family: Arial, Helvetica, sans-serif;
        font-size: 3rem;
        margin-right: .1rem;
        margin-bottom: .7rem;
        letter-spacing: -.25rem;
        &::after {
            
            content: "Film";
            color: ${({ theme }) => theme.colors.white};
        }
    }
    @media screen and (max-width: 900px) {
        h1 {
            font-size: 2.75rem;
        }
    }

    @media screen and (max-width: 500px) {
        h1 {
            font-size: 2.5rem;
        }
    }
`

export const SearchForm = styled.form`
    order: 2;
    transition: .3s ease-out;
    align-items: center;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 3rem;
    border: 2px solid #FF5722;

    //Children
    * {
        border: none;
        background-color:  ${({ theme }) => theme.colors.white};
    }

    input {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 100;
        opacity: 0;
        font-size: 1rem;
        cursor: pointer;
        border: none !important;
    }

    input:focus {
        outline: none;
    }

    button {
        position: relative;
        background: 0;
        display: flex;
        align-items: center;
        margin-left: auto;
        cursor: pointer;
        opacity: 1;
        display: flex;

        * {
        
            background-color: transparent;
            height: 2.5rem;
            width: 2.8rem;
            color: ${({ theme }) => theme.colors.white};
            cursor: pointer;
        }
    }

    &:focus-within {
        width: 25.5rem;
        background-color: ${({ theme }) => theme.colors.white};
        padding: .25rem;
        border: 2px solid #FF5722;

        button {
            opacity: 1;
            width: 2rem;

            * {
                height: 1.5rem;
                width: 2rem;
                color: black;
            }
        }

        input {
            width: 87.5%;
            opacity: 1;
            z-index: 0;
            cursor:text;
        }
    }

    @media screen and (max-width: 1000px) {
        &:focus-within {
            width: 20rem;
        }
    }

    @media screen and (max-width: 800px) {
        width: 2.25rem;

        &:focus-within {
            margin-top: .2rem;
            width: 13rem;
            padding: 0 0 0 .25rem;

            button {
                * {
                    background-color: #eee;
                }
            }
        }

        input {
            font-size: .75rem;
            padding: 0;
        }

        button {
            * {
                height: 2rem;
                width: 2rem;
            }
        } 
    }

    @media screen and (max-width: 500px) {
        &:focus-within { 
            width: 10rem;
        }
    }
`

//Toggle Button

export const ToggleContainer = styled.div`
    order: 1;
    display: flex;
    flex-direction: row;
    transition: all 0.15s;
    z-index: 100;
    align-self: flex-end;
    padding-bottom: 1rem;
    flex-wrap: nowrap;
    
    @media screen and (max-width: 500px) {
        margin: 0 auto 1.5rem;
        padding: 0;
    }
`

export const Toggle = styled.button`
    color: #8c3600;
    background-color: ${({ theme }) => theme.colors.orange};
    border: none;
    cursor: ${(props) => props.off ? "not-allowed" : "pointer"};
    padding: .75rem;
    font-size: 1.3rem;

    border-top-left-radius: ${(props) => props.left ? "1rem" : "0"};
    border-bottom-left-radius: ${(props) => props.left ? "1rem" : "0"};
    border-top-right-radius: ${(props) => props.left ? "0" : "1rem"};
    border-bottom-right-radius: ${(props) => props.left ? "0" : "1rem"};;

    @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        padding: .55rem;
    }

   
`