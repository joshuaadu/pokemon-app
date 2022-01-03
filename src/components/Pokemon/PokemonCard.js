import Card from "../UI/Card";
import classes from "./PokemonCard.module.css";
import Overview from "./views/Overview";
import Tabs from "./views/Tabs";
// const PokemonCard = (props) => {
//   return (
//     <Card className={classes.pokemonCard}>
//       <Overview id="3" name="Venusaur" type="grass"></Overview>
//       <Tabs>
//         <div>Overview</div>
//         <div>Stats</div>
//         <div>Abilities</div>
//       </Tabs>
//     </Card>
//   );
// };

const PokemonCard = ({ id, name, elementType = "" }) => {
  console.log(id, name, elementType);
  return (
    <Card className={classes.pokemonCard}>
      <Overview
        id={id}
        name={name}
        type={elementType}
        imageUrl={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
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
