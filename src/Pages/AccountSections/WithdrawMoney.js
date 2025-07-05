import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const WithdrawMoney = () => {
  const [transactiondata,settransactiondata]=useState({})

  const transactionvalues=(e)=>{
    settransactiondata({...transactiondata,[e.target.name]:e.target.value})
  }
  const handletransaction= async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://127.0.0.1:8000/bankingapp/withdrawmoney/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactiondata), // Fixed body format
      });

      const data = await response.json();
      if (response.ok) {
            Swal.fire({
                  icon: "success",
                  title: "Account Created Successfully",
                  html: `${data.message} <br> Remaining Amount: ${data.remaining_balance}`,
                }); 
                settransactiondata({account_number:"",draw_amount:"",transaction_pin:""}) // Set only the user data
      } else {
        Swal.fire({
          icon: "error",
          title: data.message
        });
      }
    } catch (error) {
      alert("Technical Error!");
    }
  };
  return (
    <div className="create-account-page">
  <form className="create-account-form" onSubmit={handletransaction} >
    <div className="ca-logo"></div>
    <div className="ca-title">Withdraw Money from Account</div>
    
    <div className="ca-fields">
      {/* Account Number */}
      <div className="ca-input-group">
        <div className="ca-icon-container">
          <img src="\images\account-pin.png" alt="Account" className="ca-input-icon" />
        </div>
        <input 
          type="text" 
          className="ca-user-input" 
          placeholder="Account Number" 
          name="account_number"
          value={transactiondata.account_number}
          onChange={transactionvalues}
          required 
        />
      </div>

      {/* Withdrawal Amount */}
      <div className="ca-input-group">
        <div className="ca-icon-container">
          <img src="\images\withdrawmoney.png" alt="Amount" className="ca-input-icon" />
        </div>
        <input 
          type="number" 
          className="ca-user-input" 
          placeholder="Withdrawal Amount" 
          name="draw_amount"
          value={transactiondata.draw_amount}
          onChange={transactionvalues}
          required 
        />
      </div>

      {/* Withdrawal Method */}
      <div className="ca-input-group">
        <div className="ca-icon-container">
          <img src="\images\account-type.png" alt="Method" className="ca-input-icon" />
        </div>
        <select className="ca-user-input" name="withdrawal_method" required>
          <option value="">Select Withdrawal Method</option>
          <option value="bank_transfer">Bank Transfer</option>
          <option value="cash_pickup">Cash Pickup</option>
          <option value="mobile_wallet">Mobile Wallet</option>
        </select>
      </div>

      {/* Transaction PIN */}
      <div className="ca-input-group">
        <div className="ca-icon-container">
          <img src="\images\account-pin.png" alt="PIN" className="ca-input-icon" />
        </div>
        <input 
          type="password" 
          className="ca-pass-input" 
          placeholder="Transaction PIN" 
          name="transaction_pin"
   
          value={transactiondata.transaction_pin}
          onChange={transactionvalues}
          required 
        />
      </div>
    </div>

    <button className="ca-submit-button" type="submit">Withdraw Money</button>
    
    <div className="ca-login-link">
      Transaction limit: <strong>Rs.5000/day</strong> <span style={{color: '#02c8db'}}>•</span> <Link to="/limit-info">View Details</Link>
    </div>
  </form>
</div>
  )
}

export default WithdrawMoney