import useTMDbFetch from '../useTMDbFetch';
import ContentDetails from './ContentDetails';

const ContentTop = ({ trailerType, TMDb }) => {
    const top = "top";
    const { mediaData, mediaPic } = useTMDbFetch({ top, TMDb, trailerType });

    return (
        <>
            {trailerType === "movies" &&
                mediaData.map((film, index) => {
                    if (mediaData[0] && mediaPic[0]) {
                        return (
                            <ContentDetails key={1 + index} data={film} index={index}
                                mediaPic={mediaPic} trailerType={trailerType} top={true} />
                        )
                    }
                })
            }

            {trailerType === "shows" &&
                mediaData.map((film, index) => {
                    if (mediaData[0] && mediaPic[0]) {

                        return (
                            <ContentDetails key={index} data={film} index={index}
                                mediaPic={mediaPic} trailerType={trailerType} top={true}/>
                        )
                    }
                })
            }
        </>
    )


}

export default ContentTop