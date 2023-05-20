import React, { useState } from 'react'
import "../Styles/Login.css"
import logo from "../Images/logo.svg"

const Login = () => {

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailOrMobile === "" || password === "") {
      setError("Id and Password are required");
    }

    else if ((emailOrMobile === "Jenish" && password === "123") || (emailOrMobile === "Rihil" && password === "1234")) {
      window.location.href = "/home"
    }

    else {
      alert("Wrong");
    }
  };
  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmailOrMobile(value);
    setError("");
  };

  const navigateHome = () => {
    window.open("https://www.cricbuzz.com/");
    window.location.href="/home"
  };
  return (
    <>
      <div id="modal_overlay">
        <div className="cell">
          <div className="modal_main">
            <img src={logo} alt="logo" />
            <div className='login_modal'>
              <form onSubmit={handleSubmit}>
                <div className="flex-start">
                  <label htmlFor="exampleInputPhone" className="form-label">Family ID</label>
                  <input type="text" value={emailOrMobile} onChange={handleInputChange} />
                </div>
                <div className="flex-start">
                  <label htmlFor="exampleInputPAssword" className="form-label">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="loginbtn-part">
                  <button className="loginbtn lrBtn" type="submit">Login</button>
                  <button className="regibtn lrBtn" type="submit" onClick={navigateHome}>Register</button>
                </div>
                {error && <div className='login_error'>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login