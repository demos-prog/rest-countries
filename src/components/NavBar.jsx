import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import "./NavBar.css";

export default function NavBar({ theme, setInputValue }) {
  const [curInpVal, setCurInpValue] = useState("");

  function searchSubmit(e) {
    e.preventDefault();
    setInputValue(curInpVal);
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
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: ${(props) =>
    props.theme === true ? "#FAFAFA" : "#202D36"};
`;

const StyledInput = styled.input`
  padding: 10px;
  background-color: ${(props) => (props.theme === true ? "white" : "#2B3743")};
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;
