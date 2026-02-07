import Box from "@mui/material/Box";
import LoginBox from "../Components/LoginSignUp/LoginBox";
function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
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
      </Box>
    </Box>
  );
}

export default Login;
