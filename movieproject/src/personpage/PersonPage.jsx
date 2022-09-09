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
import fourohfour from "../images/404.png"

const PersonPage = ({ TMDb, setTrailerType }) => {

  const [showText, setShowText] = useState("hide");
  const imagePrefix = "https://image.tmdb.org/t/p/w500";
  const person = "person";
  const imageNotFound = fourohfour;
  let firstCreditHalf = new Array;
  let secCreditHalf = new Array;
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
  //console.log("first", firstCreditHalf);
  //console.log("sec", secCreditHalf);

  function handleClick() {
    showText === "hide" ? setShowText("show") : setShowText("hide");
  }

  useEffect(() => {
    setTimeout(window.scroll(0, 0), 1000);
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
  } else if (mediaData.id == id) {
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
                  {firstCreditHalf.length > 0 ? firstCreditHalf.map((item, index) => {
                    //array.map causing 429 due to image src/tmdb-api being called faster than 50 times a second
                    //Currently unable to design a solution to delay each iteration of array.map 
                    function imagePath() {
                      if (item.poster_path == null || item.poster_path == undefined) {
                        return imageNotFound;
                      } else {
                        return imagePrefix + item.poster_path
                      }
                    }


                    return (
                      <Link key={index + 2} to={`/${item.media_type}/${item.id}`}>
                        <img src={imagePath()} alt={item.name ? item.name : item.original_title + " poster"} loading="lazy" />
                        <h3>{item.name ? item.name : item.original_title}</h3>
                        <p>{item.character}</p>
                      </Link>)
                  })
                    :
                    <div>
                      <h3 className="empty" >Nothing to display</h3>
                    </div>}

                </DiscographyCard>

                <DiscographyCard>
                  {secCreditHalf.length > 0 ? secCreditHalf.map((item, index) => {
                    function imagePath() {
                      if (item.poster_path == null || item.poster_path == undefined) {
                        return imageNotFound;
                      } else {
                        return imagePrefix + item.poster_path;
                      }
                    }

                    return (
                      <Link key={index + 2} to={`/${item.media_type}/${item.id}`}>
                        <img src={imagePath()} alt={item.name ? item.name : item.original_title + " poster"} loading="lazy" />
                        <h3>{item.name ? item.name : item.original_title}</h3>
                        <p>{item.character}</p>
                      </Link>)
                  })
                    :
                    <div>
                      <h3></h3>
                    </div>
                  }
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