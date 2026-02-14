import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import TypesofLoans from "./Pages/TypesofLoans";
import TypesofAccounts from "./Pages/TypesofAccounts";
import LoanPage from './Pages/LoanPage';
import SeparateLoanPage from './Components/LoanPage/SeparateLoanPage';
import SeparateAccountPage from './Components/AccountsPage/SeparateAccountPage';
import CreditScore from './Pages/CreditScore';
import TaxEstimator from './Pages/TaxEstimator';
import BudgetPlanner from './Pages/BudgetPlanner';
import EligibilityLoan from './Pages/Eligibilty_Loan';
import DocumentsLoan from './Pages/Documents_Loan';
import Dashboard from './Pages/Dashboard';
import Quiz from './Pages/Quiz';
import theme from "./theme.js";

function App() {
    return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box id="app-container" sx={{minHeight: "100vh", backgroundColor: 'background.paper'}}>
        

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/loanpage" element = {<LoanPage/>} />
            <Route path="/loan/eligibility" element={<EligibilityLoan/>}/>
            <Route path="/loan/documents" element={<DocumentsLoan/>}/>
            <Route path="/loan/:loanType" element={<SeperateLoanPage/>}/>       
            <Route path="/typesofloan" element = {<TypesofLoans/>} />
            <Route path="/account/:accountType" element={<SeparateAccountPage/>}/>
            <Route path="/typesofaccounts" element = {<TypesofAccounts/>} />
            <Route path="/creditscore" element = {<CreditScore/>} />
            <Route path="/taxestimator" element = {<TaxEstimator/>} />
            <Route path="/budgetplanner" element = {<BudgetPlanner/>} />
            <Route path="/dashboard" element = {<Dashboard/>} />
            <Route path="/quiz" element = {<Quiz/>} />
          </Routes>
        
        </Box>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
