import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateWorkerProfile = (props) => {
  const url = "http://localhost:5000/api/workers/updateworker"
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
   
    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        aadhaar:"",
        type:""
    })
    function handle(e) {

        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)



    }
    const submit = async (e) => {
        e.preventDefault();
        console.log(data)
        try {
            await axios.post(url, data)
                .then((res) => res)
                .then((res) => {

                    response.status = res.status
                    response.data = res.data
                    console.log(response.data)
                    console.log(response.status)
                    if (response.status == "204" || response.status == "200") {
                        toast("Updated Successfully", {
                            position: "bottom-right",
                            autoClose: 5000,
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
        }
        catch (err) {
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

    }



  return (
    <div>
      <h2 className="page-header">Worker</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Update Profile</h4>
      <div className="container">
        <form className="row g-3"onSubmit={(e) => submit(e)} >
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name"  id="name" required="" value={data.name}
                            onChange={(e) => handle(e)}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" id="email" required="" value={data.email}
                            onChange={(e) => handle(e)}/>
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Mobile
            </label>
            <input type="text" className="form-control" name="mobile"  id="mobile" value={data.mobile}
                            onChange={(e) => handle(e)} />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Aadhaar
            </label>
            <input type="text" className="form-control" name="aadhar"  id="aadhaar" value={data.aadhaar}
                            onChange={(e) => handle(e)} />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Work Type
            </label>
            <select id="type" name="workType"  className="form-select" value={data.Name}
                            onChange={(e) => handle(e)}>
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
