import useTraktFetch from '../useTraktFetch';
import MovieDetailed from './MovieDetailed';
import ShowDetailed from './ShowDetailed';
import { useState } from 'react';

const ContentTrending = ({ trailerType, TraktDeets, TMDb }) => {
    const [showMediaArray, setShowMediaArray] = useState([]);
    const [movieMediaArray, setMovieMediaArray] = useState([]);
    const anticipated = "anticipated";
    const { mediaData, mediaPic } = useTraktFetch({ trailerType, TMDb, TraktDeets, anticipated });

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
                        if (mediaData[0].movie && movieMediaArray.length > 0) {
                            return (
                                <MovieDetailed key={index + film.movie.title} data={film}
                                    mediaPicAntiMovie={movieMediaArray} trailerType={trailerType} index={index} anti={true} />
                            )
                        }
                    })
                }

                {trailerType === "shows" &&
                    mediaData.map((film, index) => {
                        if (mediaData[0].show && showMediaArray.length > 0) {
                            return (
                                <ShowDetailed key={index + film.show.title} data={film}
                                    mediaPicAntiShow={showMediaArray} trailerType={trailerType} index={index} anti={true} />)
                        }
                    })
                }
            </>
        )
    }
    else {
        return (
            <div style={{height: "15.5rem"}} />
        )
    }
}

export default ContentTrending