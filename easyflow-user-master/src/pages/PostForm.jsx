import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function PostForm(){
  var state = {
    password: '',
    email: '',
  }
  const handleChange = (e) => {
    this.setState({ password: e.target.value})
    this.setState({ email: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      password: this.state.password,
      email: this.state.email
    }
    // add here the path where you want to save these details
    axios.post('', user)
         .then((response) => response.data)
         .catch((err) => console.log(err))
  }
    return(
        <div>
<form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
       
    )
}
export default PostForm