import React from 'react'
import './Introduction.css'
import photo from '../../asset/myphoto.jpg'
export default function Introduction() {
  return (
      <div className="intro">
        <div className="left-side">
          <span className="hello">Hello,</span>
          <h1 className='myself'>I am <span className="name">Ankit</span> <br />
          Web Deve<span className="moving">loper</span></h1>
          <span className="hello">Frontend</span>
        </div>
        <div className="right-side">
          <img className='img-fluid' src={photo} alt="photo" />
        </div>
      </div>
  )
}
