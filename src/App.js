import "./styles.css";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonCard from "./components/Pokemon/PokemonCard";
import { usePokemonData } from "./components/store/pokemon-database";

export default function App() {
  const [pokemonData, loadMorePokemon] = usePokemonData();

  return (
    <div className="App">
      <h1>Pokemon Pokedex</h1>
      <Pokemon>
        {pokemonData.map((data) => (
          <PokemonCard
            key={data.name}
            id={data.id}
            name={data.name}
            types={data.types}
          />
        ))}
      </Pokemon>
      <button className="button" onClick={loadMorePokemon}>
        Show more!
      </button>
    </div>
  );
}
