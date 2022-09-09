
import {
    ContentWrapper,
    ContentContainer,
    ContentCardWrapper,
    ContentCardContainer,

} from './Content.styled';

import ContentAnticipated from './ContentAnticipated';
import ContentPopular from './ContentPopular';
import ContentTop from './ContentTop';

const Content = ({ trailerType, TraktDeets, TMDb }) => {

    return (
        <ContentWrapper className="padding" >
            <ContentContainer>

                <ContentCardWrapper>
                    <h3>Popular</h3>
                    <ContentCardContainer>
                        <ContentPopular TraktDeets={TraktDeets} TMDb={TMDb} trailerType={trailerType} />
                    </ContentCardContainer>
                </ContentCardWrapper>

                <ContentCardWrapper>
                    <h3>Anticipated</h3>
                    <ContentCardContainer>
                        <ContentAnticipated TraktDeets={TraktDeets} TMDb={TMDb} trailerType={trailerType} />
                    </ContentCardContainer>
                </ContentCardWrapper>

               
                <ContentCardWrapper>
                    <h3>Top-Rated</h3>
                    <ContentCardContainer  >
                        <ContentTop TraktDeets={TraktDeets} TMDb={TMDb} trailerType={trailerType} />
                    </ContentCardContainer>
                </ContentCardWrapper> 
                
                

            </ContentContainer>
        </ContentWrapper>
    )
}

export default Content