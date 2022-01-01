import "./styles.css";
import { useContext } from "react";
import PokemonCard from "./components/Pokemon/PokemonCard";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonDatabase from "./components/store/pokemon-database";

export default function App() {
  const ctx = useContext(PokemonDatabase);
  return (
    <div className="App">
      <h1>Pokemon Pokedex</h1>
      <Pokemon>
        <PokemonCard id="2"></PokemonCard>
      </Pokemon>
      <button onClick={ctx.getMore}>Show more Pokemons!</button>
    </div>
  );
}
