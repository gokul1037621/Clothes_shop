import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  logOutUser,
  signinUser,
  signupUser,
} from "../../redux/user/signupAction";
import axios from "axios";
import { clearCart } from "../../redux/cart/cart.action";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curUser = useSelector((state) => state.user.current_user);
  // const cartStuff = useSelector((state) => state.cart.cartItems);
  console.log(curUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    // cartStuff.forEach((val) => {
    //   dispatch(removeItem(val));
    // });
    dispatch(clearCart())
    if (curUser != null) {
      dispatch(logOutUser(curUser));
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const newUser = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const logInResponse = axios
      .post("http://localhost:8085/user/login", newUser)
      .then((response) => {
        console.log(response.data);
        var x = JSON.parse(JSON.stringify(response.data));
        console.log(x.includes("Successfully logged in"));
        if (x.includes("Successfully logged in")) {
          alert("logged in successfully");
          dispatch(signinUser(newUser));
          var finalValues = x.split('=')
          newUser["username"]=finalValues[3].split(',')[0]
          navigate("/home")
        } else {
          alert("log in failed");
          dispatch(logOutUser(newUser));
        }
      });
    console.log(logInResponse);
    
  };

  //axios.get(sign up user)
  //springboot in background
  //axios to manage connections
  //only sign up or login to receiv tokens

  const handleSignUp = (event) => {
    event.preventDefault();
    dispatch(clearCart())
    const data = new FormData(event.currentTarget);
    console.log(data);
    const newUser = {
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
      user_id: Math.floor(Math.random() * 100000),
    };
    const { signUpResponse } = axios.post(
      "http://localhost:8085/user/registration",
      newUser
    );
    console.log(signUpResponse);
    dispatch(signupUser(newUser));
    alert("logged in as new user");
    navigate("/home")
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} md={6}>
        {/* <ThemeProvider theme={defaultTheme}> */}
        <Container component="main" maxWidth="xs">
          {/* <CssBaseline /> */}
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5">
              I already have an account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", backgroundColor: "white" },
                }}
              >
                Sign In
              </Button>
              {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
        </Container>
        {/* </ThemeProvider> */}
      </Grid>
      <Grid item xs={2} md={6}>
        {/* <ThemeProvider theme={defaultTheme}> */}
        <Container component="main" maxWidth="xs">
          {/* <CssBaseline /> */}
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography component="h1" variant="h5" fontFamily="helvetica">
              I dont have an account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSignUp}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Name"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "black",
                  color: "white",
                  ":hover": { color: "black", backgroundColor: "white" },
                }}
                on
              >
                Sign Up
              </Button>
              {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
        </Container>
        {/* </ThemeProvider> */}
      </Grid>
    </Grid>
  );
}
