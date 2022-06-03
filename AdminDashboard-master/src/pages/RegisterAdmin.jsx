import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const RegisterAdmin = () => {
    const url = "http://localhost:5000/api/admins/register"
    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        pass: ""
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
                        toast("Admin Registerd", {
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
            <h2 className="page-header">Admin</h2>
            {/* <hr className="featurette-divider" /> */}
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
                                    id="name"
                                    onChange={(e) => handle(e)}
                                    value={data.name}

                                />
                            </div>
                            <div className="col-10">
                                <label htmlFor="inputMobile" className="form-label">
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    onChange={(e) => handle(e)}
                                    value={data.mobile}

                                />
                            </div>

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
                                <label htmlFor="exampleInputPassword1" className="form-label">
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
                            
                            <a href="/loginadmin">Already Have Account?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
