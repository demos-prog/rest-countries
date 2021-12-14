import { useEffect } from "react/cjs/react.development";

export default function CountryDetails() {
  async function getCountry(country) {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fields=name,nativeName,population,region,subregion,capital,currencies,languages,borders,flag`
    );
    return await res.json();
  }

  useEffect(() => {
    getCountry("peru").then((country) => {
      console.log(country[0]);
    });
  }, []);

  return <div>hello</div>;
}
