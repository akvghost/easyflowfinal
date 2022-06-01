import { useState } from 'react'
import React, { Component } from "react";
import axios from "axios"

export  class WorkerSendRequest extends Component {
  constructor(props) {

    super(props);

    this.state = {
      name: '',
      email: '',
      mobile: '',
      workerType: '',
      city: '',
      district: '',
      area: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
   handleChange = (e) => {
    this.setState({ name: e.target.value})
    this.setState({ email: e.target.value})
    this.setState({ mobile: e.target.value})
    this.setState({ workerType: e.target.value})
    this.setState({ city: e.target.value})
    this.setState({ district: e.target.value })
    this.setState({ area: e.target.value})
  }
   handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      // name: this.state.name,
      // email: this.state.email,
      // mobile: this.state.mobile,
      workerType: this.state.workerType,
      city: this.state.city,
      district: this.state.district,
      area: this.state.area
    }
    console.log(user)
    console.log(user.workerType)
    // add here the path where you want to save these details
    // axios.post('http://localhost:5000/api/workers/apply', user)
    //      .then((response) => response.data)
    //      .catch((err) => console.log(err))
         
  }
  render() {
  return (
    
    <div>
      <h2 className="page-header">Worker</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Send Request</h4>
      <div className="container">
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input type="text" name={"name"} onChange={(e )=>{this.setState({name:e.target.value})}} className="form-control" id="validationCustom01" required=""/>
            <div class="valid-feedback">
      Looks good!
    </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Mobile
            </label>
            <input type="text" name={"mobile"} onChange={(e )=>{this.setState({mobile:e.target.value})}} className="form-control" id="validationCustom01" required="" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" name={"email"} onChange={(e )=>{this.setState({email:e.target.value})}} className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">
              Work Type
            </label>
            <select id="inputState" name={"workerType"} onChange={(e )=>{this.setState({workerType:e.target.value})}} className="form-select">
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
            <select id="inputState" name={"city"} onChange={(e )=>{this.setState({city:e.target.value})}} className="form-select">
              <option selected="">Select</option>
              <option>Lucknow</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              District
            </label>
            <select id="inputState" name={"district"} onChange={(e )=>{this.setState({district:e.target.value})}} className="form-select">
              <option selected="">Select</option>
              <option>Lucknow</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Area
            </label>
            <select id="inputState" name={"area"} onChange={(e )=>{this.setState({area:e.target.value})}} className="form-select">
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
        </form>

      </div>
    </div>
  )
}
}