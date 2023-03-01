import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import { updatedSucceUser, updateSingleUser } from "../redux/actions";

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
const EditeUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    password: "",
  });
  const { name, email, number, address, password } = state;
  let { id } = useParams();
  const navigate = useNavigate();
  const [errors, setError] = useState();
  const dispatch = useDispatch("");

  const { user } = useSelector((state) => state.data);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number || !address || !password) {
      setError("Please Fill All User Input Fields");
    } else {
      dispatch(updatedSucceUser(state, id));
      navigate("/");
      setError("");
    }
  };

  useEffect(() => {
    dispatch(updateSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);
  return (
    <div>
      <section className="Bgmain">
        <Container>
          <Box sx={{ height: "100vh", width: "auto" }}>
            <Grid item xs={12} md={8} style={{ padding: "20px 0px" }}>
              <div style={MenuOuter}>
                <Typography style={Heading}>
                  {" "}
                  Update Current Inforamtions
                </Typography>

                <Button
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
                        value={name || ""}
                        onChange={handleInputChange}
                        type="text"
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        id="standard-email"
                        label="E-Mail"
                        type="text"
                        value={email || ""}
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
                        value={number || ""}
                        onChange={handleInputChange}
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        id="standard-addres"
                        name="address"
                        label="Address"
                        type="text"
                        value={address || ""}
                        onChange={handleInputChange}
                      />
                      <br></br>
                      <TextField
                        style={Stylinputs}
                        name="password"
                        label="Password"
                        type="password"
                        value={password || ""}
                        onChange={handleInputChange}
                      />
                      <br></br>
                      <Button
                        style={{ margin: "15px 0px" }}
                        color="primary"
                        variant="contained"
                        type="submit"
                      >
                        Update
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

export default EditeUser;
