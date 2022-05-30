import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'
import '../components/topnav/topnav.css'
//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'

const workerViewRequestTableHead = [
    //'serial',
    'company name',
    'work type',
    'mobile',
    'email',
    'location'

]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        {/* <td>{item.serial}</td> */}
        <td>{item.companyName}</td>
        <td>{item.workType}</td>
        <td>{item.companyMobile}</td>
        <td>{item.companyMail}</td>
        <td>{item.workLocation}</td>

    </tr>
)

export const WorkerViewRequest = () => {
    const [workerViewRequestList, setworkerViewRequestList] = useState([])
    function getWorkerViewRequest() {
        axios.get('http://localhost:5000/api/')
            .then((response) => response.data)
            .then((data) => {
                setworkerViewRequestList(data)

            })
            .catch(err => console.log("here's an error" + err))


    }
    useEffect(() => {
        getWorkerViewRequest()
    }, [])
    return (
        <div>
            <h2 className="page-header">
                View Work Requests
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
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
