import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'
//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'

const workerTableHead = [
    'id',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>
    </tr>
)

const WorkersRequest = () => {
    const [workersRequestList, setWorkerRequestList] = useState([])
    function getWorkerRequestList(){
        axios.get('http://localhost:5000/api/workers/checkrequeststatus')
             .then((response) => response.data)
             .then((data) => {
                 setWorkerRequestList(data)
             })
             .catch((err) => {
                 console.log("here's an error" + err)
             })
    }
    useEffect(() => {
        getWorkerRequestList()
    }, [])
    return (    
        <div>
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
                                limit='10'
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
