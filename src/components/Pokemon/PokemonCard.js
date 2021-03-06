import { useContext, useState } from "react";
import PokemonColors from "../store/pokemon-colors";
import Card from "../UI/Card";
import classes from "./PokemonCard.module.css";
import Overview from "./views/Overview";
import Stats from "./views/Stats";
import Tabs from "./views/Tabs";

const PokemonCard = ({ id, name, types, stats }) => {
  const [activeTab, setActiveTab] = useState(0);
  const ctx = useContext(PokemonColors);
  const cName = name[0].toUpperCase() + name.slice(1);
  const typeList = types.map((type) => type.type.name).join("/");
  const typeColor = ctx[types[0].type.name];

  return (
    <Card
      className={classes.pokemonCard}
      style={{ backgroundColor: typeColor }}
    >
      {activeTab === 0 && (
        <Overview
          id={id}
          name={cName}
          type={typeList}
          // imageUrl={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
          imageUrl={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
        ></Overview>
      )}
      {activeTab === 1 && <Stats stats={stats}></Stats>}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
        <div>Overview</div>
        <div>Stats</div>
        {/* <div>Abilities</div> */}
      </Tabs>
    </Card>
  );
};

export default PokemonCard;
