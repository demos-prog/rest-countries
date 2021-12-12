import styled from "styled-components";
import "./Header.css";

export default function Header({ toggleTheme, theme }) {
  return (
    <StyledHeader theme={theme}>
      <div className="wrapper">
        <button onClick={() => toggleTheme()}>Change theme</button>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${(props) => (props.theme === true ? "white" : "#2B3743")};
`;
