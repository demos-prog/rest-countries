import { useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import "./Countries.css";
import styled from "styled-components";
import { useEffect } from "react/cjs/react.development";

export function addDots(number) {
  let result = "";
  let str = "" + number;
  let reversed = str.split("").reverse();
  for (let i = 0; i < reversed.length; i++) {
    if (i % 3 === 0 && i > 0) {
      result += "." + reversed[i];
    } else {
      result += reversed[i];
    }
  }
  return result.split("").reverse().join("");
}

export default function Countries({
  theme,
  numberOfCountriesOnPage,
  inputValue,
  selectValue,
  setPath,
}) {
  const [arrOfCountries, setArrOfCountries] = useState([]);

  async function getAllCountries() {
    let res = await fetch(
      `https://restcountries.com/v3.1/${
        selectValue === "All"
          ? inputValue === ""
            ? "all?fields=flags,name,population,capital,region"
            : "name/" +
              inputValue +
              "?fields=flags,name,population,capital,region"
          : "region/" +
            selectValue +
            "?fields=flags,name,population,capital,region"
      }`
    );
    if (res.ok) {
      return await res.json();
    } else {
      alert("Nothing was found !");
    }
  }

  useEffect(() => {
    getAllCountries().then((countries) => {
      if (Array.isArray(countries)) {
        setArrOfCountries(countries.slice(0, numberOfCountriesOnPage));
      }
    });
  }, [numberOfCountriesOnPage, inputValue, selectValue]); //eslint-disable-line

  function handleClick(name) {
    setPath(name);
    localStorage.setItem("path", name);
  }

  let list = arrOfCountries.map((country) => {
    let countryName = "/" + country.name.common.replace(/\s/g, "_");

    return (
      <ItemDiv theme={theme} className="countriesItem" key={nanoid()}>
        <Link onClick={() => handleClick(countryName)} to={countryName}>
          <Div theme={theme} className="countryCard">
            <div className="flag">
              <img alt="flag" src={country.flags.png}></img>
            </div>
            <div className="content">
              <b>{country.name.common}</b>
              <p>
                <b>Population:</b> {addDots(country.population)}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b>{" "}
                {Array.isArray(country.capital)
                  ? country.capital[0]
                  : country.capital}
              </p>
            </div>
          </Div>
        </Link>
      </ItemDiv>
    );
  });

  return <div className="countriesWrapper">{list}</div>;
}

const Div = styled.div`
  background-color: ${(props) => (props.theme === true ? "white" : "#2B3743")};
  color: ${(props) => (props.theme === true ? "black" : "white")};
`;

const ItemDiv = styled.div`
  background-color: ${(props) =>
    props.theme === true ? "#E2E2E2" : "#202D36"};
`;
