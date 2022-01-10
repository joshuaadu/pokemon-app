import * as React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import PokemonCard from "./components/Pokemon/PokemonCard";
import { usePokemonData } from "./components/store/pokemon-database";
import { useQuery } from "react-query";

const PokemonApp = () => {
  const { data: pokemonData, fetchMorePokemon, status } = usePokemonData();

  return (
    <>
      <h1>Pokemon Pokedex</h1>
      <Pokemon>
        {status === "loading" ? (
          <div>Loading...</div>
        ) : status === "error" ? (
          <div>Error Loading pokemons.</div>
        ) : (
          pokemonData.map((data) => (
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
      {/* <button className="button" onClick={loadMorePokemon}>
        Show more!
      </button> */}
    </>
  );
};

export default PokemonApp;
