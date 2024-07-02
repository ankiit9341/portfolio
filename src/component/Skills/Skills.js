import React from 'react'
import "./Skills.css"
import { Link } from 'react-router-dom';

export default function skills() {
  return (
    <div className='container'>
      <div className="tech-skill">
        <h1>Tech-Skills</h1>
        <ul>
          <li>150+ Questions Solved on LeetCode <a href="https://leetcode.com/u/An_kit_kumar/" target='_main'>Leetcode</a></li>
          <li>80+ Questions Solved on GFG <a href="https://www.geeksforgeeks.org/user/itsankiumqi/" target='_main'>GFG</a></li>
        </ul>
        <hr />
             <h3>DSA (C++)</h3>
              <div class="progress my-3">
                 <div class="progress-bar" role="progressbar" style={{width: "60%", color:"red"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h3>HTML,CSS,BOOTSTRAP,JS,REACT</h3>
              <div class="progress my-3">
                 <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
      </div>
      <div className="soft-skill">
        <h1>Soft-Skills</h1>
        <ul>
          <li><h3>Problem-Solving:</h3> Strong analytical skills and the ability to tackle challenges creatively and efficiently.</li>
          <li><h3>Adaptability:</h3> Flexibility to adjust to new situations and challenges.</li>
          <li><h3>Time Management:</h3> Ability to prioritize tasks and manage time efficiently to meet deadlines.</li>
          <li><h3>Leadership:</h3> Experience in leading projects or teams, even in informal settings.</li>
          <li><h3>Emotional Intelligence:</h3> Understanding and managing your own emotions</li>
        </ul>
      </div>
    </div>
  )
}
