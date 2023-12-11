import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";
import InputValue from "./components/InputValue";
import Form from "./components/Form";
import Checkbox from "./components/Checkbox";
import AdvancedForm from "./components/AdvancedForm";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <InputValue />
      <Form /> */}
      {/* <Checkbox /> */}
      <AdvancedForm />
    </div>
  );
}

export default App;
