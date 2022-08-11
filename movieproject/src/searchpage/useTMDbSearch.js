import { useState, useEffect } from 'react';

const useTMDbSearch = ({ searchValue, TMDb, filter }) => {
    const [searchData, setSearchData] = useState([]);
    const [searchImages, setSearchImages] = useState([]);
    const [isEmpty, setIsEmpty] = useState(null);
    const abortCont = new AbortController();

    const TMDbMultiSearchAPI = async (value, filter) => {
        setIsEmpty(false);
        let url;

        if (value !== "") {
            if (filter === "movie" || filter === "tv" || filter === "person") {
                url = `https://api.themoviedb.org/3/search/${filter}?api_key=${TMDb.key}&language=en-US&query=${value}&page=1`;
            } else if (filter === "multi") {
                url = `https://api.themoviedb.org/3/search/${filter}?api_key=${TMDb.key}&language=en-US&query=${value}&page=1`;
            }
            const response = await fetch(url)
            const responseJson = await response.json();
            //console.log(responseJson);

            if (responseJson) {
                setSearchData(responseJson.results);
                TMDbImgConfig(responseJson.results, filter)
            } 
        } else {
            setIsEmpty(true);
        }
    }

    const TMDbImgConfig = async (data, filterType) => {
        const arrayImages = await Promise.all(data.map(async (film) => {
            const configResponse = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${TMDb.key}`)
            const configJson = await configResponse.json();
            const imagePrefix = configJson.images.secure_base_url;

            let whichFilter;

            film.media_type ? whichFilter = film.media_type : whichFilter = filterType;
            //console.log(film)

            let imageResponse = await fetch(`https://api.themoviedb.org/3/${whichFilter}/${film.id}/images?api_key=${TMDb.key}`)
            let imageJson = await imageResponse.json();
            //console.log(imageJson);
            let poster = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

            //Movies & Shows
            if (imageJson.posters) {
                if (imageJson.posters.length >= 1) {
                    poster = imagePrefix + 'w342' + imageJson['posters'][0]['file_path'];
                }
            }//People
            else if (imageJson.profiles) {
                if (imageJson.profiles.length >= 1) {
                    poster = imagePrefix + 'w185' + imageJson['profiles'][0]['file_path'];
                }
            }
            //console.log(poster);
            return poster
        }))
        setSearchImages(arrayImages)
    }

    useEffect(() => {
        TMDbMultiSearchAPI(searchValue, filter, { signal: abortCont.signal });
        return () => { return abortCont.abort()};
    }, [searchValue, filter]);
    return (
        { searchData, searchImages, isEmpty }
    )
}

export default useTMDbSearch