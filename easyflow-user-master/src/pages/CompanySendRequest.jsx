import React, { Component, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export const CompanySendRequest = () =>  {
 
  const url = "http://localhost:5000/api/companies/request"
const [state,setState] =useState({
  CompanyName : "",
  email:"",
  Vacancy:"",
  WorkerType:"",
  city:"",
  district:"",
  Location:""
})
const [response, setResponse] = useState({
  data: "",
  status: ""

})
  const handleChange = (e) => {
  //  setState({ CompanyName: e.target.value})
  //  setState({ email: e.target.value})
  //  setState({ Vacancy: e.target.value})
  //  setState({ WorkerType: e.target.value})
  //  setState({ city: e.target.value})
  //  setState({ district: e.target.value })
  //  setState({ Location: e.target.value})
  const newdata = { ...state }
   console.log(e.target.value)
        console.log(e.target.id)
        newdata[e.target.id] = e.target.value
        setState(newdata)
  }

    // add here the path where you want to save these details
    const handleSubmit = async (e) => {
      e.preventDefault()
    console.log(state)
      try {
          await axios.post(url, state)
              .then((res) => res)
              .then((res) => {
  
                  response.status = res.status
                  response.data = res.data
                  console.log(response.data)
                  console.log(response.status)
                  if ( response.status == "200") {
                      toast("Login Successful", {
                          position: "bottom-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                      });
                      setTimeout(() => {
                          this.checkislogin(e)
                      }, 5200)
                  }
  
              })
      }
      catch (err) { console.log(err)
          toast(err.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      }); }
     
  
  
  
  }
  
  return (
    <div>
      <h2 className="page-header">Company</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Send Request</h4>
      <div className="container">
        <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="text" name={"name"} onChange={(e) => handleChange(e)} className="form-control" id="CompanyName" value={state.CompanyName} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Vacany
            </label>
            <input type="text" name={"vacany"} onChange={(e) => handleChange(e)} className="form-control" id="Vacancy" value={state.Vacancy} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" name={"email"} onChange={(e) => handleChange(e)} className="form-control" id="email" value={state.email} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Work Type
            </label>
            <select id="WorkerType" name={"workType"} onChange={(e) => handleChange(e)} className="form-select"  value={state.WorkerType}>
              <option selected="">Select</option>
              <option>Carpenter</option>
              <option>Labour</option>
              <option>Maison</option>
              <option>Painter</option>
              <option>Plumber</option>
              </select>
          </div>
          <hr className="featurette-divider" />
          <h5>Preffered Location</h5>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              City
            </label>
            <select id="city" name={"city"} onChange={(e) => handleChange(e)} className="form-select" value={state.city}>
              <option selected="">Select</option>
              <option>Lucknow</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              District
            </label>
            <select id="district" name={"city"} onChange={(e) => handleChange(e)} className="form-select" value={state.district}>
              <option selected="">Select</option>
              <option>Lucknow</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Area
            </label>
            <select id="Location" name={"area"} onChange={(e) => handleChange(e)} className="form-select" value={state.Location}>
              <option selected="">Select</option>
              <option>Aashiyana</option>
              <option>Aishbagh</option>
              <option>Amar Saheed Path</option>
              <option>Alambagh</option>
              <option>Aliganj</option>
              <option>Anand Nagar</option>
              <option>Amausi</option>
              <option>Aminaabad</option>
              <option>Balaganj</option>
              <option>Banthara</option>
              <option>Bakshi ka Talab</option>
              <option>Bijnaur</option>
              <option>Butler Colony</option>
              <option>Charbagh</option>
              <option>Chinhat</option>
              <option>Civil Lines</option>
              <option>Daliganj</option>
              <option>Gomti Nagar</option>
              <option>Hazaratganj</option>
              <option>Hussainganj</option>
              <option>IIM Road</option>
              <option>Indira Nagar</option>
              <option>Jal Vayu Vihar</option>
              <option>Jankipuram</option>
              <option>Kanpur Road</option>
              <option>Kursi Road</option>
              <option>Lalbagh</option>
              <option>Lucknow Cantonment</option>
              <option>Mahanagar</option>
              <option>Nirala Nagar</option>
              <option>Nishatganj</option>
              <option>Rajajipuram</option>
              <option>Rajendra Nagar</option>
              <option>Ruchi Khand</option>
              <option>Sapru Marg</option>
              <option>Sarojini Nagar</option>
              <option>Singar Nagar</option>
              <option>South City</option>
              <option>Telibagh</option>
              <option>Utrethiya</option>
              <option>Vibhuti Khand</option>
              <option>Vrindavan Yojana</option>


            </select>
          </div>
          <div className="col-12 my-4">
            <button type="submit" className="btn btn-primary">
              Send Request
            </button>
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

