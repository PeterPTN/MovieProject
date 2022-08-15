import { useParams } from "react-router-dom"
import useTMDbIDSearch from "../useTMDbIDSearch";

import {
    TVWrapper,
    TVContainer
} from "./TVPage.styled"

import CreditsComponent from "../sharedcomponents/CreditsComponent";
import DisplayComponent from "../sharedcomponents/display/DisplayComponent";
import InfoComponent from "../sharedcomponents/info/InfoComponent";
//import RecComponenets from "../sharedcomponents/RecComponenets";
import { useEffect } from "react";

const TVPage = ({ TMDb, TraktDeets, setTrailerType }) => {
    const tv = "tv"
    const show = "show"
    const { id } = useParams();
    const { mediaData, crewData, castData, keywordData, videoData, recData, isPending } = useTMDbIDSearch({ id, tv, TMDb });

    //console.log(mediaData);

    useEffect(() => {
        setTimeout(window.scroll(0, 0), 1000)
        setTrailerType("details");
    }, [id])

    if (isPending) {
        return (
            <TVWrapper>
            <TVContainer>
                <div className="loading" >
                    <h2>Loading...</h2>
                </div>
            </TVContainer>
        </TVWrapper>
        )
    } else if (mediaData && crewData && castData && keywordData && videoData.results) {
        return (
            <TVWrapper>
                <TVContainer>
                    <DisplayComponent mediaData={mediaData} videoData={videoData} TraktDeets={TraktDeets} tv={tv} keywordData={keywordData} />
                    <InfoComponent mediaData={mediaData} TraktDeets={TraktDeets} show={show} crewData={crewData} castData={castData} />
                    <CreditsComponent castData={castData} />
                </TVContainer>
            </TVWrapper>
        )
    }
}

export default TVPage