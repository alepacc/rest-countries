import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput() {
    return(
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className="search-input"
            type="text"
            id="search"
            placeholder="Search for a country..."
          />
        </div>
    )
}

export default SearchInput;