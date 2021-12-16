import styled from "styled-components";
import "./Header.css";

export default function Header({ toggleTheme, theme }) {
  return (
    <StyledHeader theme={theme}>
      <div className="wrapper">
        <StyledSpan id="logo" theme={theme}>Where in the World ?</StyledSpan>
        <StyledButtom
          className={theme ? "lightBtn" : "darkBtn"}
          theme={theme}
          onClick={() => toggleTheme()}
        >
          {theme ? "Dark theme" : "Light theme"}
        </StyledButtom>
      </div>
    </StyledHeader>
  );
}

const StyledSpan = styled.span`
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;

const StyledHeader = styled.header`
  background-color: ${(props) => (props.theme === true ? "white" : "#2B3743")};
`;

const StyledButtom = styled.button`
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;
