import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
  const [registerdata, setregisterdata] = useState([]);
  const naviagte=useNavigate()

  const getregisterdatavalues = (e) => {
    const { name, value } = e.target;
    setregisterdata({ ...registerdata, [name]: value });
  };
  const handleregisterform = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerdata),
      });
      const data = await result.json();
      if (result.ok) {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        naviagte('/')
      } else {
        Swal.fire({
          icon: "error",
          text: data.message,
        });
      }
    } catch (error) {
      alert(error, "Technical Issue");
    }
  };
  return (
    <>
      <div className="login_page">
        <form className="login-part" onSubmit={handleregisterform}>
          <div className="logo"></div>
          <div className="title">Register For Banking Account </div>
          <div className="fields">
            <div className="username">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812"></path>
              </svg>
              <input
                type="text"
                className="user-input"
                placeholder="First Name"
                name="first_name"
                value={registerdata.first_name}
                onChange={getregisterdatavalues}
              />
            </div>

            <div className="username">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812"></path>
              </svg>
              <input
                type="text"
                className="user-input"
                placeholder="Last Name"
                name="last_name"
                value={registerdata.last_name}
                onChange={getregisterdatavalues}
              />
            </div>

            <div className="username">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M18,4H2C0.9,4,0,4.9,0,6v8c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C20,4.9,19.1,4,18,4z M18,6l-8,5L2,6H18z M2,14V7.2l8,5l8-5V14H2z"></path>
              </svg>

              <input
                type="email"
                className="user-input"
                placeholder="Email"
                name="email"
                value={registerdata.email}
                onChange={getregisterdatavalues}
              />
            </div>

            <div className="username">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  d="M16.7,13.1c-1-0.6-2.3-0.3-3.1,0.5l-1,1c-2.4-1.3-4.4-3.3-5.7-5.7l1-1c0.8-0.8,1-2.1,0.5-3.1L7.6,2.4
    C7.1,1.4,6,0.9,4.9,1.1c-1.4,0.3-2.5,1.3-2.9,2.6c-0.4,1.7-0.1,4.7,3.2,8.1s6.4,3.6,8.1,3.2c1.3-0.3,2.3-1.5,2.6-2.9
    C18,14,17.6,13.5,16.7,13.1z"
                ></path>
              </svg>

              <input
                type="text"
                className="user-input"
                placeholder="Phone"
                name="phone"
                value={registerdata.phone}
                onChange={getregisterdatavalues}
              />
            </div>

            <div className="username">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812"></path>
              </svg>
              <input
                type="text"
                className="user-input"
                placeholder="Username"
                name="username"
                value={registerdata.username}
                onChange={getregisterdatavalues}
              />
            </div>

            <div className="password">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
              </svg>
              <input
                type="password"
                className="pass-input"
                placeholder="Password"
                name="password"
                value={registerdata.password}
                onChange={getregisterdatavalues}
              />
            </div>
          </div>
          <button className="login-button" type="submit">
            Submit
          </button>
          <div className="link">
            Already registered? <Link to={"/"}>Login</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
