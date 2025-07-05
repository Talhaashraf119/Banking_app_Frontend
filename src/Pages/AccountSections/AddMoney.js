import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddMoney = () => {
  const [addmoney,setaddmoney]=useState({})
  
    const addmoneyvalue=(e)=>{
      setaddmoney({...addmoney,[e.target.name]:e.target.value})
    }
    const handleaddmoney= async (e) => {
      e.preventDefault()
      try {
        const response = await fetch('http://127.0.0.1:8000/bankingapp/addmoney/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addmoney), // Fixed body format
        });
  
        const data = await response.json();
        if (response.ok) {
              Swal.fire({
                    icon: "success",
                    title: "Account Created Successfully",
                    html: `${data.message} <br> Current Amount: ${data.current_balance}`,
                  }); 
                  setaddmoney({account_number:"",add_amount:"",transaction_pin:""}) // Set only the user data
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
  <form className="create-account-form"onSubmit={handleaddmoney} >
    <div className="ca-logo"></div>
    <div className="ca-title">Add Money to Account</div>
    
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
          value={addmoney.account_number}
          onChange={addmoneyvalue}
          required 
        />
      </div>

      {/* Amount */}
      <div className="ca-input-group">
        <div className="ca-icon-container">
          <img src="\images\withdraw.png" alt="Amount" className="ca-input-icon" />
        </div>
        <input 
          type="number" 
          className="ca-user-input" 
          placeholder="Enter Amount" 
          name="add_amount"
          value={addmoney.add_amount}
          onChange={addmoneyvalue}
          required 
        />
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
          value={addmoney.transaction_pin}
          onChange={addmoneyvalue}
          required 
        />
      </div>
    </div>

    <button className="ca-submit-button" type="submit">Add Money</button>
    
    <div className="ca-login-link">
      Need help? <Link to="/support">Contact Support</Link>
    </div>
  </form>
</div>
  )
}

export default AddMoney