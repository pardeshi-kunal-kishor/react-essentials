import reactLogo from "./assets/react.svg";
import TabButton from "./components/TabButton";
import User from "./components/User";
import userData from "./user.json";

const greets = ["Hello", "Hi", "Hey"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const greet = greets[genRandomInt(2)];

  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }

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
      <menu>
        <TabButton onSelect={() => handleSelect("button1")}>Button 1</TabButton>
        <TabButton onSelect={() => handleSelect("button2")}>Button 2</TabButton>
        <TabButton onSelect={() => handleSelect("button3")}>Button 3</TabButton>
      </menu>
    </>
  );
}

export default App;
