import { useState } from 'react';
import {
    ContentCard,
    ContentInfo,
    ContentPicture
} from './Content.styled';

const ContentDetails = ({ data, index, mediaPic, trailerType }) => {
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

    //TV Anticipated - Movie Anticipated
    if (data[mediaType]) {
        return (
            <ContentCard to={`/${topRatedType}/${data[mediaType].ids.tmdb}`} key={index}>
                <ContentPicture>
                    <img alt={data[mediaType].title + " poster"} src={mediaPic[index]} />
                </ContentPicture>

                <ContentInfo>
                    <p style={{ backgroundColor: ratingColor }}>{rating}</p>
                    <h4>{data[mediaType].title}</h4>
                </ContentInfo>
            </ContentCard>
        )
    }
    //TV Top-Rated- Movie Top-Rated
    else if (data.popularity) {
        let title;
        data.title ? title = data.title : title = data.original_name;

        return (
            <ContentCard to={`/${topRatedType}/${data.id}`} key={index}>
                <ContentPicture>
                    <img alt={data.title + " poster"} src={mediaPic[index]} />
                </ContentPicture>

                <ContentInfo>
                    <p style={{ backgroundColor: ratingColor }}>{rating}</p>
                    <h4>{title}</h4>
                </ContentInfo>
            </ContentCard>
        )
    }
    //TV Popular - Movie Popular
    else {
        return (
            <ContentCard to={`/${topRatedType}/${data.ids.tmdb}`} key={index}>
                <ContentPicture>
                    <img alt={data.title + " poster"} src={mediaPic[index]} />
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