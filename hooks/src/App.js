import Counter from "./components/useState/counter/Counter";
import Birthdayremainder from "./components/useState/birthdayremainder/Birthdayremainder";
import Todo from "./components/useState/todo/Todo";
import Reviews from "./components/useState/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "black" }}>1.useState (examples)</h1>
      <Counter />
      <br />
      <Birthdayremainder />
      <br />
      <Todo />
      <br />
      <Reviews />
    </div>
  );
}

export default App;
