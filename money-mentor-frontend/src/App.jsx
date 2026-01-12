import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import LoanPage from './Pages/LoanPage';
import CreditScore from './Pages/CreditScore';
import TaxEstimator from './Pages/TaxEstimator';
import { Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#5B122D",
            contrastText: "#F4E1C6",
        },
        secondary: {
            main: "#5B122D",
        },
        background: {
            default: "#5B122D",
            paper: "#F4E1C6",
        },
        text: {
            primary: "#5B122D",
            secondary: "black",
        }
    },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: "#5B122D",
                        } 
                    }
            }
        }
    }
});

function App() {
    return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box sx={{minHeight: "100vh", backgroundColor: "#F4E1C6"}}>
        {/* <div> */}

          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/loanpage" element = {<LoanPage/>} />
            <Route path="/creditscore" element = {<CreditScore/>} />
            <Route path="/taxestimator" element = {<TaxEstimator/>} />
          </Routes>
        {/* </div> */}
        </Box>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App
