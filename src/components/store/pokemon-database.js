import { useState } from "react";
import { useQuery } from "react-query";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

export const usePokemonData = () => {
  // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  // const loadNextPokemonList = (nextUrlList) => {
  //   setUrl(nextUrlList);
  // };

  const query = useQuery(
    "pokemons",
    async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await res.json();

        const urls = data.results.map((item) => {
          return item.url;
        });
        const promises = urls.map(async (url) => {
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
        let results = await Promise.all(promises);
        results = shuffle(results);
        return results;
      } catch (e) {
        throw new Error(e.message);
      }
    },
    {
      refetchOnWindowFocus: true,
      staleTime: 5000,
      refetchInterval: 15000
    }
  );

  return query;
};
