import React from 'react'
import './Services.css'
import Services_Data from '../../assets/Services_Data'

const Services = () => {
  return (
    <div className='Services'>
        <div className="Services-title">
            <h1>My Services</h1>
            <img src="" alt="design" />
        </div>
        <div className="Services-cointainer">
            {Services_Data.map((s,index)=>{
                return(
                    <div key={index} className='Services-format'>
                        <h3>{s.s_no}</h3>
                        <h2>{s.s_name}</h2>
                        <p>{s.s_desc}</p>
                        <div className="Services-readmore">
                            <p>Read More</p>
                            <div className='arrow'>&#8594; </div>
                        </div>
                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default Services