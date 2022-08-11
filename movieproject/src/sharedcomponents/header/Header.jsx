import {
    HeaderWrapper,
    HeaderContainer,
    TitleContainer,
    SearchForm,
    ToggleContainer,
    Toggle,
} from "./Header.styled";

import { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi";
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ trailerType, setTrailerType, setSearchValue, setFilter }) => {
    const [movieColor, setMovieColor] = useState("#8c3600");
    const [showColor, setShowColor] = useState("#8c3600");
    const navigate = useNavigate();

    function handleToggle(event) {
        const filterButton = document.querySelectorAll(".filter");
        const arrayButtons = Array.from(filterButton);
        arrayButtons.map(button => button.style.color = "#8c3600");
        event.target.style.color = "#eee";
    }

    function handleSubmit(event) {
        const form = document.getElementById("searchbar");
        event.preventDefault();
        setSearchValue(event.target[0].value);
        event.target[0].value = ""
        form.blur();
        navigate('/search');
    }

    useEffect(() => {
        trailerType === "movies" ? setMovieColor("#EEEEEE") : setMovieColor("#8c3600");
        trailerType === "shows" ? setShowColor("#EEEEEE") : setShowColor("#8c3600");
    }, [trailerType])

    //console.log(filter)

    return (
        <HeaderWrapper >
            <HeaderContainer className="padding">

                <TitleContainer >
                    <Link to="/" onClick={() => setTrailerType("movies")} ><h1> On</h1></Link>

                    <SearchForm action="/search" onSubmit={handleSubmit} >
                        <label htmlFor="searchbar" />
                        <input
                            id="searchbar"
                            placeholder="Search TV shows, movies or actors..."
                            autoComplete="off"/>
                        
                        <button><BiSearch /></button>
                    </SearchForm>
                </TitleContainer>

                {trailerType === "movies" &&
                    <ToggleContainer>
                        <Toggle left onClick={() => setTrailerType("movies")} style={{ color: movieColor }}>Movies</Toggle>
                        <Toggle onClick={() => setTrailerType("shows")} style={{ color: showColor }}>TV</Toggle>
                    </ToggleContainer>
                }

                {trailerType === "shows" &&
                    <ToggleContainer>
                        <Toggle left onClick={() => setTrailerType("movies")} style={{ color: movieColor }}>Movies</Toggle>
                        <Toggle onClick={() => setTrailerType("shows")} style={{ color: showColor }}>TV</Toggle>
                    </ToggleContainer>
                }

                {trailerType === "search" &&
                    <ToggleContainer>
                        <Toggle className="filter all" left onClick={(e) => { setFilter("multi"); handleToggle(e) }} style={{ color: "#eee" }}>All</Toggle>
                        <Toggle className="filter" onClick={(e) => { setFilter("movie"); handleToggle(e) }} style={{ borderRadius: "0" }}>Movies</Toggle>
                        <Toggle className="filter" onClick={(e) => { setFilter("tv"); handleToggle(e) }} style={{ borderRadius: "0" }}>TV</Toggle>
                        <Toggle className="filter" onClick={(e) => { setFilter("person"); handleToggle(e) }} >People</Toggle>
                    </ToggleContainer>
                }

            </HeaderContainer>
        </HeaderWrapper >
    )
}

export default Header