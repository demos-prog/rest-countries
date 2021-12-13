import React, { useState, Suspense } from "react";
import "./null_styles.css";
import Header from "./components/Header";
import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
const Countries = React.lazy(() => import("./components/Countries"));

export default function App() {
  const [numberOfCountriesOnPage, setNumberOfCountriesOnPage] = useState(16);
  const [theme, setTheme] = useState(false);
  const [inputValue, setInputValue] = useState("peru");

  function getMore() {
    setNumberOfCountriesOnPage((prev) => prev + 8);
  }

  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <OuterDiv id="outerDiv" theme={theme}>
      <div id="wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <NavBar theme={theme} setInputValue={setInputValue} />
        <Suspense fallback="loading">
          <Countries
            inputValue={inputValue}
            theme={theme}
            numberOfCountriesOnPage={numberOfCountriesOnPage}
          />
        </Suspense>
        <StyledBtn theme={theme} id="moreBtn" onClick={getMore}>
          See more
        </StyledBtn>
      </div>
    </OuterDiv>
  );
}

const OuterDiv = styled.div`
  background-color: ${(props) => (props.theme === true ? "white" : "#202D36")};
  display: flex;
  justify-content: center;
`;

const StyledBtn = styled.button`
  background-color: ${(props) => (props.theme === true ? "#C0C0C0" : "white")};
  color: ${(props) => (props.theme === true ? "white" : "black")};
`;
