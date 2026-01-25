import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";

type DropdownProps = {
  label: string; // The text to display on the dropdown
  option: string[]; // The list of options to display in the dropdown
  value: string | null; // The currently selected value
  onChange: (value: string | null) => void; // Callback function when an option is selected
}

function Dropdown({
  label,
  option,
  value,
  onChange
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelected(opt: string) {
    onChange(opt);
    setIsOpen(false);
  }

  function handleClear() {
    onChange(null);
  }

  return (
    <>
      <div className="filter-dropdown">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {value ?? label}
          {value ? ( // if region is selected -> Xmark
            <FontAwesomeIcon icon={faXmark} onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}/>
          )
          : isOpen ? ( 
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )
          }
        </button>
      </div>
      <div className="filter-dropdown__options-container">
        {isOpen && (
          <ul className="filter-dropdown__options">
            {option.map((opt) => (
              <li key={opt}>
                <button onClick={() => handleSelected(opt)}>{opt}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;


