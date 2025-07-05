import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Component/Mycontext";
import Swal from "sweetalert2";

const Changepass = () => {
  const [passworddata, setpassworddata] = useState({
    password: "",
    password2: "",
  });
  const username = localStorage.getItem("login_user");
  const navigate = useNavigate();
  const { data } = useContext(MyContext);
  console.log(data);
  const handlepasswordchange = async (e) => {
    e.preventDefault();

    // if (!data?.email) {
    //     alert("Email data is missing. Please try again.");
    //     return;
    // }
    const email = data?.email;
    if (passworddata.password === passworddata.password2) {
      try {
        const result = await fetch("http://127.0.0.1:8000/changepass/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            password: passworddata.password,
            username: username || null,
            email: email || null,
          }),
        });

        const datamain = await result.json();

        if (result.ok) {
          Swal.fire({
            icon: "success",
            text: datamain.message,
          });
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            text: datamain.message,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "Password are not Match ! ",
      });
      setpassworddata((prev) => ({ ...prev, password: "", password2: "" }));
    }
  };

  return (
    <div className="login_page">
      <form className="login-part" onSubmit={handlepasswordchange}>
        <div className="logo"></div>
        <div className="title">Change Password</div>
        <div className="fields">
          <div className="password">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z"></path>
            </svg>
            <input
              type="password"
              className="pass-input"
              placeholder="Enter Password"
              value={passworddata.password}
              onChange={(e) =>
                setpassworddata((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>

          <div className="password">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z"></path>
            </svg>
            <input
              type="password"
              className="pass-input"
              placeholder="Confirm Password"
              value={passworddata.password2}
              onChange={(e) =>
                setpassworddata((prev) => ({
                  ...prev,
                  password2: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <button className="login-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Changepass;
