import { useEffect, useState } from "react";

const Pokemon = (props) => {
  const { pokemonData, setPokemonData } = useState();
  // useEffect(() => {
  //   props.list.forEach(element => {
  //     (async () => {
  //       const res = await fetch(element.url);
  //       const data = await res.json();
  //       setPokemonData(data);
  //     })()
  //   });
  // }, [])
  console.log(props.list);
  return props.children;
};

export default Pokemon;
