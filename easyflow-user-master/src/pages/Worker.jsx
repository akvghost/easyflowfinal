import React from 'react'
import { Link } from 'react-router-dom'
import workerCards from '../assets/JsonData/worker-card-data.json'
import WorkerCard from '../components/worker-card/WorkerCard'
export const Worker = () => {
    return (
        <div>
            <h2 className="page-header">Worker</h2>
            <hr className="featurette-divider" />
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            workerCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <Link to={item.route} key={index}>
                                        <WorkerCard
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
                    <div className="worker-card">
                        <div className="worker-card__header">
                            <h4>Quote</h4>
                        </div>

                        <div className="worker-card__info">
                            <blockquote className="blockquote mb-0">
                                <p>
                                    <br/>
                                    
                                “Hard work spotlights the character of people. Some turn up their sleeves. Some turn up their noses, and some don’t turn up at all.” 
                                <br/>
                                </p>
                                <footer className="blockquote-footer my-4">
                                    -Sam Ewing,  <cite title="Source Title">baseball player</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
