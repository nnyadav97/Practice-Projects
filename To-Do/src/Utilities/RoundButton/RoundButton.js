import "./RoundButton.css";
const RoundButton = (props) => {
  const roundButton = "round-button btn btn-primary " + props.className;
  return (
    <button className={roundButton}>
      <span className="roundbutton-content">+</span>
    </button>
  );
};
export default RoundButton;
