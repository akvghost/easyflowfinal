import React, { useEffect, useState } from 'react'
import Table from '../components/table/Table'
import '../components/topnav/topnav.css'

//import companyList from '../assets/JsonData/company-list.json'
import axios from 'axios'
const previousWorkerTableHead = [
    
    'workername',
    'type',
    'contact',
    'location',
    'date'
    
    
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

export const PreviousWorkers = () => {
    const [companyworkerList, setCompanyworkerList] = useState([])
    function getCompanyWorker(){
        console.log("iam here");
        
        axios.get('http://localhost:5000/api/')
            .then((response) => response.data)
            .then((data) => {
                setCompanyworkerList(data)
                console.log(setCompanyworkerList)
                
            })
    }
    
    useEffect(() => {
        debugger
        console.log("here iam ")
        
        getCompanyWorker()
    }, [])
  return (
    <div>
    <h2 className="page-header">
        Previous Hired Worker
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
                        headData={previousWorkerTableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={companyworkerList}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
