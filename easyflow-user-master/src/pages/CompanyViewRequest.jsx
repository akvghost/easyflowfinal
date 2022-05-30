import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'
import '../components/topnav/topnav.css'
//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'

const companyViewRequestTableHead = [
    //'serial',
    'worker name',
    'worker type',
    'mobile',
    'email',
    'location'

]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        {/* <td>{item.serial}</td> */}
        <td>{item.workerName}</td>
        <td>{item.workerType}</td>
        <td>{item.workerMobile}</td>
        <td>{item.workerMail}</td>
        <td>{item.workerLocation}</td>

    </tr>
)


export const CompanyViewRequest = () => {
    const [companyViewRequestList, setCompanyViewRequestList] = useState([])
    function getCompanyViewRequest() {
        axios.get('http://localhost:5000/api/')
            .then((response) => response.data)
            .then((data) => {
                setCompanyViewRequestList(data)

            })
            .catch(err => console.log("here's an error" + err))


    }
    useEffect(() => {
        getCompanyViewRequest()
    }, [])
    return (
        <div>
            <h2 className="page-header">
                View Worker's Requests
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={companyViewRequestTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={companyViewRequestList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
