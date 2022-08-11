import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalcomponents/index';

import LandingPage from './landingpage/LandingPage';
import SearchPage from './searchpage/SearchPage';
import MoviePage from './moviepage/MoviePage';
import TVPage from './tvpage/TVPage';
import PersonPage from './personpage/PersonPage';
import Header from './sharedcomponents/header/Header';
import Footer from './sharedcomponents/footer/Footer';

const TraktDeets = {
  'Content-type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': 'b106f0423a82a60c50748ee3ad41d9c47fa8ef8e6ed0397472d518a05c29dca9'
}

const TMDb = {
  key: "2e25a51a12578bc8019a8b9e7b12b9eb",
}

//Accessible for all components wrapped around ThemeProvider as props
const theme = {
  colors: {
    blue: "#2D4059",
    orange: "#e45b30",
    darkorange: "#B01F00",
    white: "#EEEEEE",
    navy: "#222831",
  }
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [trailerType, setTrailerType] = useState("movies");
  const [filter, setFilter] = useState("multi");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header setSearchValue={setSearchValue} searchValue={searchValue} trailerType={trailerType} setTrailerType={setTrailerType} filter={filter} setFilter={setFilter} />

        <Routes>
          <Route path='/' element={<LandingPage setSearchValue={setSearchValue} searchValue={searchValue} TraktDeets={TraktDeets} TMDb={TMDb} trailerType={trailerType} setTrailerType={setTrailerType} />} />
          <Route path='/search' element={<SearchPage searchValue={searchValue} setSearchValue={setSearchValue} TMDb={TMDb} filter={filter} setTrailerType={setTrailerType} />} />
          <Route path='/movie/:id' element={<MoviePage TMDb={TMDb} TraktDeets={TraktDeets} setTrailerType={setTrailerType}/>} />
          <Route path='/tv/:id' element={<TVPage TMDb={TMDb} TraktDeets={TraktDeets} setTrailerType={setTrailerType}/>} />
          <Route path='/person/:id' element={<PersonPage TMDb={TMDb} TraktDeets={TraktDeets} setTrailerType={setTrailerType}/>} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
