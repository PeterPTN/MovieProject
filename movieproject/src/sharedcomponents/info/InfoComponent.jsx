import useTraktFull from "../useTraktFull"
import useDateConversion from "../useDateConversion"
import { Link } from "react-router-dom"

import {
    InfoWrapper,
    InfoContainer,
    InfoContainerColumn
} from "./Info.styled"


const InfoComponent = ({ mediaData, TraktDeets, movie, show, crewData, castData }) => {
    let name;
    let rawDate;
    //console.log(creditData);

    mediaData.original_title ? name = mediaData.orginal_title : name = mediaData.original_name;
    mediaData.release_date ? rawDate = mediaData.release_date : rawDate = mediaData.first_air_date;
    const { traktMediaData } = useTraktFull({ name, TraktDeets, movie, show });
    const { convertedDate } = useDateConversion({ rawDate });

    const director = crewData
        .filter(item => {
            return item.known_for_department === "Directing" ||
                item.department === "Directing";
        })
        .map(item => ({ name: item.name, id: item.id }));
    const producers = crewData
        .filter(item => {
            return item.known_for_department === "Production" ||
                item.department === "Production";
        })
        .map(item => ({ name: item.name, id: item.id }))
    const writers = crewData
        .filter(item => {
            return item.known_for_department === "Writing" ||
                item.department === "Writing";
        })
        .map(item => ({ name: item.name, id: item.id }))

    //Mirror array, find Index based off condition, if indexes mirror then true (filter).
    //When repeated item iterates, FindIndex finds first item that satisfies conditions which would be the previous item-index, therefore causing false
    const uniqueWriters = writers.filter((person, index, array) => array.findIndex(per => per.name == person.name) == index).slice(0, 3);
    const uniqueProducers = producers.filter((person, index, array) => array.findIndex(per => per.name == person.name) == index).slice(0, 3);

    //console.log(director);
    //console.log("trakt", traktMediaData);
    //console.log("tmdb", mediaData);
    //console.log(creditData);
    //console.log(uniqueWriters);

    return (
        <InfoWrapper>
            <InfoContainer>
                <InfoContainerColumn>
                    {traktMediaData.movie &&
                        <>
                            <h2>{traktMediaData.type.charAt(0).toUpperCase() + traktMediaData.type.slice(1) + " Info"}</h2>
                            <h4>Director:</h4> {director.length > 0 ? <Link to={`/person/${director[0].id}`} >{director[0].name}</Link>
                                : <p>Unavailable</p>}
                            <br />
                            <h4>Producers:</h4> {uniqueProducers.length > 0 ? uniqueProducers.map((person, index) => {
                                const length = uniqueProducers.length - 1;
                                return <Link key={index + 1} to={`/person/${person.id}`}>{index === length ? person.name : person.name + ", "}</Link>
                            })
                                : <p>Unavailable</p>}
                            <br />
                            <h4>Writers:</h4> {uniqueWriters.length > 0 ? uniqueWriters.map((person, index) => {
                                const length = uniqueWriters.length - 1;
                                return <Link key={index + 1} to={`/person/${person.id}`}>{index === length ? person.name : person.name + ", "}</Link>
                            })
                                : <p>Unavailable</p>}
                            <br />
                            <h4>Genre:</h4> <p>{traktMediaData.movie.genres.map((item, index, array) => {
                                const length = array.length - 1;
                                return length === index ? item.charAt(0).toUpperCase() + item.slice(1) : item.charAt(0).toUpperCase() + item.slice(1) + ", ";
                            })}</p>
                            <br />
                            <h4>Rating:</h4> <p>{traktMediaData.movie.certification ? traktMediaData.movie.certification : "Unavailable"}</p>
                            <br />
                            <h4>Runtime:</h4> <p>{mediaData.runtime ? mediaData.runtime + "m" : "Unavailable"}</p>
                            <br />
                            <h4>Release Date:</h4> <p>{convertedDate ? convertedDate : "To be released"}</p>
                            <br />
                            <h4>Distributor:</h4> <p>{mediaData.production_companies.length > 0 ? mediaData.production_companies[0].name : "Unavailable"}</p>
                        </>
                    }
                    {traktMediaData.show &&
                        <>
                            <h2>{"Show Info"}</h2>
                            <h4>Director:</h4> {director.length > 0 ? <Link to={`/person/${director[0].id}`} >{director[0].name}</Link>
                                : <p>Unavailable</p>}
                            <br />
                            <h4>Producers:</h4> {uniqueProducers.length > 0 ? uniqueProducers.map((person, index) => {
                                const length = uniqueProducers.length - 1;
                                return <Link key={index + 1} to={`/person/${person.id}`}>{index === length ? person.name : person.name + ", "}</Link>
                            })
                                : <p>Unavailable</p>}
                            <br />
                            <h4>Writers:</h4> {uniqueWriters.length > 0 ? uniqueWriters.map((person, index) => {
                                const length = uniqueWriters.length - 1;
                                return <Link key={index + 1} to={`/person/${person.id}`}>{index === length ? person.name : person.name + ", "}</Link>
                            })
                                : <p>Unavailable</p>}
                            <br />
                            <h4>Genre:</h4> <p>{traktMediaData.show.genres.map((item, index, array) => {
                                const length = array.length - 1;
                                return length === index ? item.charAt(0).toUpperCase() + item.slice(1) : item.charAt(0).toUpperCase() + item.slice(1) + ", ";
                            })}</p>
                            <br />
                            <h4>Rating:</h4> <p>{traktMediaData.show.certification ? traktMediaData.show.certification : "Unavailable"}</p>
                            <br />
                            <h4>Seasons:</h4> <p>{mediaData.number_of_seasons ? mediaData.number_of_seasons : "Unavailable"}</p>
                            <br />
                            <h4>First Air Date:</h4> <p>{convertedDate ? convertedDate : "To be released"}</p>
                            <br />
                            <h4>Status:</h4> <p>{mediaData.status ? mediaData.status : "Unavailable"}</p>
                            <br></br>
                            <h4>Distributor:</h4> <p>{mediaData.production_companies[0].name}</p>
                        </>
                    }

                </InfoContainerColumn>

                <InfoContainerColumn second>
                    <h2>Overview</h2><p>{mediaData.overview}</p>
                    <h3>{mediaData.tagline}</h3>
                </InfoContainerColumn>
            </InfoContainer>
        </InfoWrapper>
    )
}

export default InfoComponent