import { useContext } from "react";
import PokemonColors from "../store/pokemon-colors";
import Card from "../UI/Card";
import classes from "./PokemonCard.module.css";
import Overview from "./views/Overview";
import Tabs from "./views/Tabs";

const PokemonCard = ({ id, name, types }) => {
  const ctx = useContext(PokemonColors);
  console.log(id, name, types);
  const cName = name[0].toUpperCase() + name.slice(1);
  const typeList = types.map((type) => type.type.name).join("/");
  const typeColor = ctx[types[0].type.name];

  return (
    <Card
      className={classes.pokemonCard}
      style={{ backgroundColor: typeColor }}
    >
      <Overview
        id={id}
        name={cName}
        type={typeList}
        // imageUrl={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
        imageUrl={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
      ></Overview>
      <Tabs>
        <div>Overview</div>
        <div>Stats</div>
        <div>Abilities</div>
      </Tabs>
    </Card>
  );
};

export default PokemonCard;
