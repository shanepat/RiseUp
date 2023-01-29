import React from 'react'
import { useNavigate } from 'react-router-dom'

import './JobBoard.css'

export const JobBoard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>JobBoard</h1>
        <h1 id="title"> Jobs Waiting For You </h1>
        <div id="job-board">
            <div class="job-posting">
                <div class="posting-top"> </div>
                <div class="job-title"> Pet Sitting </div>
                <div> Look after 3 </div>
                <button class="apply"> Apply </button>
            </div>
            <div class="job-posting">
                <div class="job-title"> Restuarant Host </div>
            </div>
            <div class="job-posting">
                <div class="job-title"> Salon Reception Desk </div>
            </div>
            <div class="job-posting">
                <div class="job-title"> Construction Worker </div>
            </div>
            <div class="job-posting">
                <div class="job-title"> Plant Caretaker </div>
            </div>
        </div>
      <button onClick={() => navigate(-1)}> Back! </button>
    </div>
  )
}

export default JobBoard
