import { useState, useEffect } from 'react';

const useTraktFull = ({ name, TraktDeets, movie, show }) => {
    const [traktMediaData, setTraktMediaData] = useState([]);
    const abortTrakt = new AbortController();

    async function traktFetchFull({ name, TraktDeets, movie, show }) {
        let url;
        let response;
        let responseJson;

        if (movie) {
            url = `https://api.trakt.tv/search/movie?query=${name}&extended=full`;
            response = await fetch(url, { headers: TraktDeets })
            responseJson = await response.json();
        } else if (show) {
            url = `https://api.trakt.tv/search/show?query=${name}&extended=full`;
            response = await fetch(url, { headers: TraktDeets })
            responseJson = await response.json();
        }

        //console.log(responseJson)

        if (responseJson) {
            setTraktMediaData(responseJson[0]);
        }
    }


    useEffect(() => {
        traktFetchFull({ name, TraktDeets, movie, show })
        return () => { return abortTrakt.abort() };
    }, [])

    return { traktMediaData };
}

export default useTraktFull

/*
GENRE


CERTIFICATION



*/