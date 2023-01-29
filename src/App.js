import logo from './logo.svg';
import icon from './Rose Gold Brush Glitter Feminine Boutique Circle Logo.gif'

import './App.css';

function App() {
  return (
    <div className="App">
      <img src={icon}/>
      <h1>RiseUp</h1>

      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/><br/><br/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"/><br/><br/>
      <label for="lname">Birth date:</label>
      <input type="date" id="bday" name="bday"/><br/><br/>
      <input type="submit" value="Submit"/>
      {/* <h1> Hello World! </h1> */}

    </div>
  );
}

export default App;
