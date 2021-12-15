import { useEffect, useState } from "react/cjs/react.development";
import "./CountryDetails.css";

export default function CountryDetails() {
  const [country, setCountry] = useState(null);

  async function getCountry(country) {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=name,nativeName,population,region,subregion,capital,currencies,languages,borders,flags`
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
          <div>{country.capital[0]}</div>
        </div>
      )}
    </>
  );
}
