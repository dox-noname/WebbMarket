import React from "react";
import Select from "react-select";
import "./SearchBar.css";

const options = [
  { value: "option1", label: "computadoras" },
  { value: "option2", label: "telefonos" },
  { value: "option3", label: "globos" },
  { value: "option1", label: "computadoras" },
  { value: "option2", label: "telefonos" },
  { value: "option3", label: "globos" },
  { value: "option1", label: "computadoras" },
  { value: "option2", label: "telefonos" },
  { value: "option3", label: "globos" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "2px solid #707070" : "2px solid #E0E0E0",
    boxShadow: "none",
    "&:hover": {
      border: state.isFocused ? "2px solid #707070" : "2px solid #E0E0E0",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? "#E0E0E0" : "transparent",
    color: "#707070",
    "&:hover": {
      background: "#E0E0E0",
      color: "#707070",
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#707070",
    "&:hover": {
      color: "#707070",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const SearchBar = () => {
  const handleOptionChange = (selectedOption) => {
    switch (selectedOption.value) {
      case "option1":
       
        break;
      case "option2":
        window.location.href = "#section2";
        break;
      case "option3":
        window.location.href = "#section3";
        break;
      default:
        break;
    }
  };

  return (
    <div className="searchbar-container"> 
      <Select
        options={options}
        styles={customStyles}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default SearchBar;
