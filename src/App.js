import "./styles.css";
import { useContext, useEffect } from "react";
import PokemonCard from "./components/Pokemon/PokemonCard";
import PokemonDatabase, {
  usePokemonData
} from "./components/store/pokemon-database";

export default function App() {
  // const ctx = useContext(PokemonDatabase);
  const [pokemonData, loadMorePokemon] = usePokemonData();

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  return (
    <div className="App">
      <h1>Pokemon Pokedex</h1>
      <div>
        {pokemonData.map((data) => (
          <PokemonCard
            key={data.name}
            id={data.id}
            name={data.name}
            // elementType="something"
          />
        ))}
      </div>
      <button>Show more!</button>
    </div>
  );
}
