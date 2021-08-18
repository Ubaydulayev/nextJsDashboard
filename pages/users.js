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
import { useSelector } from "react-redux";
import { setUsers } from "../Redux/Actions";

const users = () => {

  useEffect(() => {
    setUsers();
  }, []);

  const data = useSelector(state => state.users);

  return (
    <div>
      <h1 className="p-5">Users</h1>
      {data.length > 0 && <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {data.map(v => <TableRow>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.name}</TableCell>
              <TableCell>{v.username}</TableCell>
              <TableCell>{v.email}</TableCell>
              <TableCell>{v.phone}</TableCell>
              <TableCell>{v.website}</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      </TableContainer> || ""}
    </div>
  );
};

export default users;
