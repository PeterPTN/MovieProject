import {
  PersonWrapper,
  PersonContainer,
  PersonDisplay,
  HeadShot,
  PersonInfo,
  PersonSummary,
  PersonSummaryQueries,
  PersonSummaryDescriptors,
  Overview,
  DiscographyContainer,
  Discography,
  DiscographyCard,
} from "./PersonPage.styled";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useTMDbIDSearch from "../useTMDbIDSearch";
import useDateConversion from "../sharedcomponents/useDateConversion"

const PersonPage = ({ TMDb, setTrailerType }) => {
  //Not using states cause of Date Conversion re-renders with rawDate change
  //rawDate will go from undefined to keyed value infinitely
  const [showText, setShowText] = useState("hide")
  const imagePrefix = "https://image.tmdb.org/t/p/w500";
  const person = "person";
  const imageNotFound = "https://i.stack.imgur.com/6M513.png"
  let firstCreditHalf;
  let secCreditHalf;
  let rawDate;

  const { id } = useParams();
  const { mediaData, castData, isPending } = useTMDbIDSearch({ id, person, TMDb });

  if (castData.length > 0) {
    firstCreditHalf = castData.slice(0, castData.length / 2)
    secCreditHalf = castData.slice(castData.length / 2 + 1);
  }

  if (mediaData.birthday !== undefined || mediaData.birthday !== null) {
    rawDate = mediaData.birthday;
  } else {
    rawDate = undefined;
  }

  //console.log(rawDate);

  const { convertedDate } = useDateConversion({ rawDate });

  //console.log("media", mediaData)
  //console.log("cast", castData)

  function handleClick() {
    showText === "hide" ? setShowText("show") : setShowText("hide");
  }

  useEffect(() => {
    setTimeout(window.scroll(0, 0), 1000)
    setTrailerType("details");
  }, [id])

  if (isPending) {
    return (
      <PersonWrapper className="padding" >
        <PersonContainer>
          <div className="loading" >
            <h2>Loading...</h2>
          </div>
        </PersonContainer>
      </PersonWrapper>
    )
  } else if (mediaData.id == id && firstCreditHalf.length > 0 && secCreditHalf.length > 0) {
    return (
      <PersonWrapper className="padding">
        <PersonContainer>

          <PersonInfo>
            <h2>{mediaData.name}</h2>
            <PersonSummary >
              <PersonSummaryQueries>
                <p>Birthday</p>
                <p>Birthplace:</p>
                <p>Known for: </p>
              </PersonSummaryQueries>

              <PersonSummaryDescriptors>
                <p>{convertedDate}</p>
                <p>{mediaData.place_of_birth ? mediaData.place_of_birth : "Unavailable"}</p>
                <p>{mediaData.known_for_department ? mediaData.known_for_department : "Unavailable"}</p>
              </PersonSummaryDescriptors>
            </PersonSummary>

            <Overview className={showText} >
              <p>{mediaData.biography ? mediaData.biography : "Unavailabe"}</p>
            </Overview>
            <button onClick={handleClick} className={showText}>Show</button>
          </PersonInfo>

          <PersonDisplay>
            <HeadShot>
          
              <img src={mediaData.profile_path ? imagePrefix + mediaData.profile_path : imageNotFound} />
            </HeadShot>

            <DiscographyContainer>
              <h2>Filmography</h2>

              <Discography>
                <DiscographyCard>
                  {firstCreditHalf.map((item, index) => {
                    //console.log(item);
                    let path;
                    if (item.poster_path === null || item.poster_path === undefined) {
                      path = imageNotFound;
                    } else {
                      path = imagePrefix + item.poster_path;
                    }
                    return (
                      <Link key={index + 2} to={`/${item.media_type}/${item.id}`}>
                        <img src={path} alt={item.name ? item.name : item.original_title + " poster"} />
                        <h3>{item.name ? item.name : item.original_title}</h3>
                        <p>{item.character}</p>
                      </Link>)
                  })}
                </DiscographyCard>

                <DiscographyCard>
                  {secCreditHalf.map((item, index) => {
                    //console.log(item);
                    let path;
                    if (item.poster_path == null || item.poster_path == undefined) {
                      path = imageNotFound;
                    } else {
                      path = imagePrefix + item.poster_path;
                    }
                    return (
                      <Link key={index + 2} to={`/${item.media_type}/${item.id}`}>
                        <img src={path} alt={item.name ? item.name : item.original_title + " poster"} />
                        <h3>{item.name ? item.name : item.original_title}</h3>
                        <p>{item.character}</p>
                      </Link>)
                  })}
                </DiscographyCard>
              </Discography>

            </DiscographyContainer>
          </PersonDisplay>

        </PersonContainer>
      </PersonWrapper>
    )
  }
}

export default PersonPage