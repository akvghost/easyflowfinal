import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export const UpdateWorkerPass = (props) => {
    const url = "http://localhost:5000/api/workers/updateworkerpass"
    const [data, setData] = useState({
        password: "",
        confirmpassword: ""
    })
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
    function handle(e) {
        // e.preventDefault()  ;
        console.log(e.target.value)
        console.log(e.target.id)

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

                    if (response.status == "200") {
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
        console.log(response.status)



    }
    function checkislogin(e) {
        e.preventDefault();

        // alert("login succesful")
        console.log(response.status)
        window.location.href = "http://localhost:3000/worker"
        window.history(1);
        // }
        // else
        { console.log("in else") }
    }



        return (
        <div>
            <h2 className="page-header">Worker</h2>
            <hr className="featurette-divider" />
            <h4 className="page-header">Update Password</h4>
            <div className="container">
                <form onSubmit={(e) => submit(e)}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Password
                        </label>
                        <input type="password" name="password" className="form-control" id="password" onChange={(e) => handle(e)} value={data.password} />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Confirm Password
                        </label>
                        <input type="password" name="confirmPassword" className="form-control" id="confirmpassword" onChange={(e) => handle(e)} value={data.confirmpassword} />
                    </div>
                    <div className="col-12 my-4">

                        <button type="submit" className="btn btn-primary">
                            Update Password
                        </button>
                        
                    </div>
                    
                </form>
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
            </div>
        </div>
    )
}
