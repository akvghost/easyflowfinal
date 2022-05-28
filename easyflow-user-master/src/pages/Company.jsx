import React from 'react'
import { Link } from 'react-router-dom'
import companyCards from '../assets/JsonData/company-card-data.json'
import CompanyCard from '../components/company-card/CompanyCard'

export const Company = () => {
    return (
        <div>
            <h2 className="page-header">Company</h2>
            <hr className="featurette-divider" />
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            companyCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <Link to={item.route} key={index}>
                                        <CompanyCard
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
                <div className="col-6">
                    <div className="card">
                        <div className="card-header"><h4>Quote</h4></div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>“I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.”
                                    <br />
                                    <br />
                                    <br/>
                                </p>
                                <footer className="blockquote-footer">
                                    G.K. Chesterton <cite title="Source Title">writer, paradoxical stories</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
