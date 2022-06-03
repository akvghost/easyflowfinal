import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const UpdateCompanyProfile = (props) => {
 
  const url = "http://localhost:5000/api/workers/updateworker"
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
   
    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        cin:"",
        gstin:""
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
      <h2 className="page-header">Company</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Update Profile</h4>
      <div className="container">
        <form className="row g-3" onSubmit={(e) => submit(e)}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="email" name="name"  className="form-control" id="name" value={data.name}
                            onChange={(e) => handle(e)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input type="email" name="email"  className="form-control" id="email" value={data.email}
                            onChange={(e) => handle(e)}/>
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Mobile
            </label>
            <input type="text" name="mobile" className="form-control" id="mobile" value={data.mobile}
                            onChange={(e) => handle(e)} />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              CIN
            </label>
            <input type="text" name="cin" className="form-control" id="cin" value={data.cin}
                            onChange={(e) => handle(e)}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              GSTIN
            </label>
            <input type="text" name="gstin" className="form-control" id="gstin" value={data.gstin}
                            onChange={(e) => handle(e)} />
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
