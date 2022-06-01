import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const LoginCompany = () => {
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
    function submit(e) {
        e.preventDefault();
        console.log("thljflkadf")
        console.log(data)
        console.log(data.type)
        axios.post(url, data)
            .then(res => {
                setData(res.data)
                console.log(data)
            })
    }
  return (
    <div>
    <h2 className="page-header">Login</h2>
    <hr className="featurette-divider" />
    <form onSubmit={(e) => submit(e)}>
             <div className="col-12">
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
       
        <div className="col-12">
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
                Login
            </button>
        </div>
        <a href="/registercompany">New Here?</a>
    </form>
</div>
  )
}
