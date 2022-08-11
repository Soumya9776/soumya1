// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 

 export default function App() 
 {

  const[firstName,setFirstname]=useState("");

  const handleFirstname = (event)=>{
    setFirstname(event.target.value);
    console.log(firstName);
  }
  const[lastName,setLastname]=useState("");
  const handleLastname = (event)=>{
    setLastname(event.target.value);
    console.log(lastName);
  }

  const[email,setEmail]=useState("");
  const handleEmail = (event)=>{
    setEmail(event.target.value);
    console.log(email);
  }

  const[phoneNo,setPhoneNo]=useState("");
  const handlePhoneNo = (event)=>{
    setPhoneNo(event.target.value);
    console.log(phoneNo);
  }

  const[pasword,setPassword]=useState("");
  const handlePassword = (event)=>{
    setPassword(event.target.value);
    console.log(pasword);
  }
  
  const handleConfirmpassword = (event)=>{}
  return (
    <div className="App">

      <h1>Leave Letter</h1>
      <div className="address-block">
        <p className="form">From:-soumya ranjan mansingh,bhubneswar</p>
        <p>Date:-8th-august-2022</p>
        
      </div>
      <div className="address-block">
        <p className="address-block to-block"> To ,</p>
        <p> The principal of</p>
        <p className="bbsr">Gandhi institute for technology,bhubneswar</p>
      </div>

      <p className="sub">Sub:- Application for 2 days leave</p>
      <div>
        <p className="address-block sir-block">Sir,</p>
        <p className="msg-block">
          with due respect i beg to state that my self soumya ranjan mansingh,<br></br>
          bearing registration number (1701298188),mechanical-4th year a student of your college.<br></br>
          sir i am suffering in a viral feaver so that i am unable to sit in the class room.<br></br>
          i want a 2 days leave so kindly grant my application and allow me for 2 days leave.<br></br>
          so that i will be greatful to you.
        </p>
        <div className="end-block">
        <p>yours obidiently student</p>
        <p> soumya ranjan mansingh</p>
        </div>
      </div>
      <h2 className="center">thanking you sir</h2>
      <h1> sign-in</h1>
      <input onChange={(event) => handleFirstname(event)} type="text" placeholder="First Name" />
      <br/>
      <input onChange={(event) => handleLastname(event)} type="text" placeholder="Last Name" />
      <br/>
      <input onChange={(event) => handleEmail(event)} type="email" placeholder="Email" />
      <br/>
      <input onChange={(event) => handlePhoneNo(event)} type="number" placeholder="phone  number" />
      <br/>
      <input onChange={(event) => handlePassword(event)} type="password" placeholder="password" />
      <br/>
      <input onChange={(event) => handleConfirmpassword(event)} type="password" placeholder="confirm-password" />
      <br/>
      
      {/* <input type="button" value="Register" /> */}

      <button>Register</button>
      
    </div>
  );
}

