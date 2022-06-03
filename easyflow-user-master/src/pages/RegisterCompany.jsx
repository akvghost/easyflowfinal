import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const RegisterCompany = () => {
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
    function submit(e) {
        e.preventDefault();
        console.log(data)
        axios.post(url, data)
            .then(res => {
                setData(res.data)
                console.log(data)
            })
    }
    return (
        <div>
            <h2 className="page-header">Company</h2>
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
                                    id="email"
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
                            </div>
                            <a href="/logincompany">Already Have Account?</a>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
