import React from 'react'

const Offer = ({index,link,src}) => {
  return (
    <div>
    <a href={link}>
      <img src={src} alt={`${index} offer`} />
      </a>
    </div>
  )
}

export default Offer