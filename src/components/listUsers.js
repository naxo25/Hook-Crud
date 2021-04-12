import { useContext } from "react";
import { MyContext } from "../context/myContext";

const ListUsers = ({ users, setUsers }) => {
  const context = useContext(MyContext);
  const Edit = (id) => {
    context.setMode(false);
    context.setId(id);
  };
  const Remove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    context.setId(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => Edit(user.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => Remove(user.id)}>Remove</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Not users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListUsers;
