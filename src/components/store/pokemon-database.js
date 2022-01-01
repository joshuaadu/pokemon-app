import { useEffect, useState, createContext, useReducer } from "react";

const PokemonDatabase = createContext({
  pokemonDataList: [],
  previousListUrl: "",
  nextListUrl: "",
  getMore: () => {}
});

const getPokemonListReducer = (state, action) => {
  let data = {};
  (async () => {
    const res = await fetch(action.url);
    const data = await res.json();
    return data;
  })().then((el) => {
    Object.assign(data, el);
  });
  console.log(data, "me");
  // const list = data.results.map((item) => {
  //   return item.url;
  // });
  return {
    list: "list"
    // previous: data.results.previous,
    // next: data.results.next
  };
};

export const PokemonDatabaseProvider = (props) => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [urlResponse, setUrlResponse] = useState();
  const [pokemonList, setPokemonList] = useState();
  const [fetchPokemonState, dispatchFetchPokemon] = useReducer(
    getPokemonListReducer,
    {}
  );

  useEffect(() => {
    dispatchFetchPokemon({ url: url });
    // (async () => {
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   setUrlResponse(data);
    //   const list = data.results.map((item) => {
    //     return item.url;
    //   });
    //   setPokemonList(list);
    //   console.log(data, "first");
    //   // setPokemonList(data);
    //   // console.log(res2);
    // })();
  }, [url]);
  console.log(fetchPokemonState, "working");

  const getNextPokemonList = () => {
    setUrl(urlResponse.next);
  };

  return (
    <PokemonDatabase.Provider
      value={{
        getMore: getNextPokemonList,
        nextListUrl: fetchPokemonState.next,
        previousListUrl: fetchPokemonState.previous
      }}
    >
      {props.children}
    </PokemonDatabase.Provider>
  );
};

export default PokemonDatabase;
