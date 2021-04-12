import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/myContext";

export const Form = ({ users, setUsers }) => {
  const initialStateUser = { name: "", email: "" };
  const [user, setUser] = useState(initialStateUser);
  const [newid, setnewId] = useState(users.length + 1);
  const context = useContext(MyContext);
  const { mode, id, setMode } = context; // context.mode

  useEffect(() => {
    if (!mode) {
      // Editando
      const userUpdate = users.find((user) => user.id === id);
      setUser(userUpdate);
    }
  }, [!mode && id]);

  const handleInput = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    if (!mode) {
      // False Editando
      setUsers(users.map((userUp) => (userUp.id === id ? user : userUp)));
      Close();
    } else {
      // True Agregando
      setnewId(newid + 1);
      setUsers([...users, { ...user, id: newid }]);
      setUser({});
    }
  };

  const Close = () => {
    setUser(initialStateUser);
    setMode(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleInput} name="name" value={user.name} />
      </label>
      <label>
        Email:
        <input onChange={handleInput} name="email" value={user.email} />
      </label>
      <input type="submit" value={mode ? "Add" : "Edit"} />
      <button type="button" disabled={mode} onClick={Close}>
        Close
      </button>
    </form>
  );
};
