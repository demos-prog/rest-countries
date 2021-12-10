import React, { useState, Suspense } from "react";
import './null_styles.css'
import "./App.css";
let Countries = React.lazy(() => import("./components/Countries"));

function App() {
  const [numberOfCountriesOnPage, setNumberOfCountriesOnPage] = useState(8);

  function getMore(){
    setNumberOfCountriesOnPage(prev => prev + 8)
  }

  return (
    <div>
      <Suspense fallback="loading">
        <Countries numberOfCountriesOnPage={numberOfCountriesOnPage} />
      </Suspense>
      <button onClick={getMore}>See more</button>
    </div>
  );
}

export default App;
