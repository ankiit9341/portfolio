import React from 'react'
import './Introduction.css'
import photo from '../../asset/myphoto.jpg'
export default function Introduction() {
  return (
      <div className="intro">
        <div className="left-part">
            <span className='hello'>hello,</span>
             <h1>I am <span className='frontend'>Ankit</span><br />
                     Web Deve<span className='moving-part'>loper</span></h1>
                     <p className='hello'>Frontend</p>
        </div>
        <div className="right-part">
            <img className='my-photo' src={photo} alt="" />
        </div>
      </div>
  )
}
