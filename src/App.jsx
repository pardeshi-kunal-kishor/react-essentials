import reactLogo from "./assets/react.svg";

const greets = ["Hello", "Hi", "Hey"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const greet = greets[genRandomInt(2)];
  return (
    <>
      <img src={reactLogo} alt="react logo" />
      <h1>{greet}, from React</h1>
    </>
  );
}

export default App;
