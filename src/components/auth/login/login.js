import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  CardActions,
  Button,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { axiosInstance } from "../../../api";
import { useSharedContext } from "../../../context/SharedContext";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50vw",
    margin: "auto",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  cardContainer: {
    width: "70%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(12),
    margin: "auto",
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  textField: {
    margin: theme.spacing(1),
    whiteSpace: "pre",
  },
  buttonStyle: {
    margin: theme.spacing(1.5),
    padding: theme.spacing(1),
    marginLeft: "0",
  },
}));

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const classes = useStyles();
  const { signUpStatus, setSignUpStatus } = useSharedContext();
  const alertState = {
    vertical: "top",
    horizontal: "center",
  };
  const { vertical, horizontal } = alertState;

  const handleChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const loginReq = await axiosInstance.post("auth/login", formData);
      if (loginReq.status === 201) {
        localStorage.setItem("accessToken", loginReq.data?.accessToken);
        localStorage.setItem("userName", loginReq.data?.userName);
        navigate("/displayItems");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <div>
      {signUpStatus && (
        <Snackbar
          open={signUpStatus}
          autoHideDuration={3000}
          onClose={() => setSignUpStatus(false)}
          className={classes.snackbar}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={() => setSignUpStatus(!signUpStatus)}
            severity="success"
            sx={{ width: "100%" }}
            className={classes.alert}
            variant="filled"
          >
            User Registered Successfully! Please Login
          </Alert>
        </Snackbar>
      )}

      <Container className={classes.container}>
        <Card variant="outlined" className={classes.cardContainer}>
          <CardContent>
            <Typography variant="h4" component="span">
              Login
            </Typography>
          </CardContent>
          <TextField
            className={classes.textField}
            required
            id="standard-required"
            label="Username or Email"
            variant="standard"
            name="userName"
            onChange={handleChange}
          />
          <TextField
            className={classes.textField}
            required
            id="standard-required"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <CardActions>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              size="small"
              color="primary"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
          </CardActions>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Typography variant="body2" component="span">
              Don't have an account? Sign up here!
            </Typography>
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
