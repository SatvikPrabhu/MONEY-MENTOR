import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import SignUpBox from "../Components/LoginSignUp/SignUpBox";

function SignUp() {
    
    return (
        <Box sx={{minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",}}>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid background.primary",
                borderRadius: "2%",
                height: "500px",
                width: "400px",
                backgroundColor: "#5B122D",
                color: "#F4E1C6",
                }}>
                 <SignUpBox/>
                         <Typography sx={{ mt: 2, fontFamily: "Poppins", fontSize: "0.85rem" }}>
          Already have an account? {" "}
          <Link
            to="/login"
            style={{ color: "#F4E1C6", fontWeight: "bold" }}
          >
            Log in
          </Link>
        </Typography>
            </Box>
        </Box>
    );
}

export default SignUp;