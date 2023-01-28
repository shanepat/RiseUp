import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img src="riseup.png" width=10% \> */}
      <h1>RiseUp</h1>
      {/* <img src="img.png" width=10%> */}

      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/><br/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"/><br/>
      <label for="lname">Birth date:</label>
      <input type="date" id="bday" name="bday"/><br/>
      <input type="submit" value="Submit"/>
      <h1> Hello World! </h1>

    </div>
  );
}

export default App;
