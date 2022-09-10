import { useState, useEffect, useCallback, useRef } from 'react';

import {
    ContentCard,
    ContentInfo,
    ContentPicture
} from './Content.styled';

const MovieDetailed = ({ data, index, mediaPicTopMovie, mediaPicAntiMovie, mediaPicPopMovie, popular, top, anti, trailerType }) => {

    const [antiRenderArray, setAntiRenderArray] = useState([]);
    const [topRenderArray, setTopRenderArray] = useState([]);
    const [popRenderArray, setPopRenderArray] = useState([]);
    const antiTempArray = useRef([]);
    const topTempArray = useRef([]);
    const popTempArray = useRef([]);

    let rounded;
    let topRatedType;
    const mediaType = trailerType.slice(0, -1);
    mediaType === "show" ? topRatedType = "tv" : topRatedType = "movie";

    if (data[mediaType]) {
        rounded = Math.round(data[mediaType].rating * 10) / 10;
    } else if (data.popularity) {
        rounded = Math.round(data.vote_average * 10) / 10;
    } else {
        rounded = Math.round(data.rating * 10) / 10;
    }

    const rating = rounded.toFixed(1);
    let ratingColor = "";

    if (rating >= 8.5) {
        ratingColor = "#0099FF";
    } else if (rating >= 7) {
        ratingColor = "green";
    }

    //console.log(mediaPicAntiMovie)

    useEffect(() => {
        //console.log(mediaPicAntiMovie)
        if (mediaPicAntiMovie && mediaPicAntiMovie.length > 0) {
            if (mediaPicAntiMovie[1] !== antiTempArray.current[1]) {
                antiTempArray.current = mediaPicAntiMovie;
            }
            antiTempArray.current.map((item, index) => {
                setTimeout(() => {
                    setAntiRenderArray((v) => [...v, item]);
                }, 2500 + 90 * index)
            })
        }

        if (mediaPicTopMovie && mediaPicTopMovie.length > 0) {
            if (mediaPicTopMovie[1] !== topTempArray.current[1]) {
                topTempArray.current = mediaPicTopMovie;
            }
            topTempArray.current.map((item, index) => {
                setTimeout(() => {
                    setTopRenderArray((v) => [...v, item]);
                }, 3500 + 90 * index)
            })
        }

        if (mediaPicPopMovie && mediaPicPopMovie.length > 0) {
            if (mediaPicPopMovie[1] !== popTempArray.current[1]) {
                popTempArray.current = mediaPicPopMovie;
            }
            popTempArray.current.map((item, index) => {
                setTimeout(() => {
                    setPopRenderArray((v) => [...v, item]);
                }, 1500 + 90 * index)
            })
        }

    }, [trailerType])

    const handleRenderOne = useCallback((i) => {
        return antiRenderArray[i]
    })

    const handleRenderTwo = useCallback((i) => {
        return topRenderArray[i]
    })

    const handleRenderThree = useCallback((i) => {
        return popRenderArray[i]
    })

    //Movie Anticipated
    if (anti) {
        return (
            <ContentCard to={`/${topRatedType}/${data[mediaType].ids.tmdb}`} >
                <ContentPicture>
                    <img alt={data[mediaType].title + " poster"} src={handleRenderOne(index)} />
                </ContentPicture>

                <ContentInfo>
                    <p style={{ backgroundColor: ratingColor }}>{rating}</p>
                    <h4>{data[mediaType].title}</h4>
                </ContentInfo>
            </ContentCard>
        )
    }

    //Movie Top-Rated
    if (top) {
        let title;
        data.title ? title = data.title : title = data.original_name;

        return (
            <ContentCard to={`/${topRatedType}/${data.id}`} >
                <ContentPicture>
                    <img alt={data.title + " poster"} src={handleRenderTwo(index)} />
                </ContentPicture>

                <ContentInfo>
                    <p style={{ backgroundColor: ratingColor }}>{rating}</p>
                    <h4>{title}</h4>
                </ContentInfo>
            </ContentCard>
        )
    }
    //Movie Popular
    if (popular) {
        return (
            <ContentCard to={`/${topRatedType}/${data.ids.tmdb}`}>
                <ContentPicture>
                    <img alt={data.title + " poster"} src={handleRenderThree(index)} />
                </ContentPicture>

                <ContentInfo>
                    <p style={{ backgroundColor: ratingColor }}>{rating}</p>
                    <h4>{data.title}</h4>
                </ContentInfo>
            </ContentCard>
        )
    }
}

export default MovieDetailed