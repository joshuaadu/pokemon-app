import Card from "../UI/Card";
import classes from "./PokemonCard.module.css";
import Overview from "./views/Overview";
import Tabs from "./views/Tabs";
const PokemonCard = (props) => {
  return (
    <Card className={classes.pokemonCard}>
      <Overview id="3" name="Venusaur" type="grass"></Overview>
      <Tabs>
        <div>Overview</div>
        <div>Stats</div>
        <div>Abilities</div>
      </Tabs>
    </Card>
  );
};

export default PokemonCard;
