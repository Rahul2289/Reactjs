import "./App.css";
import Counter from "./components/useState/counter/Counter";
import Birthdayremainder from "./components/useState/birthdayremainder/Birthdayremainder";
import Todo from "./components/useState/todo/Todo";

function App() {
  return (
    <div className="App">
      <h1>1.useState (examples)</h1>
      <Counter />
      <br />
      <Birthdayremainder />
      <br />
      <Todo />
    </div>
  );
}

export default App;
