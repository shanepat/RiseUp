import React from 'react'
import { useNavigate } from 'react-router-dom'

import './JobBoard.css'
import icon from '../riseup1.png'

export const JobBoard = () => {
  const navigate = useNavigate();
  return (
    <div id="body">
      <br></br>
      <div id="wrapper" data-aos="zoom-in-up" data-aos-delay="100">
        <br />
        <img id="icon" src={icon} />
      </div>
      <h1>JobBoard</h1>
        <h1 id="title"> Jobs Waiting For You </h1>
        <div id="job-board">
            <div class="job-posting">
                <div class="posting-top"> </div>
                <div class="job-title">Construction Worker</div>
                <div>
                  <p>
                  Palmer Construction Services LLC, Lansing MI 48911
Ayers Basement Systems, Lansing MI
Industrial Service, MI 48879
                  </p>
                  <p>
                  Companies with construction worker job openings :
description: A construction worker is responsible for assisting skilled tradespeople and construction managers in the construction of buildings, roads, bridges, and other structures. Some of the main responsibilities of a construction site worker include: Assisting in the preparation of construction sites, including clearing and grading the land and digging trenches.
                  </p>
                </div>
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
