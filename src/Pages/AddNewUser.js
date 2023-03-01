import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";

import { addUser } from "../redux/actions";

const MainOuterBox = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: " center",
  height: "100vh",
};

const MenuOuter = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: " center",
};

const BoxShade = {
  width: "700px",
  margin: "30px auto",
  borderRadius: "12px",
  backgroundColor: "#233d54a6",

  boxShadow:
    "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
};
const MainBoxforms = {
  width: "600px ",
  margin: "30px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const Stylinputs = {
  width: "600px ",
  margin: "0px auto",
  color: "#fff",
  border: "2px solid #fff",
  borderRadius: "5px",
};

const Heading = {
  fontSize: "35px",
  fontWeight: "600",
  color: "#fff",
};
const AddNewUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    password: "",
  });
  const { name, email, number, address, password } = state;

  const navigate = useNavigate();

  const [errors, setError] = useState();

  const dispatch = useDispatch("");

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number || !address || !password) {
      setError("Please Fill All User Input Fields");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <section className="Bgmain">
        <Container>
          <Box sx={{ height: "100vh", width: "auto" }}>
            <Grid item xs={12} md={8} style={{ padding: "20px 0px" }}>
              <div style={MenuOuter}>
                <Typography style={Heading}>
                  {" "}
                  Add New User Inforamtion
                </Typography>

                <Button
                  className="setting"
                  color="error"
                  variant="contained"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go Back
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ width: "auto" }}>
                <div style={MainOuterBox}>
                  <div style={BoxShade} className="outerboxxx">
                    <form
                      noValidate
                      autoComplete="off"
                      onSubmit={hundleSubmit}
                      style={MainBoxforms}
                    >
                      <TextField
                        style={Stylinputs}
                        id="standard-basic"
                        name="name"
                        label="user Name"
                        onChange={handleInputChange}
                        type="text"
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        id="standard-email"
                        label="E-Mail"
                        type="text"
                        onChange={handleInputChange}
                        name="email"
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        id="standard-contact"
                        name="number"
                        label="Phone Number"
                        type="number"
                        onChange={handleInputChange}
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        id="standard-addres"
                        name="address"
                        label="Address"
                        type="text"
                        onChange={handleInputChange}
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        name="password"
                        label="Password"
                        type="password"
                        onChange={handleInputChange}
                      />
                      <br></br>
                      <Button
                        style={{ margin: "15px 0px" }}
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Add User Info
                      </Button>
                      {errors && <h3 style={{ color: "red" }}> {errors}</h3>}
                    </form>
                  </div>
                </div>
              </Box>
            </Grid>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default AddNewUser;
