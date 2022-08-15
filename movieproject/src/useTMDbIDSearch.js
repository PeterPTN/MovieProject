import { useState, useEffect } from 'react';

const useTMDbIDSearch = ({ id, movie, tv, person, TMDb }) => {
    const [mediaData, setMediaData] = useState([]);
    const [castData, setCastData] = useState([]);
    const [crewData, setCrewData] = useState([]);
    const [keywordData, setKeywordData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    //const [recData, setRecData] = useState([]);
    const [isPending, setIsPending] = useState(null);
    const abortCont = new AbortController();

    const TMDbIdData = async ({ id, movie, tv, person }) => {
        let idUrl;
        if (movie) {
            idUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDb.key}`;
        } else if (tv) {
            idUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDb.key}`;
        } else if (person) {
            idUrl = `https://api.themoviedb.org/3/person/${id}?api_key=${TMDb.key}`;
        }
        const idResponse = await fetch(idUrl);
        const idResponseJson = await idResponse.json();
        if (idResponseJson) {
            setMediaData(idResponseJson);
        }
    }

    async function TMDbIdCredit({ id, movie, tv, person }) {
        let creditUrl;
        if (movie) {
            creditUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDb.key}`;
        } else if (tv) {
            creditUrl = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${TMDb.key}`;
        } else if (person) {
            creditUrl = `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${TMDb.key}`;
        }
        //429 error isn't happening here - headers will remain for future reference
        const creditResponse = await fetch(creditUrl, { headers: { "Retry-After": 1 } });
        const creditResponseJson = await creditResponse.json();

        //Limiting array items to prevent 429 errors
        if (creditResponseJson) {
            setCastData(creditResponseJson.cast.slice(0, 17));
            setCrewData(creditResponseJson.crew.slice(0, 17));
            setIsPending(false);
        }
    }

    async function TMDbIdKeyword({ id, movie, tv }) {
        let keywordUrl;
        if (movie) {
            keywordUrl = `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${TMDb.key}`;
        } else if (tv) {
            keywordUrl = `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=${TMDb.key}`;
        }
        const keywordResponse = await fetch(keywordUrl);
        const keywordResponseJson = await keywordResponse.json();
        if (keywordResponseJson) {
            setKeywordData(keywordResponseJson);
        }
    }

    async function TMDbIdVideo({ id, movie, tv }) {
        let videoUrl;
        if (movie) {
            videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDb.key}`;
        } else if (tv) {
            videoUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${TMDb.key}`;
        }
        const videoResponse = await fetch(videoUrl);
        const videoResponseJson = await videoResponse.json();
        if (videoResponseJson) {
            setVideoData(videoResponseJson);
        }
    }

    //Recommended component - currently unused

    /*
    async function TMDbIdRec({ id, movie, tv }) {
        let recUrl;
        if (movie) {
            recUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${TMDb.key}`
        } else if (tv) {
            recUrl = `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${TMDb.key}`
        }
        const recResponse = await fetch(recUrl);
        const recResponseJson = await recResponse.json();
        //console.log(recResponseJson);
        if (recResponseJson) {
            setRecData(recResponseJson);
        }
    }
    */

    useEffect(() => {
        setIsPending(true);
        if (person) {
            TMDbIdData({ id, movie, tv, person }, { signal: abortCont.signal });
            TMDbIdCredit({ id, movie, tv, person }, { signal: abortCont.signal });
        } else if (movie || tv) {
            TMDbIdData({ id, movie, tv, person }, { signal: abortCont.signal });
            TMDbIdVideo({ id, movie, tv }, { signal: abortCont.signal });
            TMDbIdKeyword({ id, movie, tv }, { signal: abortCont.signal });
            TMDbIdCredit({ id, movie, tv, person }, { signal: abortCont.signal });
            //TMDbIdRec({ id, movie, tv }, { signal: abortCont.signal });
        }
        return () => { return abortCont.abort() };
    }, [id])

    return (
        { mediaData, castData, crewData, keywordData, videoData, /*recData, */ isPending }
    )
}

export default useTMDbIDSearch