import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginCompany = () => {
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
    const url = "http://localhost:5000/api/companies/login"
    const [data, setData] = useState({
        email: "",
        pass: ""
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
        try {
            await axios.post(url, data)
                .then((res) => res)
                .then((res) => {

                    response.status = res.status
                    response.data = res.data
                    console.log(response.data)
                    console.log(response.status)
                    if (response.status == "204" || response.status == "200") {
                        toast("Login Successful", {
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
                        }, 5200)
                    }
                    else{
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
        catch (err) { console.log(err)
            toast(err.response.data, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }); }
        console.log(response.status)
        



    }
    function checkislogin(e) {
        e.preventDefault();

        // alert("login succesful")
        console.log(response.status)
        window.location.href = "http://localhost:3000/company"
        // }
        // else
        { console.log("in else") }
    }
    return (
        <div>
            <h2 className="page-header">Company</h2>
            <hr className="featurette-divider" />

            <div className='col-6 ' >
                <div className="card">
                    <div className="card-header"><h4>Login</h4></div>
                    <div className="card-body">
                        <form onSubmit={(e) => submit(e)}>
                            <div className="col-10">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => handle(e)}
                                    value={data.email}
                                />
                            </div>
                            <div className="col-10">
                                <label htmlFor="exampleInputPassword1" className="form-label" onClick={checkislogin}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="pass"
                                    onChange={(e) => handle(e)}
                                    value={data.pass}
                                />
                            </div>
                            <div className='col-12 my-4' >
                                <button type="submit" className="btn btn-primary" >
                                    Login
                                </button>
                                
                            </div>
                            <a href="/logincompanymobile">Login with Mobile</a>
                            <br />
                            <a href="/registercompany">New Here?</a>
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


        </div >

    )
}
