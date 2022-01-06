import React from "react";
const PokemonColors = React.createContext({
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#F4E7DA",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5"
});

export const PokemonColorsProvider = (props) => {
  return <PokemonColors.Provider>{props.children}</PokemonColors.Provider>;
};

export default PokemonColors;
