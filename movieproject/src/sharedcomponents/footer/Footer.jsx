import { FooterContainer, LogoContainer } from './Footer.styled';
import TMDb from '../../images/tmdb-square.svg';
import Trakt from '../../images/trakt-icon-red.png';

const Footer = () => {
    return (
        <FooterContainer>

            <LogoContainer>
                <div>
                    <a href="https://www.themoviedb.org/?language=en-AU" target="_blank" title="The Movie Database"><img src={TMDb} alt="TMDb Logo" /></a>
                    <a href="https://trakt.tv/" target="_blank" title="Trakt"><img src={Trakt} alt="Trakt Logo" /></a>
                </div>
                <p className="tmdb">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </LogoContainer>

            <p>&copy; 2022 <a href="mailto:peter.p.t.nguyen@gmail.com">Peter Nguyen</a></p>
        </FooterContainer>
    )
}

export default Footer