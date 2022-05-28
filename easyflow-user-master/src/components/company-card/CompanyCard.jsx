import React from 'react'

import './companycard.css'

const CompanyCard = props => {
    return (
        <div className='company-card'>
            <div className="company-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="company-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default CompanyCard
