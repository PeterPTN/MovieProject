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
import { useEffect, useState, useCallback, useRef } from "react";
import useTMDbIDSearch from "../useTMDbIDSearch";
import useDateConversion from "../sharedcomponents/useDateConversion"
import fourohfour from "../images/404.png"

const PersonPage = ({ TMDb, setTrailerType }) => {
  const [arrayOne, setArrayOne] = useState([]);
  const [arrayTwo, setArrayTwo] = useState([]);
  const [firstCreditHalf, setFirstCreditHalf] = useState([]);
  const [secCreditHalf, setSecCreditHalf] = useState([]);
  const [showText, setShowText] = useState("hide");
  const rawDate = useRef(undefined);

  const imagePrefix = "https://image.tmdb.org/t/p/w500";
  const person = "person";
  const imageNotFound = fourohfour;
  const { id } = useParams();
  const { mediaData, castData, isPending } = useTMDbIDSearch({ id, person, TMDb });

  if (castData.length > 0 && secCreditHalf.length === 0 && firstCreditHalf.length === 0) {
    setFirstCreditHalf(castData.slice(0, castData.length / 2));
    setSecCreditHalf(castData.slice(castData.length / 2 + 1));
  }

  if (mediaData.birthday !== undefined && mediaData.birthday !== null && rawDate.current === undefined) {
    rawDate.current = mediaData.birthday;
  }


  const { convertedDate } = useDateConversion({ rawDate: rawDate.current });

  const handleClick = useCallback(() => {
    showText === "hide" ? setShowText("show") : setShowText("hide");
  })

  useEffect(() => {
    setTrailerType("details");

    if (arrayOne.length === 0) {
      firstCreditHalf.map((item, index) => setTimeout(() => {
        if (item.poster_path == null || item.poster_path == undefined) {
          setArrayOne((v) => [...v, imageNotFound])
        } else {
          setArrayOne((v) => [...v, imagePrefix + item.poster_path])
        }
      }
        , 275 * index))
    }

    if (arrayTwo.length === 0) {
      secCreditHalf.map((item, index) => setTimeout(() => {
        if (item.poster_path == null || item.poster_path == undefined) {
          setArrayTwo((v) => [...v, imageNotFound])
        } else {
          setArrayTwo((v) => [...v, imagePrefix + item.poster_path])
        }
      }
        , 275 * index))
    }

  }, [id, firstCreditHalf, secCreditHalf])

  const handleRenderOne = useCallback((index) => {
    return arrayOne[index];
  })

  const handleRenderTwo = useCallback((index) => {
    return arrayTwo[index];
  })

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
                    return (
                      <Link key={index + 2} to={`/${item.media_type}/${item.id}`}>
                        <img src={handleRenderOne(index)} alt={item.name ? item.name : item.original_title + " poster"} />
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
                    return (
                      <Link key={index + 2} to={`/${item.media_type}/${item.id}`}>
                        <img src={handleRenderTwo(index)} alt={item.name ? item.name : item.original_title + " poster"} />
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