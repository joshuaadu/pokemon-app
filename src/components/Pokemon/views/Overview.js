import classes from "./Overview.module.css";
import viewCSS from "../PokemonCard.module.css";

const Overview = ({ imageUrl, id, name, type }) => {
  return (
    <div className={viewCSS.view}>
      <img src={imageUrl} alt="" />
      <div className={`${classes.overview} info`}>
        <span className={classes.number}>{`#${`${id}`.padStart(3, "0")}`}</span>
        <h3>{name}</h3>
        <small>{`Type: ${type}`}</small>
      </div>
    </div>
  );
};

export default Overview;
