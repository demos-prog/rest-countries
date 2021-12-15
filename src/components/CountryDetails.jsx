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
    getCountry(name).then((country) => {
      console.log(country[0]);
      setCountry(country[0]);
    });
  }, []);

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
            <div>
              <StyledDiv theme={theme}>{country.name.common}</StyledDiv>
              <div id="cont">
                <div>
                  <StyledDiv theme={theme}>
                    <b>Native name: </b>
                    {country.name.official}
                  </StyledDiv>
                  <StyledDiv theme={theme}>
                    <b>Population: </b>
                    {addDots(country.population)}
                  </StyledDiv>
                  <StyledDiv theme={theme}>
                    <b>Region: </b>
                    {country.region}
                  </StyledDiv>
                  <StyledDiv theme={theme}>
                    <b>Sub region: </b>
                    {country.subregion}
                  </StyledDiv>
                  <StyledDiv theme={theme}>
                    <b>Capital: </b>
                    {country.capital[0]}
                  </StyledDiv>
                </div>
                <div>
                  <StyledDiv theme={theme}>
                    <b>Currencies: </b>
                    {/* {country.currencies.(Object.keys(country.currencies)[0]).symbol} */}
                    {Object.keys(country.currencies)[0]} 
                  </StyledDiv>
                </div>
              </div>
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
