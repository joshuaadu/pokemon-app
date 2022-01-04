import "./styles.css";
import { useEffect } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonCard from "./components/Pokemon/PokemonCard";
import PokemonDatabase, {
  usePokemonData
} from "./components/store/pokemon-database";

export default function App() {
  const [pokemonData, loadMorePokemon] = usePokemonData();

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  return (
    <div className="App">
      <h1>Pokemon Pokedex</h1>
      <Pokemon>
        {pokemonData.map((data) => (
          <PokemonCard
            key={data.name}
            id={data.id}
            name={data.name}
            // elementType="something"
          />
        ))}
      </Pokemon>
      <button onClick={loadMorePokemon}>Show more!</button>
    </div>
  );
}
