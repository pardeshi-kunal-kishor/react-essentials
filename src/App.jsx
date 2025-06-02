import reactLogo from "./assets/react.svg";
import User from "./User";
import userData from "./user.json";

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
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <User {...user} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
