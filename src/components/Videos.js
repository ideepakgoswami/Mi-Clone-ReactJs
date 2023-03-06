import React from 'react'
import VideoCard from '../components/VideoCard.js'
import '../styles/Videos.css'

const Videos = ({videos}) => {
  return (
    <div className='Videos' >
        {videos.map((item,index)=>(
            <VideoCard key={item.name} index={item.index} name={item.name} image={item.image}/>
        )
        )}
    </div>
  )
}

export default Videos