import {
    HeroWrapper,
    HeroContainer,
    TrailerView,
    HeroCard,
    HeroDisplayContainer,
} from './Hero.styled'

import useTraktFetch from '../useTraktFetch';
import HeroDetails from './HeroDetails';

const Hero = ({ TraktDeets, TMDb, trailerType, setTrailerType }) => {
    const trending = "trending";

    const {
        trailerLink,
        mediaData,
        mediaPic,
        switchTrailer,
        isPending } = useTraktFetch({ trailerType, TMDb, TraktDeets, trending, setTrailerType });

    return (
        <HeroWrapper>
            <HeroContainer>

                <HeroDisplayContainer >
                    <TrailerView>
                        {isPending &&
                            <>
                                <h2>Loading</h2>
                                <iframe frameBorder="0" />
                            </>}

                        {!isPending &&
                            <>
                                <h2>Trending</h2>
                                <iframe src={trailerLink}
                                    frameBorder="0" title="YouTube video player"
                                    allowFullScreen />
                            </>}
                    </TrailerView>

                    <HeroCard >
                        {trailerType === "movies" &&
                            mediaData.map((film, index) => {
                                if (mediaData[0].movie) {
                                    return (
                                        <HeroDetails isPending={isPending} key={index + film.movie.title}
                                            data={film} index={index} switchTrailer={switchTrailer}
                                            trailerPic={mediaPic} trailerType={trailerType} />
                                    )
                                }
                            })
                        }

                        {trailerType === "shows" &&
                            mediaData.map((film, index) => {
                                if (mediaData[0].show) {
                                    return (
                                        <HeroDetails isPending={isPending} key={index + film.show.title}
                                            data={film} index={index} switchTrailer={switchTrailer}
                                            trailerPic={mediaPic} trailerType={trailerType} />
                                    )
                                }
                            })}
                    </HeroCard>
                </HeroDisplayContainer>

            </HeroContainer>
        </HeroWrapper>
    )

}

export default Hero