import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addUser, delectUser, loadusers } from "../redux/actions";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const MenuHomeOuter = {
  textAlign: "center",
};

const MainOuterBox = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: " center",
  height: "100vh",
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadusers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure To Remove User-Information ")) {
      dispatch(delectUser(id));
    } else {
      dispatch(addUser);
    }
  };

  return (
    <div>
      <section className="topspaceee">
        <Container maxWidth={false}>
          <Grid item xs={12} md={8}>
            <div style={{ margin: "20px 0px" }}>
              <div style={MenuHomeOuter}>
                <Typography
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    margin: "20px 0px",
                    fontFamily: "serif",
                  }}
                >
                  {" "}
                  Display Users Basic Informations{" "}
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    navigate("/userinfo");
                  }}
                >
                  Add User
                </Button>
              </div>
            </div>
          </Grid>
        </Container>
      </section>

      <section className="middlescreens">
        <Container>
          <Grid item xs={12} md={8}>
            <div style={MainOuterBox}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>ID</StyledTableCell>
                      <StyledTableCell align="center">Name</StyledTableCell>
                      <StyledTableCell align="center">E-Mail</StyledTableCell>
                      <StyledTableCell align="center">Phone</StyledTableCell>
                      <StyledTableCell align="center">Address</StyledTableCell>
                      <StyledTableCell align="center">Password</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users &&
                      users.map((user) => (
                        <StyledTableRow key={user.id}>
                          <StyledTableCell component="th" scope="row">
                            {user.id}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {user.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {user.email}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {user.number}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {user.address}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {user.password}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <Button
                              style={{ marginRight: "5px" }}
                              color="error"
                              variant="contained"
                              onClick={() => {
                                handleDelete(user.id);
                              }}
                            >
                              Delect
                            </Button>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() => {
                                navigate(`/editeuser/${user.id}`);
                              }}
                            >
                              Edite
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Home;
