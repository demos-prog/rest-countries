import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import "./NavBar.css";

export default function NavBar({ theme, setInputValue, setSelectValue }) {
  const [curInpVal, setCurInpValue] = useState("");

  function searchSubmit(e) {
    e.preventDefault();
    setInputValue(curInpVal);
  }

  function handleChSelect(e) {
    setSelectValue(e.target.value);
  }

  return (
    <StyledNav theme={theme}>
      <form id="searchInput" onSubmit={searchSubmit}>
        <StyledInput
          value={curInpVal}
          onChange={(e) => setCurInpValue(e.target.value)}
          theme={theme}
          type="text"
          placeholder="Search for a country ..."
        ></StyledInput>
      </form>

      <StyledSelect id="regionFilter" theme={theme} onChange={handleChSelect}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </StyledSelect>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: ${(props) =>
    props.theme === true ? "#E2E2E2" : "#202D36"};
`;

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => (props.theme === true ? "white" : "#2B3743")};
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;

const StyledSelect = styled.select`
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === true ? "#FAFAFA" : "#2B3743"};
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;
