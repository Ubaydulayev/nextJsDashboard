import { getUsers } from "../Api";
import { SET_USERS } from "./Types";
import { dispatch } from "./Store";


const setUsers = async () => {
  const res = await getUsers();
  if (res.success) {
    const action = { type: SET_USERS, payload: res.data };
    dispatch(action);
  } else {
  }
};

// const setTodos = async () => {
//   const res 
// }

// const setLoading = () => {
//   dispatch({type: SET_LOADING})
// }

// const setError = () => {
//   dispatch({type: SET_ERROR})
// }

export { setUsers};