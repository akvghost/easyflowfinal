import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'
import '../components/topnav/topnav.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'

const workerViewRequestTableHead = [
    'serial',
    'company name',
    'work type',
    'mobile',
    'email',
    'location'

]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.serial}</td>
        <td>{item.companyName}</td>
        <td>{item.workerType}</td>
        <td>{item.companyMobile}</td>
        <td>{item.companyMail}</td>
        <td>{item.location}</td>

    </tr>
)

export const WorkerViewRequest = () => {
    const [workerViewRequestList, setworkerViewRequestList] = useState([])
    function getWorkerViewRequest() {
        axios.get('http://localhost:5000/api/workers/viewrequests')
            .then((response) => response.data)
            .then((data) => {
                setworkerViewRequestList(data)

            })
            .catch(err => console.log("here's an error" + err))


    }console.log(workerViewRequestList)
    function checkpost()
    { axios.post('http://localhost:5000/api/companies/posthere')
    .then((response) => console.log(response.data))}
    useEffect(() => {
        getWorkerViewRequest()
    }, [])
    return (
        <div>
            <h2 className="page-header" onClick={checkpost}>
                View Work Requests
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit={workerViewRequestList.length-1}
                                headData={workerViewRequestTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={workerViewRequestList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
