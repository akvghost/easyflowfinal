import React from 'react'

import './workercard.css'

const WorkerCard = props => {
    return (
        <div className='worker-card'>
            <div className="worker-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="worker-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default WorkerCard
