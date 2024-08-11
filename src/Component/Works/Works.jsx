import React from 'react'
import './Works.css'
import Work_Data from '../../assets/Work_Data'

const Works = () => {
  return (
    <div className='works'>
      <div className="works-title">
        <h1>My Latest Work</h1>
        <img src="" alt="design" />
      </div>
      <div className="works-cointainer">
        {Work_Data.map((w, index) => {
          return <img key={index} src={w.w_img} alt="" />
        }
        )}
        <div className='works-showmore'>
          <p>Show More</p>
          <p> &#8594;</p>
        </div>
      </div>

    </div>
  )
}

export default Works