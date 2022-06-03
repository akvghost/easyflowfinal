import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../components/sidebar/Sidebar'

export const Admin = (props) => {
    const url = "http://localhost:5000/api/admins/updateadmin"
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
    const [id, setId] = useState([])
    const [data, setData] = useState({
        Name: "",
        mobile: "",
        email: "",
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

    useEffect(() => {
        setId("30681EE0-5B27-4755-9181-D9DBDB5A15A7")
    })

    return (
        <div>
            <Sidebar {...props} />

            <h2 className="page-header">Update Profile</h2>
            <div>
                <form className="row g-3" onSubmit={(e) => submit(e)}>
                    <div className="col-md-4">
                        <label className="form-label" >
                            ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={id}
                            //required=""
                            disabled=""
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault02" className="form-label" >
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="Name"
                            defaultValue="Ankush Kumar Verma"
                            required=""
                            value={data.Name}
                            onChange={(e) => handle(e)}
                        />
                    </div>

                    <div className="col-md-5">
                        <label htmlFor="validationDefault04" className="form-label">
                            Email
                        </label>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroupPrepend2">
                                @
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="inputGroupPrepend2"
                                required=""
                                value={data.email}
                                onChange={(e) => handle(e)}
                            />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label htmlFor="validationDefault03" className="form-label">
                            Mobile
                        </label>
                        <div className="input-group">

                            <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                required=""
                                value={data.mobile}
                                onChange={(e) => handle(e)}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" >
                            Update
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
                </form>

            </div>
        </div>
    )
}
