import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import icon from '../Rose Gold Brush Glitter Feminine Boutique Circle Logo.gif'

export const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    navigate("/Questionaire");
  }

  return (
    <div>
      <h1>RiseUp</h1>
      <img src={icon}/><br/><br/>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/><br/><br/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"/><br/><br/>
      <label for="lname">Birth date:</label>
      <input type="date" id="bday" name="bday"/><br/><br/>
      <button onClick={handleClick}> Submit! </button>
    </div>
  );
}

export default Home;
