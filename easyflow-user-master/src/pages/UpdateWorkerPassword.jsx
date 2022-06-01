import axios from 'axios'
import React from 'react'
import {useState} from 'react' 


import { Link } from 'react-router-dom'

export const UpdateWorkerPassword = () => {
  const [data, setData] = useState({
    email: ""
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
    function sendotp(e){
        console.log("iam here");
        e.preventDefault()  ;
        setEmail()
        axios.get('http://localhost:5000/api/workers/sendotp',email)
            .then((response) => console.log(response.data))
            
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
            <input type="email" className="form-control" id="mail" onChange={(e) => handle(e)} value={data.email}/>
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary" onClick={(e) => sendotp(e)}>
              Send OTP
            </button>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label" id="otp">
              Enter OTP
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <Link to="/updateworkerpass">
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
