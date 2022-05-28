import React, { useEffect, useState } from 'react'
import Table from '../components/table/Table'
import '../components/topnav/topnav.css'

//import companyList from '../assets/JsonData/company-list.json'
import axios from 'axios'
const previousCompanyTableHead = [
    
    'Company Name',
    'Contact',
    'Type',
    'Location',
    'Date'
    
    
]
const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.workerName}</td>
        <td>{item.type}</td>
        <td>{item.contact}</td>
        <td>{item.location}</td>
        <td>{item.date}</td>
        
    </tr>
)


export const PreviousCompany = () => {
    const [workercompanyList, setworkercompanyList] = useState([])
    function getWorkerCompany(){
        console.log("iam here");
        
        axios.get('http://localhost:5000/api/')
            .then((response) => response.data)
            .then((data) => {
                setworkercompanyList(data)
                console.log(setworkercompanyList)
                
            })
    }
    
    useEffect(() => {
        debugger
        console.log("here iam ")
        
        getWorkerCompany()
    }, [])
  return (
    <div>
    <h2 className="page-header">
        Previous Worked Places
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
                        headData={previousCompanyTableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={workercompanyList}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
