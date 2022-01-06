import { useEffect, useState } from "react";
// import { colorsProvider } from "../store/pokemon-colors";
import classes from "./Pokemon.module.css";
const Pokemon = (props) => {
  return <div className={classes.pokemonGrid}>{props.children}</div>;
};

export default Pokemon;
