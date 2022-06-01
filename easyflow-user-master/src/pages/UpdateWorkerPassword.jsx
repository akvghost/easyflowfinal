import axios from 'axios'
import React from 'react'
import { useState } from 'react'


import { Link } from 'react-router-dom'

export const UpdateWorkerPassword = () => {
  const [data, setData] = useState({
    email: ""
  })
  const [verifydata, setVerifydata] = useState({
    email: "",
    otp:""
  })

  function handle(e) {

    console.log(e.target.value)
    console.log(e.target.id)

    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    
    setData(newdata)
    console.log(newdata)



  }
  function handle1(e) {

    // console.log(e.target.value)
    // console.log(e.target.id)

    const newdata = { ...verifydata }
    newdata[e.target.id] = e.target.value
    setVerifydata(newdata)
    // console.log(verifydata)



  }
  // const [email , setEmail] = useState([])
  function sendotp(e) {
    e.preventDefault();
   
    axios.post('http://localhost:5000/api/workers/sendotp', data)
      .then((response) => console.log(response.data))

  }
  const [otpres, setOtpres] = useState()
  var x ;
  function verifyotp(e) {
    e.preventDefault();
    verifydata.email = data.email
    console.log(verifydata)
    axios.post('http://localhost:5000/api/workers/verifyotp', verifydata)
       .then((response) => setOtpres(response.data))
       console.log(otpres)
  }
  return (
    <div>
      <h2 className="page-header">Worker</h2>
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
            <label htmlFor="validationCustom01" className="form-label" >
              Enter OTP
            </label>
            <input type="text" className="form-control" id="otp" onChange={(e) => handle1(e)} value={verifydata.otp} />
            
            <p >The OTP will Expire in 2 mins</p>
          </div>
          <div className="col-12">
            <Link to="/updateworkerpass">
              <button type="submit" className="btn btn-primary" onClick={(e) => verifyotp(e)}>
                Verify OTP
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
