import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`} style={props.style}>
      {/* <div className={classes.circle}></div> */}
      {props.children}
    </div>
  );
};

export default Card;
