import classes from "./Overview.module.css";
// const Overview = (props) => {
//   return (
//     <div>
//       <img
//         src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`}
//         alt=""
//       />
//       <div className={`${classes.overview} info`}>
//         <span className={classes.number}>{`#${props.id.padStart(
//           3,
//           "0"
//         )}`}</span>
//         <h3>{props.name}</h3>
//         <small>{`Type: ${props.type}`}</small>
//       </div>
//     </div>
//   );
// };

const Overview = ({ imageUrl, id, name, elementType }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <div className={`${classes.overview} info`}>
        <span className={classes.number}>{`#${`${id}`.padStart(3, "0")}`}</span>
        <h3>{name}</h3>
        <small>{`Type: ${elementType}`}</small>
      </div>
    </div>
  );
};

export default Overview;
