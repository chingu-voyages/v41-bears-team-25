import React, { useState } from "react";
import Geoform from "./Geoform";

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  console.log({
    country,
    state,
    city
  });

  return (
    <div className="App">
      <Geoform location={country} isCountry onChange={setCountry} />
      <Geoform location={state} geoId={country} onChange={setState} />
      <Geoform location={city} geoId={state} onChange={setCity} />
    </div>
  );
}

export default App;
