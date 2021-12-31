import "./styles.css";
import * as React from "react";
import PokemonCard from "./components/Pokemon/PokemonCard";
import Pokemons from "./components/Pokemon/Pokemons";

export default function App() {
  const [showPokemon, setShow] = React.useState(false);
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      setPokemon(data);
      console.log(data, "working");
    })();
  }, []);

  return (
    <div className="App">
      <h1>Pokemon Random Generator</h1>
      <button onClick={() => setShow((prev) => !prev)}>Show me!</button>
      <div>{showPokemon ? "Showing" : "hidden"}</div>
      {/* <div>{pokemon}</div> */}
      <Pokemons>
        <PokemonCard></PokemonCard>
      </Pokemons>
    </div>
  );
}
