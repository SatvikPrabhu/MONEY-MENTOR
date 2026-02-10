import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import TypesofLoans from "./Pages/TypesofLoans";
import TypesofAccounts from "./Pages/TypesofAccounts";
import LoanPage from './Pages/LoanPage';
import SeperateLoanPage from './Components/LoanPage/SeperateLoanPage';
import SeperateAccountPage from './Components/AccountsPage /SeperateAccountPage';
import CreditScore from './Pages/CreditScore';
import TaxEstimator from './Pages/TaxEstimator';
import BudgetPlanner from './Pages/BudgetPlanner';
import EligibilityLoan from './Pages/Eligibilty_Loan';
import Dashboard from './Pages/Dashboard';

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
            fontFamily: 'Poppins, Arial, sans-serif',
        },
    palette: {
                background: {
                    default: "#F4E1C6",
                    paper: "#F4E1C6",
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                    tertiary:"#a6757a"
    
                },
                foreground: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
                },
                text: {
                    primary: "#5B122D",
                    secondary: "#F4E1C6",
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
      <Box id="app-container" sx={{minHeight: "100vh", backgroundColor: 'background.paper'}}>
        

          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/loanpage" element = {<LoanPage/>} />
            <Route path="/loan/eligibility" element={<EligibilityLoan/>}/>
            <Route path="/loan/:loanType" element={<SeperateLoanPage/>}/>       
            <Route path="/typesofloan" element = {<TypesofLoans/>} />
            <Route path="/account/:accountType" element={<SeperateAccountPage/>}/>
            <Route path="/typesofaccounts" element = {<TypesofAccounts/>} />
            <Route path="/creditscore" element = {<CreditScore/>} />
            <Route path="/taxestimator" element = {<TaxEstimator/>} />
            <Route path="/budgetplanner" element = {<BudgetPlanner/>} />
            <Route path="/dashboard" element = {<Dashboard/>} />
          </Routes>
        
        </Box>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
