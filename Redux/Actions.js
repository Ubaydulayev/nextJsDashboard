import { getUsers } from "../Api";
import { SET_USERS } from "./Types";
import { useDispatch } from "react-redux";



export const setUsers = async (dispatch) => {
  const res = await getUsers();
  if (res.succes) {
    const action = { type: SET_USERS, payload: res.data };
    dispatch (action);
  } else {
  }
};
