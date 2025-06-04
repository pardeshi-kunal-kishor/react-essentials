import reactLogo from "./assets/react.svg";
import TabButton from "./components/TabButton";
import User from "./components/User";
import userData from "./user.json";
import { useState } from "react";

const greets = ["Hello", "Hi", "Hey"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedText, setSelectedText] = useState("please click a button");
  const greet = greets[genRandomInt(2)];

  function handleSelect(selectedButton) {
    setSelectedText(selectedButton);
    console.log("fun inside for handleSelect: ", selectedText); // updated state will not reflect here, until react execute the App component
  }

  (function () {
    console.log("fun inside for loop: ", selectedText); // this will always execute upon execution of App component, hence always has updated state.
  })();

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
      {selectedText}
    </>
  );
}

export default App;
