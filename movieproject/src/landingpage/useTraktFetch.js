import { useState, useEffect } from "react";
import fourohfour from "../images/404.png"

const useTraktFetch = ({ trailerType, TMDb, TraktDeets, trending, popular, anticipated }) => {
    const [trailerLink, setTrailerLink] = useState("");
    const [mediaData, setMediaData] = useState([]);
    const [mediaPic, setMediaPic] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const abortTrakt = new AbortController();

    const traktAPI = async (trailerType, { trending, popular, anticipated, TraktDeets }) => {
        //console.log(trending)
        //console.log(popular)
        //console.log(anticipated)
        //console.log(TraktDeets);
        //console.log(trailerType);

        const urlType = trailerType.slice(0, -1);
        let url;
        let response;
        let responseJson;

        if (popular === "popular") {
            url = `https://api.trakt.tv/${trailerType}/popular?extended=full`;
        } else if (trending === "trending") {
            url = `https://api.trakt.tv/${trailerType}/trending?extended=full`;
        } else if (anticipated === "anticipated") {
            url = `https://api.trakt.tv/${trailerType}/anticipated?extended=full`;
        }

        if (url !== "") {
            response = await fetch(url, { headers: TraktDeets, })
            //console.log(response);
            responseJson = await response.json();
        }
        //console.log(response);

        if (responseJson.length > 0) {
            setMediaData(responseJson);
            GetFilmIds(responseJson, urlType);

            //Setting trailer
            if (responseJson[0][urlType]) {
                const youtube = responseJson[0][urlType].trailer;
                const embed = youtube.replace("watch?v=", "embed/");
                setIsPending(false);
                setTrailerLink(embed);
            }
        }

    }

    const GetFilmIds = (data, filmType) => {
        let filmIds = [];

        data.map((film) => {
            //console.log(film);
            if (film[filmType]) {
                filmIds.push(film[filmType].ids.tmdb);
            } else {
                filmIds.push(film.ids.tmdb);
            }
        })
        if (filmIds.length === 10) {
            TMDbImgConfig([...filmIds], filmType);
        }
    }

    const TMDbImgConfig = async (ids, type) => {
        let TMDbType = "";
        type === "movie" ? TMDbType = "movie" : TMDbType = "tv";

        //Promise.all collects all 'return poster' from array.map in an array
        const arrayImages = await Promise.all(ids.map(async (id) => {
            const configResponse = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${TMDb.key}`)
            const configJson = await configResponse.json();
            const imagePrefix = configJson.images.secure_base_url;

            let imageResponse = await fetch(`https://api.themoviedb.org/3/${TMDbType}/${id}/images?api_key=${TMDb.key}`)
            let imageJson = await imageResponse.json();
            let poster = fourohfour;
            //console.log(imageJson);

            //Film
            if (imageJson.posters) {
                if (imageJson.posters.length >= 1) {
                    poster = imagePrefix + 'w342' + imageJson['posters'][0]['file_path'];
                }
            }
            //People 
            else if (imageJson.profiles) {
                if (imageJson.profiles.length >= 1) {
                    poster = imagePrefix + 'w185' + imageJson['profiles'][0]['file_path'];
                }
            }

            //console.log(poster);
            return poster
        }))
        setMediaPic(arrayImages);
    }

    const switchTrailer = (url) => {
        if (url) {
            const youtube = url;
            const embed = youtube.replace("watch?v=", "embed/");
            setTrailerLink(embed);
        } else {
            setTrailerLink("")
        }
    }

    useEffect(() => {
        traktAPI(trailerType, { trending, popular, anticipated, TraktDeets }, { signal: abortTrakt.signal });
        return () => { return abortTrakt.abort() };
    }, [trailerType]);

    return ({ trailerLink, mediaData, mediaPic, switchTrailer, isPending })
}

export default useTraktFetch