import React, { useState } from "react";
import "./birthdayremainder.css";
import data from "./data";

const Birthdayremainder = () => {
  const [people, setPeople] = useState(data);

  const clearall = () => {
    setPeople([]);
  };

  const Refresh = () => {
    setPeople(data);
  };
  return (
    <div className="Birthdaycontainer">
      <h2>Birthday remainder</h2>
      <h2>({people.length}) birthdays today</h2>
      <div className="">
        {people.map(({ id, name, age }) => {
          return (
            <div className="" key={id}>
              <h1 style={{ color: "black" }}>
                {name} <>(age:{age})</>
              </h1>
            </div>
          );
        })}
        <div className="btn-container">
          <button className="btn-grad" onClick={clearall}>
            Clear All
          </button>
          <button className="btn-grad" onClick={Refresh}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birthdayremainder;
