import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import icon from '../riseup1.png'

export const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    navigate("/Questionaire");
  }

  return (
    <div id="body">
      <br/>
      <br/>
      <br/>
      <img id="icon" src={icon}/><br/><br/>
      <h1 class="jobboardt"> Welcome to RiseUp! </h1> <br/> <br/>
      
      <label for="fname" class="jobboardt"><b>First name:</b></label>
      <input type="text" id="fname" name="fname"/><br/><br/>
      <label for="lname" class="jobboardt"><b>Last name:</b></label>
      <input type="text" id="lname" name="lname"/><br/><br/>
      <label for="lname" class="jobboardt"><b>Birth date:</b></label>
      <input type="date" id="bday" name="bday"/><br/><br/>
      <button class="continue" onClick={handleClick}> <b> Continue </b> </button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Home;
