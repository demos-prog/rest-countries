import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import "./null_styles.css";
import spinner from "./components/images/Dual Ring-1s-200px.gif";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CountryDetails from "./components/CountryDetails";
import "./App.css";
const Countries = React.lazy(() => import("./components/Countries"));

export default function App() {
  const [numberOfCountriesOnPage, setNumberOfCountriesOnPage] = useState(16);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("All");
  const [path, setPath] = useState(localStorage.getItem("path") || "");

  function getMore() {
    setNumberOfCountriesOnPage((prev) => prev + 8);
  }

  function toggleTheme() {
    setTheme((prev) => !prev);
    localStorage.setItem("theme", JSON.stringify(!theme));
  }

  const Loader = (
    <div className="loaderWrap">
      <img src={spinner} alt="Loading..."></img>
    </div>
  );

  const List = (
    <>
      <NavBar
        theme={theme}
        setInputValue={setInputValue}
        setSelectValue={setSelectValue}
      />
      <Suspense fallback={Loader}>
        <Countries
          setPath={setPath}
          inputValue={inputValue}
          selectValue={selectValue}
          theme={theme}
          numberOfCountriesOnPage={numberOfCountriesOnPage}
        />
      </Suspense>
      <div id="btnWrap">
        <button id="moreBtn" onClick={getMore}>
          See more
        </button>
      </div>
    </>
  );

  return (
    <OuterDiv id="outerDiv" theme={theme}>
      <div id="wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={List} />
          <Route path={path} element={<CountryDetails theme={theme} />} />
        </Routes>
      </div>
    </OuterDiv>
  );
}

const OuterDiv = styled.div`
  background-color: ${(props) =>
    props.theme === true ? "#E2E2E2" : "#202D36"};
  display: flex;
  justify-content: center;
`;
