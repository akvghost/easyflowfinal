import React, { useEffect, useState } from 'react'
import requestCards from '../assets/JsonData/requests-card-data.json'
import RequestCard from '../components/request-card/RequestCard'
import Table from '../components/table/Table'
//import Badge from '../components/badge/Badge'
import { Link } from 'react-router-dom'
//import CompanyRequest from './CompanyRequest'
import axios from 'axios'
const latestRequest = {
    header: [

        "Company",
        "Type",
        "Vacancy",

    ],
    body: [
        {

            Company: "Abc pvt ltd",
            Vacancy: "17",
            Type: "Plumber",

        },
        {

            Company: "frank iva",
            Vacancy: "16",
            Type: "painter",

        },
        {

            Company: "anthony bakers",
            Vacancy: "8",
            Type: "maison",

        },
        {
            Company: "frank iva",
            Vacancy: "4",
            Type: "plumber",

        },
        {

            Company: "anthony bakers",
            Vacancy: "2",
            Type: "carpenter",

        }
    ]
}
const renderRequestHead = (item, index) => (
    <th key={index}>{item}</th>
)
const renderRequestBody = (item, index) => (
    <tr key={index}>
        <td>{item.companyName}</td>
        <td>{item.workerType}</td>
        <td>{item.vacancy}</td>
    </tr>
)
const latestWorkerRequest = [
    'name',
    'type',
    'location'
]

const renderWorkerRequestHead = (item, index) => <th key={index}>{item}</th>

const renderWorkerRequestBody = (item, index) => (
    <tr key={index}>
        <td>{item.workerName}</td>       
        <td>{item.workerType}</td>
        <td>{item.location}</td>
    </tr>
)
export const Requests = () => {
    const [requestList, setRequestList] = useState([])
    function getRequest() {
        axios.get('http://localhost:5000/api/companies/checkrequeststatus')
            .then((response) => response.data)
            .then((data) => {
                setRequestList(data)
            })
    }
    const sendRequestToWorker = () => {
        axios.get('http://localhost:5000/api/admins/postrequest/worker')
        .then((response) => alert(response.data))
        
    }
    const [requestresp , setRequestresp] = useState([])
    const sendRequestToCompany = () => {
        
        axios.get('http://localhost:5000/api/admins/postrequest/company')
        .then((response) => response.data)
        .then((data) => {
            setRequestresp(data)
            console.log(requestresp)

        })
        console.log(requestresp)
    }
    const [workersRequestList, setWorkerRequestList] = useState([])
    function getWorkerRequestList(){
        axios.get('http://localhost:5000/api/admins/totalrequests/workers')
            .then((response) => response.data)
            .then((data) => {
                setWorkerRequestList(data)
                

            })
    }console.log(workersRequestList)
    const [companyRequestList, setCompanyRequestList] = useState([])
    function getCompanyRequest(){
        axios.get('http://localhost:5000/api/admins/getlatestrequestsfordashboard')
            .then((response) => response.data)
            .then((data) => {
                setCompanyRequestList(data)
                

            })
    }console.log(companyRequestList)
    useEffect(() => {
        getRequest()
        getWorkerRequestList()
        getCompanyRequest()
    }, [])
    return (
        <div>
            <h2 className="page-header">Requests</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            requestCards.map((item, index) => (
                                <div className="col-6">
                                    <Link to={item.route} key={index}>
                                        <RequestCard
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}
                                        />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-3">
                    <div className="request-card">
                        <div className="request-card__info" onClick={sendRequestToWorker}>
                            <h3>Send request to worker</h3>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="request-card">
                        <div className="request-card__info" onClick={sendRequestToCompany}>
                            <h3>Send Request to Company</h3>
                        </div>
                    </div>
                </div>

            </div>


            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>companies requests</h3>
                        </div>
                        <div className="card__body">
                            <Table
                            limit={companyRequestList.length-1}
                                headData={latestRequest.header}
                                renderHead={(item, index) => renderRequestHead(item, index)}
                                bodyData={companyRequestList}
                                renderBody={(item, index) => renderRequestBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/companyrequest' >view all</Link>
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>workers requests</h3>
                        </div>
                        <div className="card__body">
                            <Table
                            limit={workersRequestList.length-1}
                                headData={latestWorkerRequest}
                                renderHead={(item, index) => renderWorkerRequestHead(item, index)}
                                bodyData={workersRequestList}
                                renderBody={(item, index) => renderWorkerRequestBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/workersrequest'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
