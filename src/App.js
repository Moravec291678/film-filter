import React, { useState } from "react";
import categories from "./categories";
import Movies from "./components/Movies";
import "./components/Movies.css";

const App = () => {
  // výchozí kategorie – první z listu
  const [typeOfMovie, setTypeOfMovie] = useState(
    Array.isArray(categories) && categories.length ? categories[0] : "komedie"
  );

  return (
    <div className="app">
      <section className="section">
        <h2 className="section__title">Kategorie</h2>
        <div className="filters">
          {(Array.isArray(categories) && categories.length
            ? categories
            : ["komedie", "romantický", "akční"]
          ).map((cat) => (
            <button
              key={cat}
              className={`chip ${typeOfMovie === cat ? "chip--active" : ""}`}
              aria-pressed={typeOfMovie === cat}
              onClick={() => setTypeOfMovie(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Vybráno: {typeOfMovie}</h2>
        <Movies typeOfMovie={typeOfMovie} />
      </section>
    </div>
  );
};

export default App;
