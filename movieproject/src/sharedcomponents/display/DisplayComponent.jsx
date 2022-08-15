import { useState } from "react";
import {
  DisplayWrapper,
  DisplayTitleContainer,
  DisplayVidImgsContainer,
  VidContainer,
  VideoToggle
} from "./Display.styled";

import KeywordComponent from "../KeywordComponent";
import fourohfour from "../../images/404.png"
import useTraktFull from "../useTraktFull"


const DisplayComponent = ({ mediaData, videoData, TraktDeets, movie, keywordData }) => {
  const [index, setIndex] = useState(0);
  const imageNotFound = fourohfour;
  const imagePrefix = "https://image.tmdb.org/t/p/w500";
  const youtubePrefix = "https://www.youtube.com/embed/";
  let ratingColor;
  let rounded;
  let rating;
  let name;

  const { traktMediaData, mediaType } = useTraktFull({ name, TraktDeets }, movie);
  mediaData.title ? name = mediaData.title : mediaData.original_title ? name = mediaData.original_title : name = mediaData.original_name;
  //console.log(videoData);
  //console.log(mediaData);
  //console.log(traktMediaData);

  mediaData.vote_average
    ? rounded = Math.round(mediaData.vote_average * 10) / 10 : traktMediaData[mediaType]
      ? rounded = Math.round(traktMediaData[mediaType].rating * 10) / 10 : rounded = 0;

  rounded < 10 ? rating = rounded.toFixed(1) : rating = rounded;

  rating >= 8.5
    ? ratingColor = "#0099FF" : rating >= 7
      ? ratingColor = "green" : ratingColor = "#ff7600";

  function increment() {
    const vidLen = videoData.results.length - 1;
    index >= vidLen ? setIndex(0) : setIndex(index + 1);
  }

  function decrement() {
    const vidLen = videoData.results.length - 1;
    index <= 0 ? setIndex(vidLen) : setIndex(index - 1);
  }

  return (
    <DisplayWrapper>
      <DisplayVidImgsContainer>
        <img src={mediaData.poster_path !== null ? imagePrefix + mediaData.poster_path : imageNotFound} alt={name + " poster"} />

        <VidContainer>
          {videoData.results.length > 0 ?
            <iframe src={youtubePrefix + videoData.results[index].key} frameBorder="0" title="YouTube video player"
              allowFullScreen />
            : <div className="novid"><h3>No videos available</h3></div>}

          <VideoToggle>
            <button onClick={() => decrement()} >Previous Video</button>
            <button onClick={() => increment()} >Next Video</button>
          </VideoToggle>
        </VidContainer>
      </DisplayVidImgsContainer>

      <DisplayTitleContainer>
        <h2>{name}</h2>
        <p style={{ backgroundColor: ratingColor }} >{rating} </p>
      </DisplayTitleContainer>

      <KeywordComponent keywordData={keywordData} />

    </DisplayWrapper>
  )
}

export default DisplayComponent