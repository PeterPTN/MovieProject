import { useParams } from "react-router-dom";
import useTMDbIDSearch from "../useTMDbIDSearch";

import {
    MovieWrapper,
    MovieContainer
} from "./Movie.styled";

import CreditsComponent from "../sharedcomponents/CreditsComponent";
import DisplayComponent from "../sharedcomponents/display/DisplayComponent";
import InfoComponent from "../sharedcomponents/info/InfoComponent";
//import RecComponenets from "../sharedcomponents/RecComponenets";
import { useEffect } from "react";

const MoviePage = ({ TMDb, TraktDeets, setTrailerType }) => {
    const movie = "movie"
    const { id } = useParams();
    const { mediaData, crewData, castData, keywordData, videoData, recData, isPending } = useTMDbIDSearch({ id, movie, TMDb });

    //console.log("media",mediaData)
    //console.log("keyword",keywordData)
    //console.log("video",videoData);

    useEffect(() => {
        setTimeout(window.scroll(0, 0), 1000)
        setTrailerType("details");
    }, [id])

    if (isPending) {
        return (
            <MovieWrapper className="padding">
                <MovieContainer>
                    <div className="loading" >
                        <h2>Loading...</h2>
                    </div>
                </MovieContainer>
            </MovieWrapper>
        )
    } else if (mediaData && crewData && castData && keywordData && videoData.results && recData) {
        return (
            <MovieWrapper className="padding">
                <MovieContainer>
                    <DisplayComponent mediaData={mediaData} videoData={videoData} TraktDeets={TraktDeets} movie={movie} keywordData={keywordData} />
                    <InfoComponent mediaData={mediaData} TraktDeets={TraktDeets} movie={movie} crewData={crewData} castData={castData} />
                    <CreditsComponent castData={castData} />
                </MovieContainer>
            </MovieWrapper>
        )
    }
}

export default MoviePage