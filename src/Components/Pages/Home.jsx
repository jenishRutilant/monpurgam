import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Images/logo.png"
import "../Styles/Home.css"
import Carousel from 'react-bootstrap/Carousel';
import Slider from './Slider';

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
                  <Link className="nav-link active" to="#">હોમ</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#demos">અમારો પરિચય</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#features">મેમ્બર ડીરેકટરી</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#support">કમિટી મેમ્બર</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#blog">દાતાશ્રી</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#blog">પ્રાયોજક</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#blog">ઇવેન્ટ - ગેલેરી</Link>
                </li>
                <li className="nav-item navspace">
                  <Link className="nav-link" to="#blog">સંપર્ક</Link>
                </li>
              </ul>
              <div className="text-center login-option">
                <Link to="#" className="buynow-Btn cBtn">Sign IN</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* header-section */}
      <div className="lower-txt">
        <p>"ભેગા થવું એ શરૂઆત છે, ભેગા રહેવું એ પ્રગતિ છે, ભેગા મળીને કાર્ય કરવું એ જ સફળતા છે." ૩૦મો સ્નેહ મિલન સમારોહ તારીખ : ૨૧-૦૫-૨૦૨૩, રવિવાર સમય
          : બપોરે ૪.૩૦ કલાકે</p>
      </div>
      <Slider />

    </>
  )
}

export default Home