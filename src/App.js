import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Resetpass from "./Pages/ResetPass/Resetpass";
import Verifyotp from "./Pages/ResetPass/Verifyotp";
import Changepass from "./Pages/ResetPass/Changepass";
import FrontPage from "./Pages/Frontpage/FrontPage";
import AccountInfo from "./Pages/AccountSections/AccountInfo";
import AddMoney from "./Pages/AccountSections/AddMoney";
import ApplyLoan from "./Pages/AccountSections/ApplyLoan";
import CreateAccount from "./Pages/AccountSections/CreateAccount";
import Transactions from "./Pages/AccountSections/Transactions";
import WithdrawMoney from "./Pages/AccountSections/WithdrawMoney";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
// import './App.css'

function App() {
  const isAuthenticated=()=>{
    return localStorage.getItem('access_token')!==null
  }
  const ProtectedRoute=({children})=>{
    return isAuthenticated() ? children :<Navigate to="/" />
  }
  return (
    <>
    
    <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpass" element={<Resetpass />} />
            <Route path="/verifyotp" element={<Verifyotp />} />
            <Route path="/changepass" element={<Changepass />} />

            {/* Protected Routes */}
            <Route path="/home" element={<ProtectedRoute><FrontPage /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/service" element={<ProtectedRoute><Service /></ProtectedRoute>} />
            <Route path="/accountinfo" element={<ProtectedRoute><AccountInfo /></ProtectedRoute>} />
            <Route path="/addmoney" element={<ProtectedRoute><AddMoney /></ProtectedRoute>} />
            <Route path="/applyloan" element={<ProtectedRoute><ApplyLoan /></ProtectedRoute>} />
            <Route path="/createaccount" element={<ProtectedRoute><CreateAccount /></ProtectedRoute>} />
            <Route path="/transaction" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
            <Route path="/withdraw" element={<ProtectedRoute><WithdrawMoney /></ProtectedRoute>} />
        </Routes>
    </>
  );
}

export default App;
