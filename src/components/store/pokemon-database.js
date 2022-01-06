import { useEffect, useState } from "react";

export const usePokemonData = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [urlResponse, setUrlResponse] = useState("");
  const [pokemonUrls, setPokemonList] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUrlResponse(data);
      const list = data.results.map((item) => {
        return item.url;
      });
      setPokemonList((prev) => [...prev, ...list]);
    })();
  }, [url]);

  useEffect(() => {
    // turn every url into a promise that fetches a single pokemon
    (async () => {
      const promises = pokemonUrls.map(async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        if (!data) {
          return;
        }
        return data;
      });
      const results = await Promise.all(promises);

      setPokemons(results);
    })();
  }, [pokemonUrls]);

  const loadNextPokemonList = () => {
    setUrl(urlResponse.next);
  };

  return [pokemons, loadNextPokemonList];
};
