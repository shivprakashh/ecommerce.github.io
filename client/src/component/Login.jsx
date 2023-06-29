import "./login.css";
import {useState} from "react";
import axios from "axios"
import Darshboard from "./Darshboard";
function Login(){
 const [userlogin,setuserlogin]= useState("");
 const [passlogin,setpasslogin] = useState("");
 const [login,setlogin] = useState(true)
 const [darsh,setdarsh] = useState(false)
  function user (e){
    setuserlogin(e.target.value)
      }
      
  function pass(e){
    setpasslogin(e.target.value)
  }      
const [err,seterr] = useState(false)
 function submit(e){
    e.preventDefault()
console.log(userlogin,passlogin,"submit")
 axios.post("http://localhost:4500/login", {
    data: JSON.stringify({user:userlogin,pass:passlogin}),
    headers: {
        'Content-Type': 'application/json'
    }
}).then( resp =>{
    console.log(resp.data,"res")
    if(resp.data ===  "err"){
        seterr(true)
    }
    else{
  setlogin(false)
  setdarsh(true)
    }
})}
    
    return(
        <>
        {login && 
         <form className="loginform" >
         {err && <h1 className="err">worng password...</h1>}
          <h1>Admin login</h1>
         <input onChange={user} type="text" placeholder="username" className="logininput"></input>
         <input onChange={pass} type="password" placeholder="password" className="logininput"></input>
         <input type="submit" onClick={submit} className="submit"></input>
     </form>}
     {darsh && <Darshboard/>}
       
        </>
    )
}
export default Login;