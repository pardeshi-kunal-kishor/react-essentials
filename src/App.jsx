const greets = ["Hello", "Hi", "Hey"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const greet = greets[genRandomInt(2)];
  return <h1>{greet}, from React</h1>;
}

export default App;
