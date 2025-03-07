import React from 'react'

const TemalistItem = ({title, data, description}) => {
  return (
    <li className='timeline-item'>
        <h4 className='h4 timeline-item-title'>{title}</h4>
        <span>{data}</span>
        <p className='timeline-text'>{description}</p>
    </li>
  )
}

export default TemalistItem