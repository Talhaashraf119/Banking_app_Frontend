import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/transaction.css";
const Transactions = () => {
  const [transactiondata, settransactiondata] = useState([]);
  const [filterdata, setfilterdata] = useState("");
  const username=localStorage.getItem('login_user')
  const transactiondatainfo = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/transactionapp/history/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username}),
      });
      const data = await response.json();
      if (response.ok) {
        settransactiondata(data.data)
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error, "Technical Error !");
    }
  };
  useEffect(()=>{
    transactiondatainfo()
  },[])

  const filtertransaction=filterdata ? transactiondata.filter((transaction)=>transaction.transaction_type===filterdata):
  transactiondata
  return (
    <div className="create-account-page">
      <form className="create-account-form" >
        <div className="ca-logo"></div>
        <div className="ca-title">Transaction History</div>
        <div className="ca-filters">
          <div className="ca-input-group" style={{ flex: "1" }}>
            <div className="ca-icon-container">
              <img
                src="\images\filter.png"
                alt="Filter"
                className="ca-input-icon"
              />
            </div>
            <select
              onChange={(e) => setfilterdata(e.target.value)}
              className="ca-user-input"
              name="transaction_type"
            >
              <option value="">All Transactions</option>
              <option value="deposit">Deposits</option>
              <option value="withdrawal">Withdrawals</option>
              <option value="transfer">Transfers</option>
            </select>
          </div>
        </div>

        {/* Transactions List */}
        <div className="ca-transactions-list">
        {filtertransaction.length > 0 ? (
          filtertransaction.map((transaction, index) => (
              <div key={index} className="ca-transaction-item">
                <div className="ca-transaction-icon">
                  <img src={transaction.transaction_type === 'deposit' ? "/images/withdraw.png" : "/images/withdrawmoney.png"}
 alt="Transaction Icon" />
                </div>
                <div className="ca-transaction-details">
                  <div className="ca-transaction-header">
                    <span className="ca-transaction-title">
                      {transaction.transaction_type}
                    </span>
                    <span className="ca-transaction-amount credit">
                     Rs.{transaction.amount}
                    </span>
                  </div>
                  <div className="ca-transaction-meta">
                    <span className="ca-transaction-date">
                      {transaction.timestamp}
                    </span>
                    <span className="ca-transaction-status completed">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No transactions found</p> // ✅ Show message if empty
          )}
        </div>


        <div className="ca-login-link">
          <Link to="/home">← Back to Dashboard</Link>
        </div>
      </form>
    </div>
  );
};

export default Transactions;
