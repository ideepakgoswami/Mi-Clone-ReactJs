import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({end}) => {
  return (
    <Carousel fade>
        {end.map((item,index)=>(
            <Carousel.Item>
            <img
              className="d-block w-100" src={item.image} alt={`${index} Slide`}
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
        }
    </Carousel>
  )
}

export default Banner