import {
    SearchContentWrapper,
    SearchContentContainer,
    TempDisplay,
} from './SearchContent.styled';

import SearchContentDetails from './SearchContentDetails';

import useTMDbSearch from '../useTMDbSearch';

const SearchContent = ({ searchValue, TMDb, filter }) => {
    const { searchData, searchImages, isEmpty } = useTMDbSearch({ searchValue, TMDb, filter })
    //console.log(searchData);
    return (
        <SearchContentWrapper>
            <h2 className="margin">Search Results For: {searchValue}</h2>
            <SearchContentContainer className="margin">
                {(isEmpty) &&
                    <TempDisplay>
                        <h3>Nothing that matches your query.</h3>
                    </TempDisplay>
                }

                {searchData &&
                    searchData.map((media, index) => {
                        return (
                            <SearchContentDetails data={media} index={index}
                                searchImages={searchImages} key={1 + index} filter={filter} />
                        )
                    })
                }
            </SearchContentContainer>
        </SearchContentWrapper>
    )
}

export default SearchContent