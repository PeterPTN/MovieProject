import { HeroDisplay, HeroInfo } from "./Hero.styled";
import { Link } from "react-router-dom";
import { FaPlayCircle } from 'react-icons/fa';

const HeroDetails = ({ data, index, switchTrailer, trailerPic, trailerType, isPending }) => {
    const mediaType = trailerType.slice(0, -1);
    let filter;
    let rounded;
    let ratingColor;

    //console.log(data)

    trailerType === "movies" ? filter = "movie" : filter = "tv";

    data[mediaType].rating ? rounded = Math.round(data[mediaType].rating * 10) / 10 : rounded = 0;

    //Adds a decimal point if integer
    const rating = rounded.toFixed(1);
    rating >= 8.5 ? ratingColor = "#0099FF" : rating >= 7 ? ratingColor = "green" : ratingColor = "#ff7600";

    //console.log(data);
    if (isPending) {
        return (
            <HeroDisplay onClick={() => switchTrailer(data[mediaType].trailer)}>
                <img alt="Film Poster" />
                <HeroInfo />
            </HeroDisplay>
        )
    } else if (!isPending) {
        return (
            <HeroDisplay onClick={() => switchTrailer(data[mediaType].trailer)}>
                <img src={trailerPic[index]} alt={data[mediaType.title]} />
                <HeroInfo>
                    <p style={{ backgroundColor: ratingColor }} >{rating}</p>
                    <h3>{data[mediaType].title}</h3>
                    <h4>Rated: {data[mediaType].certification}</h4>
                    <Link to={`/${filter}/${data[mediaType].ids.tmdb}`} >More...</Link>
                    <FaPlayCircle style={{ color: "272727" }} />
                </HeroInfo>
            </HeroDisplay>
        )
    }
}

export default HeroDetails