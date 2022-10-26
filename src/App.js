import './App.css';
import Login from './Login';
import Landing from './Landing';
import Home from './Home';
import Register from './Register'
import { useState } from 'react';

function App() {
const [choice,setChoice] = useState("")
const [loginStatus,setLoginStatus] =useState("logged out")
const [uID, setUID] = useState ("")

  return (
    <div className="App">
    {(choice === ""&& loginStatus==="logged out")? 
    <Landing setChoice = {setChoice}/>: (choice ==="login" && loginStatus==="logged out") ? 
    <Login setLoginStatus={setLoginStatus} setUID ={setUID} setChoice = {setChoice}/>: (choice ==="register" && loginStatus==="logged out")?<Register setLoginStatus={setLoginStatus} setUID={setUID} setChoice={setChoice}/>:
    (loginStatus==="logged in")?<Home uID= {uID} setLoginStatus = {setLoginStatus}/>:<Landing />}
    </div>
  );
}

export default App;
