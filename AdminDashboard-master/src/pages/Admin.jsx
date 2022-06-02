import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
    export const Admin = () => {
    const url = "http://localhost:5000/api/admins/update"
    const [response, setResponse] = useState({
        data: "",
        status: ""

    })
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
            await axios.patch(url, data,)
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

                })
        }
        catch (err) { console.log(err) }
        console.log(response.status)
     }
     function checkp()
     {
         console.log("here")
         axios.patch("http://localhost:5000/api/admins/p",{

         })
         .then((res) => console.log(res))
     }
     
      useEffect(() => {
      })

    return (
        <div>
            <h2 className="page-header">Profile</h2>
            <div>
                <form className="row g-3" onSubmit={(e) => submit(e)}>
                    <div className="col-md-4">
                        <label  className="form-label" >
                            ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
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
                                type="text"
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
                        <p onClick={checkp()}>clik here</p>
                    </div>
                </form>

            </div>
        </div>
    )
}
