import reactLogo from "./assets/react.svg";
import User from "./User";

const greets = ["Hello", "Hi", "Hey"];

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const greet = greets[genRandomInt(2)];

  return (
    <>
      <img src={reactLogo} alt="react logo" />
      <h1>{greet}, from React</h1>
      <ul>
        <li>
          <User id={users[0].id} name={users[0].name} />
        </li>
        <li>
          <User id={users[1].id} name={users[1].name} />
        </li>
        <li>
          <User id={users[2].id} name={users[2].name} />
        </li>
      </ul>
    </>
  );
}

export default App;
