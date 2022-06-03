import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'

import Table from '../components/table/Table'
//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'

const workerTableHead = [
    'Serial',
    'name',
    'email',
    'phone',
    'type',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.serial}</td>
        <td>{item.workerName}</td>
        <td>{item.workerMail}</td>
        <td>{item.workerMobile}</td>
        <td>{item.workerType}</td>
        <td>{item.location}</td>
    </tr>
)

const WorkersRequest = (props) => {
    const [workersRequestList, setWorkerRequestList] = useState([])
    function getWorkerRequestList(){
        axios.get('http://localhost:5000/api/admins/totalrequests/workers')
            .then((response) => response.data)
            .then((data) => {
                setWorkerRequestList(data)
                

            })
    }console.log(workersRequestList)
    useEffect(() => {
        getWorkerRequestList()
    }, [])
    return (    
        <div>
                        <Sidebar {...props}/>

            <h2 className="page-header">
                workers
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
                                limit={workersRequestList.length-1}
                                headData={workerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={workersRequestList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkersRequest
