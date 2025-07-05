import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccountInfo = () => {
  const [accountdata, setAccountData] = useState(null); // Changed to null
  const usernamedata = localStorage.getItem("login_user");
console.log(usernamedata)
  useEffect(() => {
    const getAccountData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/bankingapp/showinfo/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: usernamedata }), // Fixed body format
        });

        const data = await response.json();
        if (response.ok) {
          setAccountData(data.data); // Set only the user data
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert("Technical Error!");
      }
    };

      getAccountData();
    
  }, []);
console.log(accountdata)
  return (
    <div className="create-account-page">
      <form className="create-account-form">
        <div className="ca-logo"></div>
        <div className="ca-title">Account Information</div>

        <div className="ca-profile-picture-container">
          <div className="ca-profile-picture">
          <img
  src={accountdata?.image ?`http://127.0.0.1:8000${accountdata.image}`:"/images/profile.png"}
  alt="User Profile"
  className="ca-profile-image"
/>
          </div>
        </div>

        {accountdata ? (
          <div className="ca-fields">
            {/* Account Holder Name */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/profile.png" alt="Name" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.username.toUpperCase().replace(/['"]+/g, '').split(' ')} readOnly />
            </div>

            {/* Account Number */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/account-pin.png" alt="Account" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.account_number || "N/A"} readOnly />
            </div>

            {/* Account Type */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/Account-type.png" alt="Type" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.account_type || "N/A"} readOnly />
            </div>

            {/* Current Balance */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/balance.png" alt="Balance" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={`Rs.${accountdata.initial_deposit || "0.00"}`} readOnly />
            </div>

            {/* Account Opening Date */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/date-of-birth.png" alt="Date" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.created_at || "N/A"} readOnly />
            </div>

            {/* Contact Information */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/phone.png" alt="Phone" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.phone_number || "N/A"} readOnly />
            </div>

            {/* Email Address */}
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="/images/email.png" alt="Email" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.email || "N/A"} readOnly />
            </div>
            <div className="ca-input-group">
              <div className="ca-icon-container">
                <img src="\images\national-id.png" alt="Email" className="ca-input-icon" />
              </div>
              <input type="text" className="ca-user-input" value={accountdata.tax_id || "N/A"} readOnly />
            </div>
          </div>
          
        ) : (
          <p>Loading account data...</p>
        )}

        <div className="ca-action-buttons">
          {/* <button className="ca-submit-button" type="button">
            Edit Profile
          </button> */}
          <div className="ca-login-link">
            <Link to="/home">← Back to Dashboard</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
