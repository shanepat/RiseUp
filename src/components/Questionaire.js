import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Questionaire.css'
import icon from '../riseup1.png'


export const Questionaire = () => {
  const navigate = useNavigate();
  return (
    <div id="body">
      <br></br>
      <div id="wrapper" data-aos="zoom-in-up" data-aos-delay="100">
        <br />
        <img id="icon" src={icon} />
      </div>
      <div id="center">
      <div id="title" data-aos="zoom-in-up" data-aos-delay="200">
        <h1>Fill us in</h1>
        <p>
          Answer the following questions with a 'Y' if you agree and 'N' if you disagree
        </p>
      </div>
      <div class="question1" data-aos="zoom-in-up" data-aos-delay="300">
        <p>I like being in leadership position</p>
        <label for="fname">Yes</label>
        <input type="checkbox" id="y1" name="y1" />
        <label for="fname">No</label>
        <input type="checkbox" id="n1" name="n1" />
      </div>
      <div class="question2" data-aos="zoom-in-up" data-aos-delay="600">
        <p>I am open to new things</p>
        <label for="fname">Yes</label>
        <input type="checkbox" id="y4" name="y4" />
        <label for="fname">No</label>
        <input type="checkbox" id="n4" name="n4" />
      </div>
      <div class="question1" data-aos="zoom-in-up" data-aos-delay="700">
        <p>I get nervous in front of crowds</p>
        <label for="fname">Yes</label>
        <input type="checkbox" id="y5" name="y5" />
        <label for="fname">No</label>
        <input type="checkbox" id="n5" name="n5" />
      </div>
      <div class="question2" data-aos="zoom-in-up" data-aos-delay="800">
        <p>I enjoy working on a computer</p>
        <label for="fname">Yes</label>
        <input type="checkbox" id="y6" name="y6" />
        <label for="fname">No</label>
        <input type="checkbox" id="n6" name="n6" />
      </div>
      </div>
      <br/>
      <button class="continue" onClick={() => navigate(-1)}> Back </button>
      <button class="continue" onClick={() => navigate("/JobBoard")}> Continue </button>
      <br></br>
      <br></br>
      
    </div>
  )
}

export default Questionaire
