import * as React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonCard from "./components/Pokemon/PokemonCard";
import { usePokemonData } from "./components/store/pokemon-database";
import { useQuery } from "react-query";

// Status: loading, error, success, loadingMore
const PokemonApp = () => {
  const [{ data: pokemons, status }, loadNextPokemonList] = usePokemonData();

  return (
    <>
      <h1>Pokemon Pokedex</h1>
      <Pokemon>
        {status === "loading" ? (
          <div>Loading...</div>
        ) : status === "error" ? (
          <div>Error Loading pokemons.</div>
        ) : (
          pokemons.map((data) => (
            <PokemonCard
              key={data.name}
              id={data.id}
              name={data.name}
              types={data.types}
              stats={data.stats}
            />
          ))
        )}
      </Pokemon>
      {status === "loadingNext" && <div> Loading more... </div>}
      <button className="button" onClick={loadNextPokemonList}>
        Show more!
      </button>
    </>
  );
};

export default PokemonApp;
