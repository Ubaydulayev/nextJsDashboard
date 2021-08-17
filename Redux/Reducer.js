import initialState from "./initialState";
import { SET_USERS } from "./Types";


const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return this.state;
  }
};

export default Reducer;
