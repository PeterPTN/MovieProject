import { useEffect } from "react";
import SearchContent from "./searchcontent/SearchContent";

const SearchPage = ({ searchValue, TMDb, filter, setTrailerType }) => {
    useEffect(() => setTrailerType("search"), [])
    return (
        <>
            <SearchContent searchValue={searchValue} TMDb={TMDb} filter={filter} />
        </>
    )
}

export default SearchPage