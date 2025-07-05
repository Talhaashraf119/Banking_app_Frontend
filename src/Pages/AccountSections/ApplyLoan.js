import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/applyforloan.css'
const ApplyLoan = () => {
  return (
    <div className="create-account-page">
    <form className="create-account-form">
      <div className="ca-logo"></div>
      <div className="ca-title">Loan Application</div>
      
      <div className="ca-fields">
        {/* Loan Type */}
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\loan.png" alt="Loan Type" className="ca-input-icon" />
          </div>
          <select className="ca-user-input" name="loan_type" required>
            <option value="">Select Loan Type</option>
            <option value="personal">Personal Loan</option>
            <option value="mortgage">Mortgage</option>
            <option value="business">Business Loan</option>
            <option value="education">Education Loan</option>
          </select>
        </div>
  
        {/* Loan Amount */}
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\balance.png" alt="Amount" className="ca-input-icon" />
          </div>
          <input 
            type="number" 
            className="ca-user-input" 
            placeholder="Requested Loan Amount" 
            name="loan_amount"
            required 
          />
        </div>
  
        {/* Loan Duration */}
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\date-of-birth.png" alt="Duration" className="ca-input-icon" />
          </div>
          <select className="ca-user-input" name="loan_duration" required>
            <option value="">Repayment Period</option>
            <option value="12">12 Months</option>
            <option value="24">24 Months</option>
            <option value="36">36 Months</option>
            <option value="60">60 Months</option>
          </select>
        </div>
  
        {/* Purpose of Loan */}
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\purpose.png" alt="Purpose" className="ca-input-icon" />
          </div>
          <input 
            className="ca-user-input textarea" 
            placeholder="Loan Purpose Description" 
            name="purpose"
            required
          ></input>
        </div>
  
        {/* Employment Information */}
        <div className="ca-section-header">
          <img src="\images\employment.png" alt="Employment" />
          <h3>Employment Details</h3>
        </div>
        
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\company.png" alt="Company" className="ca-input-icon" />
          </div>
          <input 
            type="text" 
            className="ca-user-input" 
            placeholder="Current Employer" 
            name="employer"
            required 
          />
        </div>
  
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\job-position.png" alt="Position" className="ca-input-icon" />
          </div>
          <input 
            type="text" 
            className="ca-user-input" 
            placeholder="Job Position" 
            name="position"
            required 
          />
        </div>
  
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\income.png" alt="Income" className="ca-input-icon" />
          </div>
          <input 
            type="number" 
            className="ca-user-input" 
            placeholder="Monthly Income" 
            name="monthly_income"
            required 
          />
        </div>
  
        {/* Collateral Details */}
        <div className="ca-section-header">
          <img src="\images\collateral.png" alt="Collateral" />
          <h3>Collateral Information</h3>
        </div>
  
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\collateral-doc.png" alt="Collateral" className="ca-input-icon" />
          </div>
          <input 
            type="text" 
            className="ca-user-input" 
            placeholder="Collateral Description" 
            name="collateral"
            required 
          />
        </div>
  
        <div className="ca-input-group">
          <div className="ca-icon-container">
            <img src="\images\document.png" alt="Document" className="ca-input-icon" />
          </div>
          <input 
            type="file" 
            className="ca-user-input" 
            accept=".pdf,.doc,.docx" 
            name="document"
            required 
          />
        </div>
      </div>
  
      {/* Terms Agreement */}
      <div className="ca-terms-group">
        <label className="ca-checkbox">
          <input type="checkbox" required />
          <span className="ca-checkmark"></span>
          I agree to the <Link to="/terms">terms and conditions</Link>
        </label>
      </div>
  
      <button className="ca-submit-button" type="submit">Submit Application</button>
      
      <div className="ca-login-link">
        <Link to="/home">← Back to Dashboard</Link>
      </div>
    </form>
  </div>
  )
}

export default ApplyLoan