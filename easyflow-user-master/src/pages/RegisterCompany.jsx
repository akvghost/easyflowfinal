import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const RegisterCompany = () => {
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
    const url = "http://localhost:5000/api/companies/register"
    const [data, setData] = useState({
        companyName: "",
        companyMobile: "",
        companymail: "",
        companypass: ""
    })
    function handle(e) {
        // e.preventDefault()  ;
        console.log(e.target.value)
        console.log(e.target.id)

        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log("new")
        console.log(newdata)
        // console.log("data")
        // console.log(data)


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

                    if (response.status =="201" ) {
                        toast("Company Registered", {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setTimeout(() => {
                            checkislogin(e)
                        }, 10400)
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
        window.location.href = "http://localhost:3000"
        window.history(1);
        // }
        // else
    }
    return (
        <div>
            <h2 className="page-header">Register Company</h2>
            <hr className="featurette-divider" />
            <div className='col-6 ' >
                <div className="card">
                    <div className="card-header"><h4>Register</h4></div>
                    <div className="card-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="col-10">
                                <label htmlFor="inputName" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyName"
                                    onChange={(e) => handle(e)}
                                    value={data.companyName}

                                />
                            </div>
                            <div className="col-10">
                                <label htmlFor="inputMobile" className="form-label">
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyMobile"
                                    onChange={(e) => handle(e)}
                                    value={data.companyMobile}

                                />
                            </div>

                            <div className="col-10">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="companymail"
                                    className="form-control"
                                    id="companymail"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => handle(e)}
                                    value={data.companymail}

                                />

                            </div>

                            <div className="col-10">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="companypass"
                                    onChange={(e) => handle(e)}
                                    value={data.companypass}
                                />
                            </div>
                            <div className='col-12 my-4' >
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
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
                            <a href="/logincompany">Already Have Account?</a>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
