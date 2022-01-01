import { useEffect, useState } from "react/cjs/react.development";
import styled from "styled-components";
import "./CountryDetails.css";
import { addDots } from "./Countries";

export default function CountryDetails({ theme }) {
  const [country, setCountry] = useState(null);

  async function getCountry(country) {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=name,population,region,subregion,capital,currencies,languages,borders,flags`
    );
    return await res.json();
  }

  useEffect(() => {
    let name = window.location.pathname.slice(1).match(/[a-zA-Z]+/);
    getCountry(name[0].toLowerCase()).then((country) => {
      console.log(country[0]);
      setCountry(country[0]);
    });
  }, []);

  function makeStr(arr) {
    if (Array.isArray(arr)) {
      return arr.join(", ");
    } else {
      return "none";
    }
  }

  function makeStr2(obj) {
    if (typeof obj === "object") {
      let result = [];
      let values = Object.values(obj);
      for (let item of values) {
        result.push(item);
      }
      return result.join(", ");
    } else {
      return "none";
    }
  }

  return (
    <>
      {country && (
        <div id="sc_wrap">
          <div id="backButtonWrap">
            <StyledButton onClick={() => window.history.back()} theme={theme}>
              Back
            </StyledButton>
          </div>
          <div id="c_wrap">
            <div id="fl_wrap">
              <img src={country.flags.png} alt="flag"></img>
            </div>
            <div className="wrp">
              <StyledDiv className="title" theme={theme}>
                <b>{country.name.common}</b>
              </StyledDiv>
              <div id="cont">
                <div>
                  <StyledDiv className="it" theme={theme}>
                    <b>Native name: </b>
                    {country.name.official}
                  </StyledDiv>
                  <StyledDiv className="it" theme={theme}>
                    <b>Population: </b>
                    {addDots(country.population) || "none"}
                  </StyledDiv>
                  <StyledDiv className="it" theme={theme}>
                    <b>Region: </b>
                    {country.region}
                  </StyledDiv>
                  <StyledDiv className="it" theme={theme}>
                    <b>Sub region: </b>
                    {country.subregion || "none"}
                  </StyledDiv>
                  <StyledDiv className="it" theme={theme}>
                    <b>Capital: </b>
                    {country.capital[0] || "none"}
                  </StyledDiv>
                </div>
                <div className="dop_info">
                  <StyledDiv className="it" theme={theme}>
                    <b>Currencies: </b>
                    {Object.keys(country.currencies).length !== 0
                      ? country.currencies[
                          `${Object.keys(country.currencies)[0]}`
                        ].name
                      : "none"}
                  </StyledDiv>
                  <StyledDiv className="it" theme={theme}>
                    <b>Languages: </b>
                    {makeStr2(country.languages)}
                  </StyledDiv>
                </div>
              </div>

              <StyledDiv id="borders" theme={theme}>
                <b>Border Countries: </b>
                {(Array.isArray(country.borders) && makeStr(country.borders)) ||
                  "none"}
              </StyledDiv>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.theme === true ? "white" : "#2B3743")};
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;

const StyledDiv = styled.div`
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;
