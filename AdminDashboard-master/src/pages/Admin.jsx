import React, {useEffect,useState} from 'react'
import axios from 'axios'
const url = ""
export const Admin = () => {
    const [data, setData] = useState({
        Name: "",
        mobile: "",
        email: "",
        pass: ""
    })
    
      const handleChange = (e) => {
        const name = e.target.Name
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
      const getAdminId = (e) => {
        const { id } = this.state
            const Id = url + id
            console.log(Id)
            axios.get(Id)
                .then((res) => res.json())
                .then((results) => {
                    if(results){
                        this.setState({
                          name: results.name,
                          email: results.email,
                          mobile: results.mobile,
                         
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
          gstin: this.state.mobile,
          
      }
      const baseUrl = url + this.state.id
      console.log(baseUrl)
      axios.post(baseUrl, head)
          .then((res) => {
              return res.json()
          })
          .then((results) => {
              if(results){
                  alert("Admin Updated Successfully!")
              }
          })
          .catch((error) => {
              alert("Can not update Admin, there is an error")
              console.log(error)
          })
      }
      useEffect(() => {
        getAdminId()
      })

    return (
        <div>
            <h2 className="page-header">Profile</h2>
            <div>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-4">
                        <label  className="form-label" >
                            ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            
                            placeholder=""
                            //required=""
                            disabled=""   
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault02" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationDefault02"
                            defaultValue="Ankush Kumar Verma"
                            required=""
                            value={this.data.Name}
                             onChange={handleChange}
                        />
                    </div>
                   
                    <div className="col-md-5">
                        <label htmlFor="validationDefault04" className="form-label">
                            Email
                        </label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">
                                @
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault04"
                                aria-describedby="inputGroupPrepend2"
                                required=""
                                value={this.data.email} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="validationDefault03" className="form-label">
                            Mobile
                        </label>
                        <div className="input-group">

                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault03"
                                required=""
                                value={this.data.mobile} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" >
                            Update
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
