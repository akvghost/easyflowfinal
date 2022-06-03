import React from 'react'

export const UpdateAdminPass = () => {
  return (
    <div>
      <h2 className="page-header">Admin</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Update Password</h4>
      <div className="container">
        <form>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Password
            </label>
            <input type="password" name="password" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-6">
            <label htmlFor="inputEmail4" className="form-label">
              Confirm Password
            </label>
            <input type="password" name="confirmPassword" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12 my-4">

            <button type="submit" className="btn btn-primary">
              Update Password
            </button>

          </div>
        </form>
      </div>
    </div>
)}
