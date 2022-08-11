import { useEffect } from 'react';
import { Hero, Content} from './index';

const LandingPage = ({ TMDb, TraktDeets, trailerType, setTrailerType }) => {
    useEffect(() => {
        setTrailerType("movies");
    },[])

    return (
        <>
            <Hero TraktDeets={TraktDeets} TMDb={TMDb} trailerType={trailerType} />
            <Content TraktDeets={TraktDeets} TMDb={TMDb} trailerType={trailerType} />
        </>
    )
}

export default LandingPage