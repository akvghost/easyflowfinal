import React, { useEffect, useState } from 'react'

import Table from '../components/table/Table'
import '../components/topnav/topnav.css'
//import workerList from '../assets/JsonData/workers-list.json'
import axios from 'axios'

const workerTableHead = [
    'serial',
    'name',
    'email',
    'phone',
    'type',
    'location',
    'ratings'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.serial}</td>
        <td>{item.workerName}</td>
        <td>{item.workerMail}</td>
        <td>{item.workerMobile}</td>
        <td>{item.workerType}</td>
        <td>{item.locationPreference}</td>
        <td>{item.ratings}</td>
    </tr>
)
const Workers = () => {
    const [ workerList, setWorkerList ] = useState([])
    function getWorker(){
        axios.get('http://localhost:5000/api/workers')
             .then((response) => response.data)
             .then((data) => {
                 setWorkerList(data)
                 
             })
             .catch(err => console.log("here's an error" + err))
             
             
    }
    useEffect(() => {
        getWorker()
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
                                bodyData={workerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workers
