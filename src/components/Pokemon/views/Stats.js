import classes from "./Stats.module.css";
import viewCSS from "../PokemonCard.module.css";

const Stats = (props) => {
  console.log("stats", props.stat);
  return (
    <div className={`${viewCSS.view} ${classes.stats}`}>
      {props.stats.map((stat) => {
        return (
          <div className={classes.stat}>
            <div className={classes.label}>
              <span>{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
            </div>
            <meter
              className={classes.meter}
              id={stat.stat.name}
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
              value={stat.base_stat}
            ></meter>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
