import useTMDbFetch from '../useTMDbFetch';
import MovieDetailed from './MovieDetailed';
import ShowDetailed from './ShowDetailed';
import { useState } from 'react';

const ContentTop = ({ trailerType, TMDb }) => {
    const [showMediaArray, setShowMediaArray] = useState([]);
    const [movieMediaArray, setMovieMediaArray] = useState([]);
    const top = "top";
    const { mediaData, mediaPic } = useTMDbFetch({ top, TMDb, trailerType });

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
                                <MovieDetailed key={1 + index} data={film} index={index}
                                    mediaPicTopMovie={movieMediaArray} trailerType={trailerType} top={true} />
                            )
                        }
                    })
                }

                {trailerType === "shows" &&
                    mediaData.map((film, index) => {
                        if (mediaData[0] && showMediaArray.length > 0) {
                            return (
                                <ShowDetailed key={index} data={film} index={index}
                                    mediaPicTopShow={showMediaArray} trailerType={trailerType} top={true} />
                            )
                        }
                    })
                }
            </>
        )
    } else {
        return (
            <div style={{height: "15.5rem"}} />
        )
    }
}

export default ContentTop