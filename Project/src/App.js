import logo from "./logo.svg";
import "./App.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import MyAccount from "./components/MyAccount";
function App() {
  return (
    <div className="App">
      <Registration />
      {/* <MyAccount /> */}
    </div>
  );
}

export default App;
