import "./Items.css";
import { MdStars } from "react-icons/md";
const Items = (props) => {
  return (
    <div className="item-container p-2">
      <div className="d-flex">
        <div className="w-75">
          <span className="Item-title">{props.name}</span>
          <div className="Item-content">{props.discription}</div>
        </div>
        <div
          className="w-25 justify-content-end"
          style={{ textAlign: "right" }}
        >
          <span className="badge bg-secondary" style={{ marginLeft: "-10px" }}>
            {props.date.getDate() +
              "-" +
              Number(props.date.getMonth() + 1) +
              "-" +
              props.date.getFullYear()}
          </span>
          {/* <div className="d-flex align-items-end flex-row-reverse pb-3 priority-level-container"> */}
          <div className="pb-3">
            <span
              className="material-icons"
              className="priority-level-container"
            >
              <MdStars
                className="priority-level-icons"
                style={{ color: "gold", fontSize: "110%" }}
              />
              <MdStars
                className="priority-level-icons"
                style={{ color: "gold", fontSize: "110%" }}
              />
              <MdStars
                className="priority-level-icons"
                style={{ color: "gold", fontSize: "110%" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
