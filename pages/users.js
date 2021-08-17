import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Api";
import { setUsers } from "../Redux/Actions";

const users = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    setUsers(dispatch);
  }, []);
  const data = useSelector(state => users);
  return (
    <div>
      <h1 className="p-5">Users</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


export default users;
