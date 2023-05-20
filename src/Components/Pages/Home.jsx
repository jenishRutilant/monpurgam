import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Images/logo.svg"
import "../Styles/Home.css"

const Home = () => {
  return (
    <>
      {/* header-section */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-LIGHT bg-LIGHT" aria-label="Eighth navbar example">
          <div className="container-fluid">
            <Link className="navbar-brand" to="index.html"><img src={Logo} alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav navpadle text-center">
                <li className="nav-item navspace">
                  <Link className="nav-link active" to="#">Home</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#demos">demos</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#features">Features</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#support">Support</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#blog">Blog</Link>
                </li>
              </ul>
              <div className="text-center login-option">
                <Link to="#" className="buynow-Btn cBtn">Buy Now</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* header-section */}
    </>
  )
}

export default Home