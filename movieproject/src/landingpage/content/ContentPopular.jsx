import useTraktFetch from '../useTraktFetch';
import MovieDetailed from './MovieDetailed';
import ShowDetailed from './ShowDetailed';
import { useState } from 'react';

const ContentPopular = ({ trailerType, TraktDeets, TMDb }) => {
  const [showMediaArray, setShowMediaArray] = useState([]);
  const [movieMediaArray, setMovieMediaArray] = useState([]);
  const popular = "popular";
  const { mediaData, mediaPic } = useTraktFetch({ trailerType, TMDb, TraktDeets, popular });

  if (showMediaArray[0] !== mediaPic[0]) {
    if (trailerType === "shows") {
      setShowMediaArray(mediaPic);
    }
  }

  if (movieMediaArray[0] !== mediaPic[0]) {
    if (trailerType === "movies") {
      setMovieMediaArray(mediaPic);
    }
  }
  if (showMediaArray[0] !== movieMediaArray[0]) {
    return (
      <>
        {trailerType === "movies" &&
          mediaData.map((film, index) => {
            if (mediaData[0] && movieMediaArray.length > 0) {
              return (
                <MovieDetailed key={index + film.title} data={film} index={index}
                  mediaPicPopMovie={movieMediaArray} trailerType={trailerType} popular={true} />
              )
            }
          })
        }

        {trailerType === "shows" &&
          mediaData.map((film, index) => {
            if (mediaData[0] && showMediaArray.length > 0) {
              return (
                <ShowDetailed key={film + film.title} data={film} index={index}
                  mediaPicPopShow={showMediaArray} trailerType={trailerType} popular={true} />
              )
            }
          })
        }
      </>
    )
  }
  else {
    return (
      <div style={{ height: "15.5rem" }} />
    )
  }
}

export default ContentPopular