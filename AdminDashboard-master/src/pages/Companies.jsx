import React, { useEffect, useState } from 'react'
import Table from '../components/table/Table'
import '../components/topnav/topnav.css'
import Sidebar from '../components/sidebar/Sidebar'

//import companyList from '../assets/JsonData/company-list.json'
import axios from 'axios'

const companyTableHead = [

    'name',
    'email',
    'phone',
    'cin',
    'gstin',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.companyName}</td>
        <td>{item.companyMail}</td>
        <td>{item.companyMobile}</td>
        <td>{item.companyCIN}</td>
        <td>{item.companyGstin}</td>
        <td>{item.siteLocation}</td>
    </tr>
)


const Companies = (props) => {
    const [companyList, setCompanyList] = useState([])
    function getCompany() {
        console.log("iam here");

        axios.get('http://localhost:5000/api/companies')
            .then((response) => response.data)
            .then((data) => {
                setCompanyList(data)
                console.log(setCompanyList)

            })
    }

    useEffect(() => {
        debugger
        console.log("here iam ")

        getCompany()
    }, [])
    return (
        <div>
            <Sidebar {...props} />

            <h2 className="page-header">
                companies
            </h2>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={companyTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={companyList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
