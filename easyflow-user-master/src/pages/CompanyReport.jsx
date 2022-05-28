import React, {useEffect, useState} from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import Table from '../components/table/Table'
import { Link } from 'react-router-dom'
import axios from 'axios'

const chartOptions = {
  series: [{
    name: 'Request Send',
    data: [0, 3, 7, 0, 4, 6, 4, 2, 5, 10, 8, 11]
  }, {
    name: 'Request Recieved',
    data: [0, 0, 0, 3, 3, 8, 3, 9, 0, 0, 8, 13]
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
    'Worker Name',
    'Contact',
    'Type',
    'Location',
    'Date'
  ],
  body: [
    {
      "serial": "1",
      "workername": "Aman Shukla",
      "contact": "8299123456",
      "date": "22-03-2022"
    },
    {
      "serial": "2",
      "workername": "Azaan Abdul",
      "contact": "4323175643",
      "date": "11-02-2022"
    },
    {
      "serial": "3",
      "workername": "Pritam Singh",
      "contact": "8753124675",
      "date": "02-02-2022"
    },
    {
      "serial": "4",
      "workername": "Akash Verma",
      "contact": "4509777213",
      "date": "10-09-2021"
    },
    {
      "serial": "5",
      "workername": "Santosh Gupta",
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
    <td>{item.serial}</td>
    <td>{item.workername}</td>
    <td>{item.contact}</td>
    <td>{item.date}</td>
  </tr>
)

export const CompanyReport = () => {
  const [comapanyList, setCompanyList] = useState([])
  function getCompany(){
    axios.get('http://localhost:5000/api/companies/checkrequeststatus')
         .then((response) => response.data)
         .then((data) => {
           setCompanyList(data)
         })
  }
  useEffect(() => {
    getCompany()
  }, [])
  const themeReducer = useSelector(state => state.ThemeReducer.mode)
  return (
    <div>
      <h2 className="page-header">Company</h2>
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
            <h3>Previous Worker hired</h3>
          </div>
          <div className="card__body">
            <Table
              headData={topUsers.head}
              renderHead={(item, index) => renderUserHead(item, index)}
              bodyData={comapanyList}
              renderBody={(item, index) => renderUserBody(item, index)}
            />
          </div>
          <div className="card__footer">
            <Link to='/previousworkers'>view all</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
