import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Verifyotp = () => {
    const [otpdata,setotpdata]=useState({otp:""})
    const navigate=useNavigate()
    const handleverifyotp=async(e)=>{
        e.preventDefault()
        try {
            const result=await fetch('http://127.0.0.1:8000/verifyotp/',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body:JSON.stringify(otpdata)
            })
            const data=await result.json()
            if(result.ok){
                   Swal.fire({
                                    icon: "success",
                                    text: data.message,
                                  });
                
            }else{
                   Swal.fire({
                                    icon: "error",
                                    text: data.message,
                                  });
                navigate('/changepass')
            }
            
        } catch (error) {
              Swal.fire({
                               icon: "error",
                               text: "Technical Issue !",
                             });
            
        }
    }
  return (
    <div className='login_page'>
        <form className="login-part" onSubmit={handleverifyotp}>
            <div className="logo"></div>
            <div className="title">Verify OTP</div>
            <div className="fields">
                <div className="username">
                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812"></path>
                    </svg>
                    <input
                        type="text"
                        className="user-input"
                        placeholder="Enter OTP"
                        value={otpdata.otp}
                        onChange={(e) => setotpdata({ otp: e.target.value })}
                    />
                </div>
            </div>
            <button className="login-button" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Verifyotp