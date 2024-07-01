import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about container">
        <div className="row my-3 d-flex justify-content-evenly">
            <div className="card mx-1 col-md-6 text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header"><h4>Current Education</h4></div>
                <div className="card-body">
                <h5 className="card-title">Manit (NIT-B) </h5>
                <hr />
                <p className="card-text">I am currently pursuing a B.Tech in Electrical Engineering and am set to graduate in 2026.</p>
            </div> 

        </div>
        <div className="card col-md-6 mx-1 text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header"><h4>Class - 10<sup>th</sup> </h4></div>
                <div className="card-body">
                <h5 className="card-title">Indian Public School, Purnea(Bihar)</h5>
                <hr />
                <p className="card-text">Passed with 94.3% in 2019</p>
            </div> 
        </div>
        </div>

        <div className="row my-3 d-flex justify-content-evenly">
            <div className="card mx-1 text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header"><h4>Class - 12<sup>th</sup> </h4></div>
                    <div className="card-body">
                    <h5 className="card-title">Millia Convent English School, Purnea(Bihar)</h5>
                    <hr />
                    <p className="card-text"> Passed 12th grade in 2021 and took a gap year to prepare for the JEE</p>
                </div> 
            </div>
            <div className="card mx-1 text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header"><h4 style={{marginTop:"2px"}}>Hobbies</h4></div>
                   <hr />
                    <div className="card-body">
                    {/* <h5 className="card-title">Primary card title</h5> */}
                    <ul>
                        <li>Problem-Solving Puzzles</li>
                        <li>Sports-Cricket</li>
                        <li>Entertainment- Music,Anime</li>
                    </ul>
                </div> 
            </div>
        </div>
    </div>  
  )
}
