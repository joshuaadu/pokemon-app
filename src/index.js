import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { PokemonDatabaseProvider } from "./components/store/pokemon-database";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <PokemonDatabaseProvider>
      <App />
    </PokemonDatabaseProvider>
  </StrictMode>,
  rootElement
);
