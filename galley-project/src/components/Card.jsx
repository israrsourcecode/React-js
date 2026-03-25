import React from 'react'
import "./Card.css"
const Card = ({value}) => {
    return ( <a href={value.url} target='_blank'  rel="noopener noreferrer">
                <div className='image-box'>
                    <img src={value.download_url} alt={value.author} loading="lazy" />
                    <h4>{value.author}</h4>
                </div>
            </a>
    )
}

export default Card
