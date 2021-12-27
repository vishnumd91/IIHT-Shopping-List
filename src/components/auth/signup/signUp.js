import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../api";
import { useSharedContext } from "../../../context/SharedContext";

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
  snackbar: {
    marginBottom: theme.spacing(72),
  },
  alert: {
    backgroundColor: "lightgreen",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userName: "",
  });
  const { setSignUpStatus } = useSharedContext();

  const validateForm = () => {
    const { fullName, email, password, userName } = formData;
    if (fullName === "") {
      setFullNameErrorMessage("Full Name is required");
    } else {
      setFullNameErrorMessage("");
    }
    if (email === "") {
      setEmailErrorMessage("Email is required");
    } else {
      setEmailErrorMessage("");
    }
    if (password === "") {
      setPasswordErrorMessage("Password is required");
    } else {
      setPasswordErrorMessage("");
    }
    if (userName === "") {
      setUserNameErrorMessage("User Name is required");
    } else {
      setUserNameErrorMessage("");
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
    validateForm();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, fullName, userName } = formData;
    const userData = {
      fullName,
      email,
      password,
      userName,
    };
    validateForm();
    await axiosInstance.post("/auth/signup", userData);
    setSignUpStatus(true);
    navigate("/");
  };

  return (
    <div>
      <Container className={classes.container}>
        <Card variant="outlined" className={classes.cardContainer}>
          <CardContent>
            <Typography variant="h4" component="span">
              Sign Up
            </Typography>
          </CardContent>
          <TextField
            className={classes.textField}
            required
            error={fullNameErrorMessage ? true : false}
            helperText={fullNameErrorMessage}
            name="fullName"
            id="standard-required"
            label="Full Name"
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            required
            error={emailErrorMessage ? true : false}
            helperText={emailErrorMessage}
            name="email"
            id="standard-required"
            label="Email"
            variant="standard"
            type="email"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            required
            error={passwordErrorMessage ? true : false}
            helperText={passwordErrorMessage}
            name="password"
            id="standard-required"
            label="Password"
            variant="standard"
            type="password"
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            required
            error={userNameErrorMessage ? true : false}
            helperText={userNameErrorMessage}
            name="userName"
            id="standard-required"
            label="User Name"
            variant="standard"
            onChange={handleInputChange}
          />
          <CardActions>
            <Button
              className={classes.buttonStyle}
              variant="contained"
              size="small"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </CardActions>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="body2" component="span">
              Already have an account?Login
            </Typography>
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
