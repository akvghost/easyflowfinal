import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'
import Sidebar from '../components/sidebar/Sidebar'

//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'
const workerTableHead = [
    'Serial',
    'name',
    'email',
    'phone',
    'Worker Type',
    'Vacancy',
    'Location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.serial}</td>
        <td>{item.companyName}</td>
        <td>{item.companyMail   }</td>
        <td>{item.companyMobile}</td>
        <td>{item.workerType}</td>
        <td>{item.vacancy}</td>
        <td>{item.location}</td>
        
        




    </tr>
)

const CompanyRequest = (props) => {
    const [companyRequestList, setCompanyRequestList] = useState([])
    function getCompanyRequest(){
        axios.get('http://localhost:5000/api/admins/totalrequests/companies')
            .then((response) => response.data)
            .then((data) => {
                setCompanyRequestList(data)
                

            })
    }console.log(companyRequestList)
    useEffect(() => {
        getCompanyRequest()
    }, [])
    return (
        <div>
                        <Sidebar {...props}/>

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
                                limit='2'
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
