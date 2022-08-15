import { useState, useEffect } from 'react';
import fourohfour from "../images/404.png"

const useTMDbFetch = ({ TMDb, top, trailerType }) => {
    const [mediaData, setMediaData] = useState([]);
    const [mediaPic, setMediaPic] = useState([]);
    const abortCont = new AbortController();

    const TMDbSearchAPI = async ({ top, trailerType }) => {
        let filter;
        let url;

        trailerType == "movies" ? filter = "movie" : filter = "tv";

        if (top) {
            url = `https://api.themoviedb.org/3/${filter}/top_rated?api_key=${TMDb.key}&language=en-US&page=1`;
        }

        const response = await fetch(url)
        const responseJson = await response.json();
        //console.log(responseJson);

        if (responseJson) {
            setMediaData(responseJson.results.slice(0,10));
            TMDbImgConfig(responseJson.results);
        }
    }

    const TMDbImgConfig = async (data) => {

        const arrayImages = await Promise.all(data.map(async (film) => {
            const configResponse = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${TMDb.key}`)
            const configJson = await configResponse.json();
            const imagePrefix = configJson.images.secure_base_url;
            //console.log(film)

            let poster = fourohfour;

            //Movies & Shows
            if (film.poster_path) {
                poster = imagePrefix + 'w342' + film.poster_path;
            }

            //console.log(poster);
            return poster
        }))

        setMediaPic(arrayImages)
    }

    useEffect(() => {
        TMDbSearchAPI({ top, trailerType }, { signal: abortCont.signal });
        return () => { return abortCont.abort()};
    }, [trailerType]);

    return (
        { mediaData, mediaPic }
    )
}

export default useTMDbFetch