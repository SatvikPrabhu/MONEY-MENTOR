import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Server not reachable");
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: '100%',
          p: 4,
          borderRadius: 3,
          backgroundColor: "#5B122D", // Deep pink background
        }}
      >
        <Typography 
          variant="h4" 
          textAlign="center"
          sx={{ 
            color: "#F4E1C6", // Pale wheat text
            mb: 3,
            fontWeight: 600,
            fontFamily: 'serif',
          }}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&:hover fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#F4E1C6",
                },
              },
              '& .MuiInputLabel-root': {
                color: "#F4E1C6", // Pale wheat label
                fontFamily: 'serif',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#F4E1C6", // Keep pale wheat when focused
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6", // Pale wheat text
                fontFamily: 'serif',
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&:hover fieldset': {
                  borderColor: "#F4E1C6",
                },
                '&.Mui-focused fieldset': {
                  borderColor: "#F4E1C6",
                },
              },
              '& .MuiInputLabel-root': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#F4E1C6", // Keep pale wheat when focused
              },
              '& .MuiInputBase-input': {
                color: "#F4E1C6",
                fontFamily: 'serif',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ 
              mt: 3,
              backgroundColor: "#F4E1C6", // Pale wheat button
              color: "#5B122D", // Deep pink text
              fontWeight: 600,
              fontFamily: 'serif',
              '&:hover': {
                backgroundColor: "#a6757a", // Tertiary color on hover
                color: "#F4E1C6",
              },
              '&:disabled': {
                backgroundColor: "#a6757a",
                color: "#F4E1C6",
                opacity: 0.5,
              }
            }}
            disabled={!username || !password}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginBox;