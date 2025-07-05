import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/ac.css";
import Swal from "sweetalert2";
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone_number: "",
    account_type: "savings",
    date_of_birth: "",
    national_id: "",
    address: "",
    occupation: "",
    monthly_income: "",
    tax_id: "",
    initial_deposit: "",
    transaction_pin: "",
    security_question: "",
    security_answer: "",
    password: "",
  });
  const [imagedata, setimagedata] = useState(null);
  const navigate=useNavigate()
  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleimage = (e) => {
    const image = e.target.files[0];
    if (image) {
      setimagedata(image);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdatatosend = new FormData();

    for (const key in formData) {
      formdatatosend.append(key, formData[key]);
    }
    if (imagedata) {
      formdatatosend.append("image", imagedata);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/bankingapp/create/", {
        method: "POST",

        body: formdatatosend,
      });
      console.log(response.data);
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Account Created Successfully",
          html: `${data.message} <br> Account Number: ${data.account_number}`,
        });
        navigate('/home')
      }
       else {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
        console.log(response.data);

      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error,
      });
    }
  };

  return (
    <div className="create-account-page">
      <form className="create-account-form" onSubmit={handleSubmit}>
        <div className="ca-logo"></div>
        <div className="ca-title">Register For Banking Account</div>
        <div className="ca-profile-picture-container">
          <div className="ca-profile-picture">
            <img
              src="\images\profile.png"
              alt="Profile Preview"
              className="ca-profile-image"
            />
            <div className="ca-profile-overlay">
              <label htmlFor="profile-upload" className="ca-upload-button">
                <img
                  src="\images\upload.png"
                  alt="Upload"
                  className="ca-upload-icon"
                />
              </label>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                className="ca-file-input"
                onChange={handleimage}
              />
            </div>
          </div>
        </div>

        <div className="ca-fields">
          {/* First Name */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\username-first-name.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\username-first-name.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Username */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\username.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\email.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="email"
              className="user-input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\phone.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Phone"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>

          {/* Account Type */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\Account-type.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <select
              name="account_type"
              value={formData.account_type}
              onChange={handleChange}
              className="user-input"
            >
              <option value="savings">Savings Account</option>
              <option value="current">Current Account</option>
              <option value="business">Business Account</option>
              <option value="fixed">Fixed Deposit</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\date-of-birth.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="date"
              className="user-input"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </div>

          {/* National ID */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\national-id.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="National ID"
              name="national_id"
              value={formData.national_id}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\Address.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              className="user-input"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></input>
          </div>

          {/* Occupation */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\occuption.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          {/* Monthly Income */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\income.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="number"
              className="user-input"
              placeholder="Monthly Income"
              name="monthly_income"
              value={formData.monthly_income}
              onChange={handleChange}
            />
          </div>

          {/* Tax ID */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\national-id.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Tax ID (Optional)"
              name="tax_id"
              value={formData.tax_id}
              onChange={handleChange}
            />
          </div>

          {/* Initial Deposit */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\withdraw.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="number"
              className="user-input"
              placeholder="Initial Deposit"
              name="initial_deposit"
              value={formData.initial_deposit}
              onChange={handleChange}
              required
            />
          </div>

          {/* Transaction PIN */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\account-pin.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="password"
              className="pass-input"
              placeholder="Transaction PIN (6 digits)"
              name="transaction_pin"
              value={formData.transaction_pin}
              onChange={handleChange}
              required
            />
          </div>

          {/* Security Question */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\question.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Security Question"
              name="security_question"
              value={formData.security_question}
              onChange={handleChange}
              required
            />
          </div>

          {/* Security Answer */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\answer.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="text"
              className="user-input"
              placeholder="Security Answer"
              name="security_answer"
              value={formData.security_answer}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="ca-input-group">
            <div className="ca-icon-container">
              <img
                src="\images\password.png"
                alt="First Name"
                className="ca-input-icon"
              />
            </div>
            <input
              type="password"
              className="pass-input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button className="login-button" type="submit">
          Submit
        </button>
        <div className="link">
          Already registered? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
