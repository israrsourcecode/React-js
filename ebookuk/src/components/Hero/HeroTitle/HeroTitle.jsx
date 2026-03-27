import React from 'react'

const HeroTitle = ({ highlight, heading, headingpara, para }) => {
    return (
        <div className="hero-title">
            <h1>{heading} <span>{highlight}</span></h1>
            <h2>{headingpara}</h2>
            <p>{para}</p>
        </div>
    )
}

export default HeroTitle
