import useTraktFetch from '../useTraktFetch';
import ContentDetails from './ContentDetails';

const ContentPopular = ({ trailerType, TraktDeets, TMDb }) => {
  const popular = "popular";
  const { mediaData, mediaPic } = useTraktFetch({ trailerType, TMDb, TraktDeets, popular });

  return (
    <>
      {trailerType === "movies" &&
        mediaData.map((film, index) => {
          if (mediaData[0]) {
            return (
            
                <ContentDetails key={index + film.title} data={film} index={index}
                  mediaPic={mediaPic} trailerType={trailerType} />
              
            )
          }
        })
      }

      {trailerType === "shows" &&
        mediaData.map((film, index) => {
          if (mediaData[0]) {
            return (
              <ContentDetails key={film + film.title} data={film} index={index}
                mediaPic={mediaPic} trailerType={trailerType} />
            )
          }
        })
      }
    </>
  )
}

export default ContentPopular