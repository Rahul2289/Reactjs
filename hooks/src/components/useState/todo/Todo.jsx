import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = [...todos, task];
    setTodos(newTodo);
    setTask("");
  };

  const delatehandler = (indexvalue) => {
    const newtodo = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newtodo);
  };

  return (
    <div className="Todocontainer">
      <h1>TODO</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input">
          <input
            className="text"
            type="text"
            placeholder="type here!"
            value={task}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          <input type="submit" value="add" className="btn-grad"></input>
        </div>
      </form>

      <div className="list-container">
        {todos.map((list, index) => {
          return (
            <div className="list" key={index}>
              <h1 className="items">{list}</h1>
              <button onClick={() => delatehandler(index)} className="btn-grad">
                Delate
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
