import {
    SearchContentCard,
    SearchContentInfo
} from './SearchContent.styled';
import useDateConversion from "../../sharedcomponents/useDateConversion";

const SearchContentDetails = ({ data, index, searchImages, filter }) => {
    let rawDate;
    if (data.release_date) {
        rawDate = data.release_date;
    } else if (data.first_air_date) {
        rawDate = data.first_air_date;
    } 
    
    const { convertedDate } = useDateConversion({ rawDate });

    //console.log(convertedDate);

    let filterType = "";
    
    //Person Info
    let knownFor = "";
    let department = "";

    if (data.known_for) {
        let knownForArray = data.known_for.map((film) => {
            return film.title ? film.title : film.name
        });
        knownFor = knownForArray.join(", ")
        department = data.known_for_department + " | Known for: ";
    }

    if (filter === "multi") {
        if (data.media_type) {
            filterType = data.media_type;
        } else if (data.gender) {
            filterType = "person";
        }
    } else if (filter === "movie") {
        filterType = filter;
    } else if (filter === "tv") {
        filterType = filter;
    } else if (filter === "person") {
        filterType = filter;
    }

    //console.log(filterType);
    //console.log(data);

    return (
        <SearchContentCard to={`/${filterType}/${data.id}`} key={index + data.id}>
            <img src={searchImages[index]} />

            <SearchContentInfo>
                <h3>{data.title ? data.title : data.name}</h3>
                {convertedDate !== "Unavailable" ? <p className="date">{convertedDate}</p> : <></>}
                <p>{data.overview}</p>
                <p>{department}{knownFor}</p>
            </SearchContentInfo>
        </SearchContentCard>
    )
}

export default SearchContentDetails