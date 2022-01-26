import { useCallback, useState } from "react";
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
  const [allPokemons, setAllPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [isInitial, setInitial] = useState(true);
  const [nextListURL, setNextListURL] = useState();

  const loadNextPokemonList = () => {
    setUrl(nextListURL);
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setNextListURL(data.next);

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
      setAllPokemons((prev) => [...prev, ...results]);
      setInitial(false);
      return results;
    } catch (e) {
      throw new Error(e.message);
    }
  }, [url]);

  const query = useQuery(["pokemons", url], fetchData, {
    refetchOnWindowFocus: true,
    staleTime: 5000,
    refetchInterval: 15000
  });

  return [
    {
      ...query,
      data: allPokemons,
      status:
        query.status === "loading"
          ? isInitial
            ? "loading"
            : "loadingNext"
          : query.status
    },
    loadNextPokemonList
  ];
};
