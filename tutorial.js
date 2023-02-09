// import "./App.css";
import { useState, useEffect } from "react";

const Animal = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Gender: {props.gender}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
};

const Apps = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Counter changed")
  }, [])

  return (
    <div className="App">
      <h1>Hello ,React App</h1>
      <Animal name={"Monkey"} age={33} gender={"Male"} />

      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
};

// export default App;