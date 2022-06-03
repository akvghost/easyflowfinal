import { useState } from 'react'
import React, { Component } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const WorkerSendRequest = () => {

  const url = "http://localhost:5000/api/workers/apply"
  const [state,setState] =useState({
    WorkerName : "",
    email:"",
    Mobile:"",
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
                        toast(response.data, {
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
        <h2 className="page-header">Worker</h2>
        <hr className="featurette-divider" />
        <h4 className="page-header">Send Request</h4>
        <div className="container">
          <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Name
              </label>
              <input type="text" name={"name"} onChange={(e) => handleChange(e)} className="form-control" id="WorkerName" value={state.WorkerName} required="" />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Mobile
              </label>
              <input type="text" name={"mobile"} onChange={(e) => handleChange(e)} className="form-control" id="Mobile" value={state.Mobile} required="" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" name={"email"} onChange={(e) => handleChange(e)} className="form-control" id="email" value={state.value} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                Work Type
              </label>
              <select id="WorkerType" name={"workerType"} onChange={(e) => handleChange(e)} className="form-select" value={state.WorkerType}>
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
              <select id="district" name={"district"} onChange={(e) => handleChange(e)} className="form-select" value={state.district}>
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
