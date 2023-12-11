import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import InputValue from "./components/InputValue";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputValue />
      <Form />
    </div>
  );
}

export default App;
