import "./styles.css";
import logo from "./logo.svg";
import { useState } from "react";
import ListUsers from "./components/listUsers";
import { Form } from "./components/Form";
import { initialUsers } from "./store/users.js";
import UseContext from "./context/useContext";

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className="App">
      <UseContext>
        <header className="App-header">
          <Form users={users} setUsers={setUsers} />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <header className="App-header">
          <ListUsers users={users} setUsers={setUsers} />
        </header>
      </UseContext>
    </div>
  );
}
