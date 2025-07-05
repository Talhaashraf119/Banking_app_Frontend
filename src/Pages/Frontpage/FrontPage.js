import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FrontPage.css"; // Import CSS for styling

const FrontPage = () => {
  const naviagate=useNavigate()

  const logoutfunctionality=()=>{
    localStorage.clear()
    naviagate('/')
  }
  return (
    <div className="dashboard-page">
    {/* Navbar */}
    <nav className="navbar">
      <div className="logo"></div>
      
      
      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search transactions..." 
        />
      </div>
  
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li ><button onClick={logoutfunctionality} className="logout-btn"> Logout</button></li>
      </ul>
    </nav>
  

      {/* Cards Section */}
      <div className="card-container">
  {/* <!-- Account Information Card --> */}
  <Link to="/createaccount" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </div>
    <h3>Create Account</h3>
    <p>Create your banking account</p>
  </Link>

  {/* Account Information Card */}
  <Link to="/accountinfo" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </div>
    <h3>Account Information</h3>
    <p>View and manage your account details.</p>
  </Link>

  {/* Money Withdraw Card */}
  <Link to="/withdraw" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H7v-2h4V6h2v4h4v2h-4v4z"/>
      </svg>
    </div>
    <h3>Money Withdraw</h3>
    <p>Securely withdraw money from your account.</p>
  </Link>

  {/* Money Add Card */}
  <Link to="/addmoney" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    </div>
    <h3>Money Add</h3>
    <p>Deposit money to your account easily.</p>
  </Link>

  {/* Transaction History Card */}
  <Link to="/transaction" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    </div>
    <h3>Transaction History</h3>
    <p>View all your past transactions.</p>
  </Link>

  {/* Change Password Card */}
  <Link to="/changepass" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
    </div>
    <h3>Change Password</h3>
    <p>Update your account security settings.</p>
  </Link>

  {/* Apply for Loan Card */}
  <Link to="/applyloan" className="card">
    <div className="card-icon">
      <svg viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    </div>
    <h3>Apply for Loan</h3>
    <p>Get financial support with easy loan options.</p>
  </Link>
</div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Banking App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FrontPage;
