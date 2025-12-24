import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";

function App() {
    return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <br/>
          <Link to="/signup">SignUp</Link>
        </nav>

        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
