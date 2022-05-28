import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import Table from '../components/table/Table'
import { Link } from 'react-router-dom'
import axios from 'axios'


const chartOptions = {
  series: [{
    name: 'Request Send',
    data: [0, 0, 0, 3, 3, 8, 3, 9, 0, 0, 8, 13]
  }, {
    name: 'Request Recieved',
    data: [0, 3, 7, 0, 4, 6, 4, 2, 5, 10, 8, 11]
  }],
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
}

const topUsers = {
  head: [
    'Company Name',
    'Contact',
    'Type',
    'Location',
    'Date'
  ],
  body: [
    {
      "serial": "1",
      "companyname": "Stuti pvt. ltd",
      "contact": "8299123456",
      "date": "22-03-2022"
    },
    {
      "serial": "2",
      "companyname": "Azaan Bakers",
      "contact": "4323175643",
      "date": "11-02-2022"
    },
    {
      "serial": "3",
      "companyname": "Pritam Transport",
      "contact": "8753124675",
      "date": "02-02-2022"
    },
    {
      "serial": "4",
      "companyname": "Priya Electrics",
      "contact": "4509777213",
      "date": "10-09-2021"
    },
    {
      "serial": "5",
      "companyname": "Sahara Complex",
      "contact": "1209453250",
      "date": "02-06-2019"
    }
  ]
}

const renderUserHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderUserBody = (item, index) => (
  <tr key={index}>
    <td>{item.companyName}</td>
    <td>{item.companyMobile}</td>
    <td>{item.companyType}</td>
    <td>{item.companyLocation}</td>
    <td>{item.date}</td>
  </tr>
)


export const WorkerReport = () => {
  const [workerList, setWorkerList] = useState([])
  function getWorker(){
    // add path, from where you want to store it
    axios.get('')
         .then((response) => response.data)
         .then((data) => {
           setWorkerList(data)
         })
  }
  useEffect(() => {
    getWorker()
  }, [])
  const themeReducer = useSelector(state => state.ThemeReducer.mode)
  return (
    <div>
      <h2 className="page-header">Worker</h2>
      <hr className="featurette-divider" />

      <div className="col-12">
        <div className="card full-height">
          {/* chart */}
          <Chart
            options={themeReducer === 'theme-mode-dark' ? {
              ...chartOptions.options,
              theme: { mode: 'dark' }
            } : {
              ...chartOptions.options,
              theme: { mode: 'light' }
            }}
            series={chartOptions.series}
            type='line'
            height='250%'
          />
        </div>
      </div>
      <div className="col-10">
        <div className="card">
          <div className="card__header">
            <h3>Previous Work Places</h3>
          </div>
          <div className="card__body">
            <Table
              headData={topUsers.head}
              renderHead={(item, index) => renderUserHead(item, index)}
              bodyData={workerList}
              renderBody={(item, index) => renderUserBody(item, index)}
            />
          </div>
          <div className="card__footer">
            <Link to='/previouscompany'>view all</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
