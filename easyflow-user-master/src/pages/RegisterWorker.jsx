import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const RegisterWorker = () => {
    const url = "http://localhost:5000/api/workers/register"
    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        type: "",
        password: ""
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
        axios.post(url, {
            workerName: data.name,
            workerMobile: data.mobile,
            workerMail: data.email,
            workerType: data.type,
            workerpass: data.password,
            ratings: 0
        })
            .then(res => {
                setData(res.data)
                console.log(data)
            })
    }
    return (
        <div>
            <h2 className="page-header">Worker</h2>
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
                                <label htmlFor="validationCustom04" className="form-label">
                                    Type
                                </label>
                                <select className="form-select" id="type" required="" onChange={(e) => handle(e)} value={data.type}>
                                    <option selected="" disabled="" >
                                        Choose...
                                    </option>
                                    <option values="plumber" >Plumber</option>
                                    <option values="painter">Painter</option>
                                    <option values="carpenter">Carpenter</option>
                                    <option values="masion">Masion</option>
                                    <option values="labour">Labour</option>

                                </select>
                            </div>
                            <div className="col-10">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={(e) => handle(e)}
                                    value={data.password}
                                />
                            </div>
                            <div className='col-12 my-4' >
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <a href="/loginworker">Already Have Account?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
