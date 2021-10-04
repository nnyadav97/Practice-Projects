import "./Card.css";
const Card = (props) => {
  const classes = "Card-container " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
