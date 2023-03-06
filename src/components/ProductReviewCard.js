import React from 'react'
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({image,review,name,price,index}) => {
  return (
    <div className='ProductReviewCard'>
        <div>
          <img src={image} alt={`${index}Review`} />
          <h5>{review}</h5>
          <span>{name}</span>
          <b>{price}</b>

        </div>
    </div>
  )
}

export default ProductReviewCard