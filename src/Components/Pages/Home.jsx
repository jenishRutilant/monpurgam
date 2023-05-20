import React from 'react'
import Logo from "../Images/logo.svg"

const Home = () => {
  return (
    <>
      {/* header-part */}
      <header>
        <div className='header_top'>
          <div className='header_logo'>
            <img src={Logo} alt="logo" />
          </div>
          <div className='header_name'>
            <h4>"ભેગા થવું એ શરૂઆત છે, ભેગા રહેવું એ પ્રગતિ છે, ભેગા મળીને કાર્ય કરવું એ જ સફળતા છે." ૩૦મો સ્નેહ મિલન સમારોહ તારીખ : ૨૧-૦૫-૨૦૨૩, રવિવાર સમય
              : બપોરે ૪.૩૦ કલાકે</h4>
            <h2>શ્રી મોણપુર ગામ પ્રગતિ મંડળ</h2>
          </div>
        </div>
        <div className='header_bottom'>
          
        </div>
      </header>
      {/* header-part */}
    </>
  )
}

export default Home