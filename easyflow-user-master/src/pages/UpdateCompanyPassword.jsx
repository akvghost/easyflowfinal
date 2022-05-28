import React from 'react'
import { Link } from 'react-router-dom'

export const UpdateCompanyPassword = () => {
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
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-primary">
            Send OTP
          </button>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Enter OTP
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
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
