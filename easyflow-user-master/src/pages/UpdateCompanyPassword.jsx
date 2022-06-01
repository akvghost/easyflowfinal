import axios from 'axios'
import React from 'react'
import { useState } from 'react'


import { Link } from 'react-router-dom'
export const UpdateCompanyPassword = () => {
  const [data, setData] = useState({
    email: "",
    otp: ""
  })
  function handle(e) {
    // e.preventDefault()  ;
    console.log(e.target.value)
    console.log(e.target.id)

    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    // console.log("new")
    console.log(newdata)
    // console.log("data")
    // console.log(data)


  }
  function sendotp(e) {
    console.log("iam here");
    e.preventDefault();
    setEmail()
    axios.get('http://localhost:5000/api/companies/sendotp', email)
      .then((response) => console.log(response.data))

  }
  return (
    <div>
      <h2 className="page-header">Company</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Update Profile</h4>
      <div className="container">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" onChange={(e) => handle(e)} value={data.email} />
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary" onClick={(e) => sendotp(e)}>
              Send OTP
            </button>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Enter OTP
            </label>
            <input type="text" className="form-control" id="otp" onChange={(e) => handle(e)} value={data.otp} />
          </div>
          <div className="col-12">
            <Link to="/updatecompanypass">
              <button type="submit" className="btn btn-primary">
                Verify OTP
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
