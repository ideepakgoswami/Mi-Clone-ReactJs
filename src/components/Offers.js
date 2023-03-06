import React from 'react'
import Offer from './Offer.js'
import '../styles/offers.css'

const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
      {
        offer.map((item,index)=>(
          <Offer index={index} link={item.url} src={item.image} />
          ))
      }
    </div>
  )
}

export default Offers