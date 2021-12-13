import { useMemo, useState } from "react";
import { nanoid } from "nanoid";
import "./Countries.css";
import styled from "styled-components";

export default function Countries({
  theme,
  numberOfCountriesOnPage,
  inputValue,
  selectValue,
}) {
  const [arrOfCountries, setArrOfCountries] = useState([]);

  async function getAllCountries() {
    let res = await fetch(
      `https://restcountries.com/v3.1/${
        inputValue === ""
          ? "all?fields=flags,name,population,capital,region"
          : "name/" +
            inputValue +
            "?fields=flags,name,population,capital,region"
      }`
    );
    if (res.ok) {
      return await res.json();
    } else {
      alert("Nothing was found !");
    }
  }

  function addDots(number) {
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

  useMemo(() => {
    getAllCountries().then((countries) => {
      if (Array.isArray(countries)) {
        setArrOfCountries(countries.slice(0, numberOfCountriesOnPage));
        console.log(countries[0]);
      }
    });
  }, [numberOfCountriesOnPage, inputValue]); //eslint-disable-line

  let list = arrOfCountries.map((country) => {
    return (
      <ItemDiv theme={theme} className="countriesItem" key={nanoid()}>
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
    props.theme === true ? "#FAFAFA" : "#202D36"};
`;
