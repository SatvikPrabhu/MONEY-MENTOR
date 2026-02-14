import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import LoginBox from "../Components/LoginSignUp/LoginBox";
function Login() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.secondary',
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #5B122D",
          borderRadius: "2%",
          height: "500px",
          width: "400px",
          backgroundColor: "#5B122D",
          color: "#F4E1C6",
        }}
      >
        <LoginBox />
        <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "0.85rem" }}>
          Haven't made an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#F4E1C6", fontWeight: "bold" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
