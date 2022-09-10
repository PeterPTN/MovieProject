import useTraktFetch from '../useTraktFetch';

import ContentDetails from './ContentDetails';

const ContentTrending = ({ trailerType, TraktDeets, TMDb }) => {
    const anticipated = "anticipated";
    const { mediaData, mediaPic } = useTraktFetch({ trailerType, TMDb, TraktDeets, anticipated });

    return (
        <>
            {trailerType === "movies" &&
                mediaData.map((film, index) => {
                    if (mediaData[0].movie) {
                        return (
                            <ContentDetails key={index + film.movie.title} data={film}
                                mediaPic={mediaPic} trailerType={trailerType} index={index} anti={true} />
                        )
                    }
                })
            }

            {trailerType === "shows" &&
                mediaData.map((film, index) => {
                    if (mediaData[0].show) {
                        return (
                            <ContentDetails key={index + film.show.title} data={film}
                                mediaPic={mediaPic} trailerType={trailerType} index={index} anti={true} />)
                    }
                })
            }
        </>
    )

}

export default ContentTrending