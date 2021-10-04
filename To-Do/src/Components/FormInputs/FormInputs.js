import "./FormInputs.css";
import { MdStars } from "react-icons/md";
const FormInputs = (props) => {
  return (
    <div>
      <div className="d-flex">
        <div className="p-2 w-75">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="p-2 w-25">
          <label className="form-label">Email address</label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <label className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
          ></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="p-2 me-auto">
          <div>
            Rate Priority:
            <MdStars style={{ fontSize: "110%" }} />
            <MdStars style={{ fontSize: "110%" }} />
            <MdStars style={{ fontSize: "110%" }} />
            <MdStars style={{ fontSize: "110%" }} />
            <MdStars style={{ fontSize: "110%" }} />
          </div>
        </div>
        <div className="p-2">
          <button className="btn btn-primary">Cancel Item</button>
        </div>
        <div className="p-2">
          <button className="btn  btn-primary">Add Item</button>
        </div>
      </div>
    </div>
  );
};

export default FormInputs;
