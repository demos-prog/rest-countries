import React, { useState, Suspense } from "react";
import "./null_styles.css";
import "./App.css";
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
    <div>
      <header>
        <button onClick={() => toggleTheme()}>Change theme</button>
      </header>
      <Suspense fallback="loading">
        <Countries
          theme={theme}
          numberOfCountriesOnPage={numberOfCountriesOnPage}
        />
      </Suspense>
      <button onClick={getMore}>See more</button>
    </div>
  );
}

export default App;
