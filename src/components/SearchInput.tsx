import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchInputProps = {
  value: string
  onChange : (value:string) => void 
}

function SearchInput({value, onChange}: SearchInputProps) {
    return(
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className="search-input"
            type="text"
            id="search"
            placeholder="Search for a country..."
            autoComplete="off"
            value={value}
            onChange={
              (e) => onChange(e.target.value)
            }
          />
        </div>
    )
}

export default SearchInput;