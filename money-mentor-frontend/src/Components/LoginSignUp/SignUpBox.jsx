import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUpBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Signup failed");
        return;
      }

      alert("Signup successful! Redirecting to login...");
      setUsername("");
      setPassword("");
      setConfPass("");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Server not reachable");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 10,
        p: 4,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" textAlign="center" mb={2}>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPass}
          onChange={(e) => setConfPass(e.target.value)}
          margin="normal"
          error={confirmPass && password !== confirmPass}
          helperText={
            confirmPass && password !== confirmPass
              ? "Passwords don't match"
              : ""
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          disabled={!username || !password || password !== confirmPass}
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignUpBox;
