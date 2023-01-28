import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <link rel="stylesheet" href="style.css">
        <head>
   
        </head>
      <body>
        <img src="riseup.png" width=10%>
        <h1>RiseUp</h1>
        <img src="img.png" width=10%>
        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"><br><br>
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
            <label for="lname">Birth date:</label>
            <input type="date" id="bday" name="bday"><br><br>
            <input type="submit" value="Submit">
        </form>
      </body>

    </div>
  );
}

export default App;
