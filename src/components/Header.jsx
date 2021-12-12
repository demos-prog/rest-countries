import styled from "styled-components";
import "./Header.css";

export default function Header({ toggleTheme, theme }) {
  return (
    <StyledHeader theme={theme}>
      <div className="wrapper">
        <StyledSpan theme={theme}>Where in the World ?</StyledSpan>
        <StyledButtom theme={theme} onClick={() => toggleTheme()}>
          Change theme
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
