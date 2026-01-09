import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import LoanPage from './Pages/LoanPage';
import CreditScore from './Pages/CreditScore';
import TaxEstimator from './Pages/TaxEstimator';
import { Button } from "@mui/material";
import { Box } from "@mui/material";

function App() {
    return (
    <BrowserRouter>
    <Box sx={{minHeight: "100vh", backgroundColor: "#F4E1C6"}}>
      <div>
        <Header> 
          
        </Header>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/loanpage" element = {<LoanPage/>} />
          <Route path="/creditscore" element = {<CreditScore/>} />
          <Route path="/taxestimator" element = {<TaxEstimator/>} />
        </Routes>
      </div>
      </Box>
    </BrowserRouter>
  );
}

export default App
