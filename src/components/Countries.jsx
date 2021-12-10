import { nanoid } from "nanoid";
import { useMemo, useState } from "react";

export default function Countries({ numberOfCountriesOnPage }) {
  const [arrOfCountries, setArrOfCountries] = useState([]);

  async function getAllCountries() {
    let res = await fetch(`https://restcountries.com/v3.1/all`);
    if (res.ok) {
      return await res.json();
    } else {
      console.log("Err");
    }
  }

  useMemo(() => {
    getAllCountries().then((countries) => {
      setArrOfCountries(countries.slice(0, numberOfCountriesOnPage));
    });
  }, [numberOfCountriesOnPage]);

  let list = arrOfCountries.map((country) => {
    return <div key={nanoid()}>{country.name.common}</div>;
  });

  return <div>{list}</div>;
}
