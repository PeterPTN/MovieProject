import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CreditsWrapper = styled.div`
    margin: 1.25rem .5rem;

    h2 {
        font-weight: 500;
        margin-bottom: .25rem;
    }
`

const CastCrewWrapper = styled.div`
    display: flex;
    justify-content: row;
    gap: .5rem;
    overflow-x: scroll;
    transition: all .1s;
    background-color: #eee;
  
`

const CastCrewContainer = styled.div`
    height: 20rem;
    font-size: .9rem;
    text-decoration: none;
    color: black;
    background-color: white;
    line-height: 1.2;

    img {
        min-width: 12.5rem;
        height: 15rem;
        object-fit: cover;
        object-position: 50% 25%;
    }

    h3, h4 {
        text-align: center;
    }

    h4 {
        color: #242424 ; 
    }
`

const CreditsComponent = ({ castData }) => {
    const imagePrefix = "https://image.tmdb.org/t/p/w500";

    return (
        <CreditsWrapper>
            <h2>Cast</h2>
            <CastCrewWrapper>
                {castData && castData.map((data, index) => {
                    let imageUrl;
                    data.profile_path ? imageUrl = imagePrefix + data.profile_path : imageUrl = "https://i.stack.imgur.com/6M513.png";
                    return (
                        <CastCrewContainer key={index}>
                            <Link to={`/person/${data.id}`}>
                                <img src={imageUrl} alt={data.original_name + " headshot"} />
                            </Link>
                            <h3>{data.original_name}</h3>
                            <h4>{data.character}</h4>
                        </CastCrewContainer>
                    )
                })}
            </CastCrewWrapper>

        </CreditsWrapper>
    )
}

export default CreditsComponent