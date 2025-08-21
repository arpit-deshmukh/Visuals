import React from "react";
import { AuthContext } from "../../contexts/AuthContext";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
} from "@mui/material";



export default function SignInCard() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {

        let result = await handleLogin(username,password);


      }
      if (formState === 1) {
        let result = await handleRegister(name,username,password);
        console.log(result);
        setName("")
        setUsername("")
        setPassword("")
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        

      }
    } catch (err) {
      let message = (err.response.data.message);
      setError(message);
    }
  };



  const handleClose = (event, reason) => {
    if (reason === "clickaway") return; // ignore if user clicks away
    setOpen(false);
  };
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <div className="signUpText">
          <Button
            variant={formState === 0 ? "contained" : ""}
            onClick={() => {
              setFormState(0);
            }}
          >
            Sign IN
          </Button>
          <Button
            variant={formState === 1 ? "contained" : ""}
            onClick={() => {
              setFormState(1);
            }}
          >
            Register
          </Button>
        </div>
        <br />
        <Stack spacing={2}>
          
          {formState == 1 ? (
            <TextField
              label="Name"
              placeholder="Name"
              fullWidth
              value={name}
              required
              onChange={(e) => setName(e.target.value)}

            />
          ) : (
            ""
          )}
          <TextField
            label="username"
            placeholder="username"
            required
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="password"
            placeholder="password"
            type="password"
            value={password}
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Button variant="contained" fullWidth>
            Login
          </Button> */}
          <p style={{color:"red"}}>{error}</p>
          <Button variant="contained" fullWidth onClick={handleAuth} >
            {formState === 0 ? "Login" : "Register"}
            
          </Button>
        </Stack>
        <Snackbar
          open = {open}
          autoHideDuration = {4000}
          onClose={handleClose}
          message={message}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}

        
        />
          
        
      </CardContent>
    </Card>
  );
}
