import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Link } from 'react-router-dom'

export const UpdateWorkerPassword = () => {
  const url = 'http://localhost:5000/api/workers/verifyotp'
  const [data, setData] = useState({
    email: "",
    otp: ""
  })
  const [response, setResponse] = useState({
    data: "",
    status: ""

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
    axios.post('http://localhost:5000/api/workers/sendotp', data)
    .then((res) => res)
    .then((res) => {
      response.status = res.status
      if (response.status == "200") {
        toast("Otp Successfuly Sent", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    })


  }
  const [verifydata, setVerifydata] = useState({
    email: "",
    otp:""
  })
  function handle1(e) {

    // console.log(e.target.value)
    // console.log(e.target.id)

    const newdata = { ...verifydata }
    newdata[e.target.id] = e.target.value
    setVerifydata(newdata)
    // console.log(verifydata)



  }
  
  async function verifyotp(e) {
    e.preventDefault();
    verifydata.email = data.email
    console.log(verifydata)
    try {
      await axios.post(url, verifydata)
        .then((res) => res)
        .then((res) => {
          response.status = res.status
          response.data = res.data
          if (response.status == "200") {
            toast(response.data, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          else {
            console.log(response.data)
            toast(response.data, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        })
    }catch (err) {
      toast(err.response.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
  }
             setTimeout(() => {
      checkislogin(e)
    }, 5200)

  }
  function getworkerId() {
    axios.get('http://localhost:5000/api/Workers/getworkers')
      .then((response) => response.data)
      .then((res) => {
        console.log(res)
        data.email = res
        

      })
  }
  function checkislogin(e) {
    e.preventDefault();

    console.log(response.status)
    window.location.href = "http://localhost:3000/updateworkerpass"


  }
  useEffect(() => {
    getworkerId()
  })

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
            <input type="email" className="form-control" id="email"onChange={(e) => handle(e)} value={data.email} />
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
        </form>
      </div>
    </div>
  )
}
