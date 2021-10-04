import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Utilities/Cards/Card";
import FormInputs from "./Components/FormInputs/FormInputs";
import RoundButton from "./Utilities/RoundButton/RoundButton";
import Items from "./Components/Items/Items";
import React, { useState } from "react";
function App() {
  const [isFormActive, setIsFormActive] = useState(false);
  const tasks = [
    {
      id: 1,
      name: "attend interview",
      discription:
        "tcs credibility test and interview for onboarding. tcs credibility test and interview for onboarding. tcs credibility test and interview for onboarding",
      date: new Date(),
      priorityLevel: 5,
    },
  ];
  tasks.push({
    id: 2,
    name: "get a mobile from store",
    discription: "ordered a mobile, get it from the store",
    date: new Date(),
    priorityLevel: 4,
  });
  console.log(tasks[1].name);
  return (
    <div>
      <div className="app-header-background"></div>
      <div className="app-container shadow-lg">
        <div className="app-title">
          My To-Do List{" "}
          <span className="" onClick={() => setIsFormActive(!isFormActive)}>
            <RoundButton className="app-round-button"></RoundButton>
          </span>
        </div>

        <div className="px-2 pb-2">
          {isFormActive && (
            <Card className="form-container mb-2">
              <FormInputs></FormInputs>
            </Card>
          )}
          {tasks.map((task) => (
            <Card key={task.id} className="form-container mb-2">
              <Items
                name={task.name}
                discription={task.discription}
                date={task.date}
                priorityLevel={task.priorityLevel}
              ></Items>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
