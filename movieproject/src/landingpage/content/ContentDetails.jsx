import { useState, useEffect, useCallback } from 'react';
import {
    ContentCard,
    ContentInfo,
    ContentPicture
} from './Content.styled';

const ContentDetails = ({ data, index, mediaPic, trailerType, popular, top, anti }) => {
    const [arrayOne, setArrayOne] = useState([]);
    const [arrayTwo, setArrayTwo] = useState([]);
    const [arrayThree, setArrayThree] = useState([]);

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
    //console.log(data);
    //console.log(mediaPic);

    useEffect(() => {
        if (anti) {
            mediaPic.map((item, index) => {
                setTimeout(() => {
                    setArrayOne((v) => [...v, item]);
                }, 200 * index)
            })
        } 

        if (top) {
            mediaPic.map((item, index) => {
                setTimeout(() => {
                    setArrayTwo((v) => [...v, item]);
                }, 200 * index)
            })
        } 

        if (popular) {
            mediaPic.map((item, index) => {
                setTimeout(() => {
                    setArrayThree((v) => [...v, item]);
                }, 200 * index)
            })
        }

    }, [mediaPic])

    const handleRenderOne = useCallback((i) => {
        return arrayOne[i];
    })

    const handleRenderTwo = useCallback((i) => {
        return arrayTwo[i];
    })

    const handleRenderThree = useCallback((i) => {
        return arrayThree[i];
    })

    //arrayOne resets to empty array. Possibly due to unmount/mount top level
    //console.log(arrayOne)

    //TV Anticipated - Movie Anticipated
    if (anti) {
        return (
            <ContentCard to={`/${topRatedType}/${data[mediaType].ids.tmdb}`} >
                <ContentPicture>
                    <img alt={data[mediaType].title + " poster"} src={handleRenderOne(index)}/>
                </ContentPicture>

                <ContentInfo>
                    <p style={{ backgroundColor: ratingColor }}>{rating}</p>
                    <h4>{data[mediaType].title}</h4>
                </ContentInfo>
            </ContentCard>
        )
    }
    //TV Top-Rated- Movie Top-Rated
    else if (top) {
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
    //TV Popular - Movie Popular
    else if (popular) {
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

export default ContentDetails