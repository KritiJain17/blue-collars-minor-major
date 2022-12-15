import { React, useState } from "react";
import DropdownContainer from "../DropdownContainer";
import DropdownItem from "../DropdownItem";

const Dropdown = ({
  value,
  width,
  height,
  handleSelect = () => {},
  dropdownItems = [],
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleItemSelect = (value) => {
    handleSelect(value);
    setDropdownOpen(false);
  }

  return (
    <div>
      <div className="dropdownBox" onClick={setDropdownOpen(!isDropdownOpen)}>
        {value || "Select"}
      </div>

      {isDropdownOpen ? (
        <DropdownContainer
          isOpen={showDropdown}
          dropdownWidth={width}
          ref={dropdownContainerRef}
        >
          {dropdownItems.map((dropdownItem, index) => (
            <div
              key={`dropdown_item_${index}_${dropdownItem.id}`}
              selected={value === dropdownItem.title}
              onClick={handleItemSelect.bind(null, dropdownItem.value)}
            >
              {dropdownItem.title}
            </div>
          ))}
        </DropdownContainer>
      ) : null}
    </div>
  );
};

export default Dropdown;
