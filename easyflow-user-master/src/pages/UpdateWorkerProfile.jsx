import React, {useEffect} from 'react'
import axios from 'axios'
// add the path below where you want to update worker
const url = ""
export const UpdateWorkerProfile = (props) => {
  props.state = {
    name: '',
    email: '',
    mobile: '',
    aadhar: '',
    workType: '',
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
  })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.id){
      updateRecord()
    }else{
      console.log("No Record found!")
    }
  }
  const getCompanyId = () => {
    const { id } = this.state
        const comapnyId = url + id
        console.log(comapnyId)
        axios.get(comapnyId)
            .then((res) => res.json())
            .then((results) => {
                if(results){
                    this.setState({
                      name: results.name,
                      email: results.email,
                      mobile: results.mobile,
                      aadhar: results.aadhar,
                      workType: results.workType,
                    });
                }else{
                    alert("No Record Fount!")
                }
            }
            )
  }
  const updateRecord = () => {
    let head = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      aadhar: this.state.aadhar,
      workType: this.state.workType,
  }
  const baseUrl = url + this.state.id
  console.log(baseUrl)
  axios.post(baseUrl, head)
      .then((res) => {
          return res.json()
      })
      .then((results) => {
          if(results){
              alert("company Updated Successfully!")
          }
      })
      .catch((error) => {
          alert("Can not update company, there is an error")
          console.log(error)
      })
  }
  useEffect(() => {
    getCompanyId()
  })
  return (
    <div>
      <h2 className="page-header">Worker</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Update Profile</h4>
      <div className="container">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" value={this.state.name} onChange={handleChange} id="validationCustom01" required="" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" value={this.state.email} onChange={handleChange} id="inputEmail4" required=""/>
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Mobile
            </label>
            <input type="text" className="form-control" name="mobile" value={this.state.mobile} onChange={handleChange} id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Aadhaar
            </label>
            <input type="text" className="form-control" name="aadhar" value={this.state.aadhar} onChange={handleChange} id="inputZip" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Work Type
            </label>
            <select id="inputState" name="workType" value={this.state.workType} onChange={handleChange} className="form-select">
            <option selected="">Select</option>
              <option>Carpenter</option>
              <option>Labour</option>
              <option>Maison</option>
              <option>Painter</option>
              <option>Plumber</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
