import React, { Fragment } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Users } from "../Dashboard/types";

const useStyles = makeStyles({
  table: {
    maxWidth: 450,
  },
});

interface Props {
  users: Users;
}

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function User(props: Props) {
  const {users}=props;
  const classes = useStyles();
  const classes1 = useStyles1();
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">First_Name</TableCell>
              <TableCell align="right">Last_Name</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.data.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="right" className={classes1.root}>
                    <Avatar alt="Sharp" src={row.avatar} />
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.first_name}
                  </TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
