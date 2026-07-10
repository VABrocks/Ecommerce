import React from 'react'
import "./LoginSignUp.css"
const LogiSignUp = () => {
  return (
    <div className="SignUpContainer">

      <div className='SignUpPage'>
        Sign Up
        <input type="text" placeholder='Enter Your Name' />
        <input type="number" name="" id="" placeholder='Enter Your PhoneNumber'/>
        <input type="email" placeholder='Enter Your  Email' />
        <div className='TermsCondition'>
          <input type="checkbox" name="Terms&Condition" id="" />
          <p>
            I accept the above Terms & Conditions
          </p>

        </div>
        <button>
          Continue
        </button>
        <div>
          Already have an account <span>Login</span>
        </div>
      </div>
    </div>
  )
}

export default LogiSignUp 