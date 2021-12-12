import styled from "styled-components";
import "./NavBar.css";

export default function NavBar({ theme }) {
  return (
    <StyledNav theme={theme}>
      <form id="searchInput">
        <StyledInput
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
