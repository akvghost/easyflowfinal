import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginCompanyMobile = () => {
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
    const url = "http://localhost:5000/api/companies/"
    const [data, setData] = useState({
        mobile: "",
        pass: ""
    })
    function handle(e) {
        // e.preventDefault()  ;
        console.log(e.target.value)
        console.log(e.target.id)

        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

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
                    }

                })
        }
        catch (err) { console.log(err) }
        console.log(response.status)
        setTimeout(() => {
            checkislogin(e)
        }, 5200)



    }
    function checkislogin(e) {
        e.preventDefault();

        // alert("login succesful")
        console.log(response.status)
        window.location.href = "http://localhost:3000/worker"
        // }
        // else
        { console.log("in else") }
    }
    return (
        <div>
            <h2 className="page-header">Login</h2>
            <hr className="featurette-divider" />
            <form onSubmit={(e) => submit(e)}>
                <div className="col-12">
                    <label htmlFor="inputMobile" className="form-label">
                        Mobile
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        aria-describedby="emailHelp"
                        onChange={(e) => handle(e)}
                        value={data.mobile}

                    />

                </div>

                <div className="col-12">
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
                    <button type="submit" className="btn btn-primary">
                        Login
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
                <a href="/logincompany">Login with Mail</a>
                <br />
                <a href="/registercompany">New Here?</a>
            </form>
        </div>
    )
}