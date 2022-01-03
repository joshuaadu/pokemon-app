import { useEffect, useState, createContext, useReducer } from "react";

const PokemonDatabase = createContext({
  pokemonDataList: [],
  previousListUrl: "",
  nextListUrl: "",
  getMore: () => {}
});

export const PokemonDatabaseProvider = (props) => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [urlResponse, setUrlResponse] = useState();
  const [pokemonList, setPokemonList] = useState();

  useEffect(() => {
    // dispatchFetchPokemon({ url: url });
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUrlResponse(data);
      const list = data.results.map((item) => {
        return item.url;
      });
      setPokemonList(list);
      console.log(data, "first");
    })();
  }, [url]);

  useEffect(() => {
    console.log("pokemon list changed: ", pokemonList);
  }, [pokemonList]);

  const getNextPokemonList = () => {
    setUrl(urlResponse.next);
  };

  return (
    <PokemonDatabase.Provider
    // value={{
    //   getMore: getNextPokemonList,
    //   nextListUrl: fetchPokemonState.next,
    //   previousListUrl: fetchPokemonState.previous
    // }}
    >
      {props.children}
    </PokemonDatabase.Provider>
  );
};

//

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
      let pokemons = [];
      console.log("pokemonUrls: ", pokemonUrls);
      for (let url of pokemonUrls) {
        // console.log("url: ", url);
        // console.log("urls: ", pokemonUrls);
        const res = await fetch(url);
        const data = await res.json();
        console.log("data: ", data);
        console.log("pokemons: ", pokemons);
        pokemons.push(data);
      }
      setPokemons(pokemons);
    })();

    // (async () => {
    //   const promises = pokemonUrls.map(async (url) => {
    //     return await fetch(url);
    //   });

    //   const results = await Promise.all(promises)
    //   const final = results.map(async (res) => {
    //     if (!res.ok) {
    //       return
    //     }
    //     const data = await res.json();
    //     console.log("data", data)
    //     if (!data) {
    //       return
    //     }
    //     return data
    //   })
    //   setPokemons(final)
    // })();
  }, [pokemonUrls]);

  const loadNextPokemonList = () => {
    setUrl(urlResponse.next);
  };

  return [pokemons, loadNextPokemonList];
};

export default PokemonDatabase;
