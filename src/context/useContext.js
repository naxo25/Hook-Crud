import { useReducer, useState } from "react";
import userReducer from "./reducer";
import { MyContext } from "./myContext";

const UseContext = (props) => {
  const [mode, setMode] = useState(true);
  const [state, dispatch] = useReducer(userReducer, { id: null });
  const setId = (payload) => {
    try {
      dispatch({
        type: "setId",
        payload
      });
    } catch {}
  };

  return (
    <MyContext.Provider value={{ mode, setMode, id: state.id, setId }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default UseContext;
