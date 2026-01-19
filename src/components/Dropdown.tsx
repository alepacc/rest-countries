import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { DropdownProps } from "../type/types";

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
      <div>
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
