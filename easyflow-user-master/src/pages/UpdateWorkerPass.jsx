import React, {useEffect} from 'react'
import axios from 'axios'
// add the path below where you want to update worker password
const url = ""
export const UpdateWorkerPass = (props) => {
    props.state = {
        password: '',
        confirmPassword: ''
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
                          password: results.password,
                        });
                    }else{
                        alert("No Record Fount!")
                    }
                }
                )
      }
      const updateRecord = () => {
          if(this.state.password !== this.state.confirmPassword){
              alert("password does'nt matches")
          }
        let head = {
          password: this.state.password
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
                        <label htmlFor="inputEmail4" className="form-label">
                            Password
                        </label>
                        <input type="password" name="password" value={this.state.password} onChange={handleChange} className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Confirm Password
                        </label>
                        <input type="password" name="confirmPassword" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-12">

                        <button type="submit" className="btn btn-primary">
                            Update Password
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}
