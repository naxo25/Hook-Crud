export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "setId":
      return {
        ...state,
        id: payload
      };
    default:
      return state;
  }
};
