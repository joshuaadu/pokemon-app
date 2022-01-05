import { useEffect, useState } from "react";
// import { colorsProvider } from "../store/pokemon-colors";
import classes from "./Pokemon.module.css";
const Pokemon = (props) => {
  // const { pokemonData, setPokemonData } = useState();
  // // useEffect(() => {
  // //   props.list.forEach(element => {
  //     (async () => {
  //       const res = await fetch(element.url);
  //       const data = await res.json();
  //       setPokemonData(data);
  //     })()
  //   });
  // }, [])
  // console.log(props.list);
  return <div className={classes.pokemon}>{props.children}</div>;
};

export default Pokemon;
