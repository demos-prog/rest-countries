import React, { useState, Suspense } from "react";
import "./null_styles.css";
import Header from "./components/Header";
import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
let Countries = React.lazy(() => import("./components/Countries"));

function App() {
  const [numberOfCountriesOnPage, setNumberOfCountriesOnPage] = useState(16);
  const [theme, setTheme] = useState(true);

  function getMore() {
    setNumberOfCountriesOnPage((prev) => prev + 8);
  }

  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <OuterDiv theme={theme}>
      <div id="wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <NavBar theme={theme}/>
        <Suspense fallback="loading">
          <Countries
            theme={theme}
            numberOfCountriesOnPage={numberOfCountriesOnPage}
          />
        </Suspense>
        <button onClick={getMore}>See more</button>
      </div>
    </OuterDiv>
  );
}

export default App;

const OuterDiv = styled.div`
  background-color: ${(props) => (props.theme === true ? "white" : "#202D36")};
  display: flex;
  justify-content: center;
`;
