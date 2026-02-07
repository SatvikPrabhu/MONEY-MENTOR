import React, {useState} from "react";
import { TextField, Button, Box, Typography } from '@mui/material';

function SignUpBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfPass] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const passConfirmer = (event) => {
        setConfPass(event.target.value);
    }
    

    const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.msg || "Signup failed");
      return;
    }

    alert("Signup successful! You can now log in.");
    setUsername("");
    setPassword("");
    setConfPass("");
  } catch (err) {
    console.error(err);
    alert("Server not reachable");
  }
};


    return (
            <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 3 }}>
            <Typography variant="h4" textAlign="center">Sign Up</Typography>
            <form onSubmit={handleSubmit}> 
                <TextField 
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    margin="normal"
                />
                <TextField 
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    margin="normal"
                />
                <TextField 
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={confirmPass}
                    onChange={passConfirmer}
                    margin="normal"
                    helperText={confirmPass && !(password === confirmPass) ? "Passwords don't match" : ""}
                    FormHelperTextProps={{
                        sx: { 
                            color: 'red',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Button 
                    type="submit"
                    variant="contained" 
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled = {!username || !password || (password !== confirmPass)}
                >
                    Sign Up
                </Button>
            </form>
            </Box>
    );
}

export default SignUpBox;