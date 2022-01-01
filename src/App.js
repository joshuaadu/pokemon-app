import "./styles.css";
import * as React from "react";
import PokemonCard from "./components/Pokemon/PokemonCard";
import Pokemons from "./components/Pokemon/Pokemons";

export default function App() {
  const [pokemonUrl, setPokemonUrl] = React.useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(pokemonUrl);
      const data = await res.json();
      setPokemonList(data);
    })();
  }, [pokemonUrl]);
  console.log(pokemonList, "working");

  const getNextPokemonList = () => {
    setPokemonUrl(pokemonList.next);
  };

  return (
    <div className="App">
      <h1>Pokemon Random Generator</h1>
      <Pokemons list={pokemonList.results}>
        <PokemonCard></PokemonCard>
      </Pokemons>
      <button onClick={getNextPokemonList}>Show more Pokemons!</button>
    </div>
  );
}

// {/* <button onClick={() => setShow((prev) => !prev)}>Show me!</button> */}
