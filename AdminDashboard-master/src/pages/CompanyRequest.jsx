import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'

//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'
const workerTableHead = [
    // 'id',
    'name',
    'email',
    'phone',
    'Worker Type',
    'Vacancy',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        {/* <td>{item.companyName}</td>
        <td>{item.companyMail}</td>
        <td>{item.companyMobile}</td>
        <td>{item.companyCIN}</td>
        <td>{item.companyGstin}</td>
        <td>{item.siteLocation}</td> */}
        <td>{item.companyId}</td>
        <td>{item.location}</td>
        <td>{item.workerType}</td>
        <td>{item.vacancy}</td>




    </tr>
)

const CompanyRequest = () => {
    const [companyRequestList, setCompanyRequestList] = useState([])
    function getCompanyRequest(){
        axios.get('http://localhost:5000/api/companies')
            .then((response) => response.data)
            .then((data) => {
                console.log(data)
                setCompanyRequestList(data)
            })
    }
    useEffect(() => {
        getCompanyRequest()
    }, [])
    return (
        <div>
            <h2 className="page-header">
                companies requests
                <div className="topnav__search">
                    <input type="text" placeholder='Search here...' />
                    <i className='bx bx-search'></i>
                </div>
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={workerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={companyRequestList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyRequest
