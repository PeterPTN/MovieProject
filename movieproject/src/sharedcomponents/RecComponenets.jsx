import { Link } from "react-router-dom";
import styled from "styled-components"

const RecWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    overflow-y: hidden;

    h2 {
        color: ${({theme}) => theme.colors.blue};
        text-shadow: 0px 0px 2rem ${({theme}) => theme.colors.blue};
        padding-bottom: .5rem;
        font-weight: normal;
    }
`

const RecContainer = styled.div`
    display: flex;
    column-gap: .5rem;

    a,img {
        height: 17.5rem;
        width: 12.5rem;
    }
`

const RecComponenets = ({ recData, movie }) => {
    const imagePrefix = "https://image.tmdb.org/t/p/w500";

    //console.log(recData);
    if (recData.results.length > 0) {
        const recArray = recData.results.slice(0, 5);
        let mediaType = recArray[0].media_type;
          //console.log(recArray[0].media_type);

        return (
            <RecWrapper>
                <h2>Recommended</h2>
                <RecContainer>
                    {recArray.length > 0 ? recArray.map((item, index) => {
                        let path;
                        if (item.poster_path === null || item.poster_path === undefined) {
                            path = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                        } else {
                            path = imagePrefix + item.poster_path;
                        }

                        return <Link key={index + 2} to={`/${mediaType}/${item.id}`}>
                            <img src={path} />
                        </Link>
                    }
                    ) :
                        <h3>Nothing to display</h3>}
                </RecContainer>
            </RecWrapper>
        )
    }
}

export default RecComponenets