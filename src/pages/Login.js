import React, { useEffect } from 'react'
import validationinfo   from './validationinfo';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function Login() {
  const [Uname,setUname]=useState("");
    const [email,setEmail]=useState("");
    const [loc,setlocation]=useState("");
    const [password,setPassword]=useState("");
    const [Cpassword,setCPassword]=useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [store,setStore]=useState([]);
    const [data,setdata]=useState([]);
    const [error,seterror]=useState({});
    const [flag,setflag]=useState(false);
    const check1={};
    const submitform =  e => {
      e.preventDefault();
      const newEntry={  Uname : Uname,email : email , password : password,Cpassword:Cpassword,loc:loc,type:age};
      console.log(newEntry);
      setStore([...store,newEntry]);
      seterror(validationinfo(newEntry));
      console.log(newEntry)
      console.log(newEntry.Uname.length);
      if(newEntry.loc.length === 0||newEntry.Uname.length === 0 || newEntry.email.length === 0 || newEntry.password.length === 0||newEntry.Cpassword.length === 0 ||newEntry.password.length < 6||newEntry.Cpassword.length < 6||(newEntry.password!==newEntry.Cpassword))
      {
        setflag(false);
        error.check1="invalid fields";
      }

      else
      {
      setflag(true);
      setdata([...data,newEntry])
      Axios.post("http://localhost:1337/api/register",newEntry).then(()=>{
        alert("Inserted")
      })
       console.log(store);
       console.log(data);
      }
   }

   const [age, setAge] = useState('');
  
   const handleChange = (event) => {
     setAge(event.target.value);
 
   }
   // Password toggle handler
   const togglePassword = () => {
     // When the handler is invoked
     // inverse the boolean state of passwordShown
     setPasswordShown(!passwordShown);
     togglepassword1();

   };
   const togglepassword1 =()=>{
   
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown1(!passwordShown1);
  

  };

     useEffect(() => {
      // Update the document title using the browser API
      if(flag===true)
      {
      localStorage.setItem("UserData",JSON.stringify(data)); 
      console.log(store);
      }
    },[data]);
  return (
    <>
<div>
       <div style={{'textalign':"center",'color':"black",'marginDown':"20px"}}>
    </div>
    <div className='main' style={{ 'marginTop':"45px",'display': "flex",'marginLeft':"50px",'marginRight':"50px",'height':"auto",'backgroundColor':"white",'borderRadius':"20px"}}>
    <img style={{width:"350px",height:"150px",marginLeft:"20px"}} src="images/logo1.png"/>
    {/* <h1 style={{'whiteSpace':"nowrap",'marginLeft':"20px",color:"lightblue"}}>Expert hub</h1><br/> */}
        <div className='main1' style={{'padding':"150px 100px 50px 50px",marginLeft:"-60px"}}>
          <h2 style={{textAlign:"center"}}>Welcome</h2>
          <p>Welcome Back!Please Enter Your Detail.</p>
          <h2 style={{textAlign:"center"}}>Sign In</h2>
          <label htmlFor='Uname'>Name</label><br/><br/>
          <input type="text"name="Uname"id="Uname" placeholder='Username' value={Uname} size="40"onChange={(e)=>setUname(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
          {error.Uname &&<p style={{color: 'red'}}>{error.Uname}</p>}
          <label htmlFor='email'>Email</label><br/><br/>
          <input type="text"name="email"id="email" placeholder='Username' value={email} size="40"onChange={(e)=>setEmail(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
          {error.email &&<p style={{color: 'red'}}>{error.email}</p>}
          <label htmlFor='loc'>Location</label><br/><br/>
          <input type="text"name="loc"id="loc" placeholder='Location' value={loc} size="40"onChange={(e)=>setlocation(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
          {error.loc &&<p style={{color: 'red'}}>{error.loc}</p>}
          <div style={{display:"flex"}}>
          <div>
          <label>Password</label><br/><br/>
          <input type={passwordShown ? "text" : "password"}name="password"id="password" placeholder='password' value={password} size="40"onChange={(e)=>setPassword(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}/> <br/><br/>
          {error.password &&<p style={{color: 'red'}}>{error.password}</p>}
          </div>
          <div className="box">
          <input className="create"type="checkbox" onClick={togglePassword}></input><br/><br/>
          </div>
         </div>
          <label>Confirm Password</label><br/><br/>
          <input  type={passwordShown1 ? "text" : "Cpassword"}id="Cpassword" placeholder='Cpassword' value={Cpassword} size="40"onChange={(e)=>setCPassword(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
          {error.Cpassword &&<p style={{color: 'red'}}>{error.Cpassword}</p>}
          <Box sx={{}}>
      <FormControl>
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
  <Select sx={{width:"300px",borderLeftStyle:"none"}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange} 
  >
    <MenuItem value={"Teacher"}>Teacher</MenuItem>
    <MenuItem value={"Student"}>Student</MenuItem>
    </Select>
      </FormControl>
    </Box><br/>
          <button name="check" id="check"onClick={submitform}>Sign in</button><br/><br/>
          <span className='form-input-login'>Don't have an account? <NavLink to="/new"style={{'color': "rgb(74, 74, 171)",'textDecoration':"none"}}>Login</NavLink></span>
          <span> {error.check &&<p>{error.check}</p>}</span>

          {/* <span name="check1" id="check1"> {error.check1 &&<p>{error.check1}</p>}</span> */}
  
        </div>

        <div style={{ 'marginLeft': "50px"}}>
          <img src="images/logo.png" style={{'height': "100%", 'maxWidth': "100%", 'backgroundSize': "100%",'borderTopRightRadius':"20px",'borderBottomRightRadius':"20px" }} />
        </div>
      </div>

      </div>
      {/* <div>
        {
          store.map((o)=>{
            return (
            <div className="check">
            <h1>{o.email}</h1><br/><br/>
            <h1>{o.password}</h1><br/><br/>
            </div>
            )
          })
        }
      </div> */}
      </>
  )
}


// import React from 'react'
// import { useState } from 'react';
// export default function Login() {
//     const [Count,setCount]=useState(0)
//     const [Name,setName]=useState("")
//     const InputHanddler=(event)=>{

//       setName(event.target.value)
//     }
//   return (
//     <><div style={{'textalign':"center",'color':"grey"}}>
//       <h1><i>Expert hub</i></h1>
//     </div>
//     <div className='main' style={{ 'display': "flex",'marginLeft':"150px" }}>

//         <div className='main1' style={{'padding':"50px 50px 50px 50px"}}>
//           <h1>Welcome Back</h1><br/>
//           <p>Welcome Back!Please Enter Your Detail.</p><br/><br/>
//           <label>Email</label><br/><br/>
//           <input placeholder='Enter'size="40" onChange={InputHanddler}></input><br/><br/>
//           <label>Password</label><br/><br/>
//           <input placeholder='Enter' size="40"onChange={InputHanddler}></input>
//           <button onClick={() => setCount(Count - 1)}>-</button>
//           <h1>{Count}</h1>
//           <button onClick={() => setCount(Count + 1)}>+</button>
//           <h1>{Name}</h1>
//           <button onclick='submit'>Sign in</button>
//         </div>
//         <div style={{ 'marginLeft': "500px", "padding": "10px 10px 10px 10px" }}>
//           <img src="images/logo.png" style={{ 'height': "auto", 'max-width': "100%", 'backgroundSize': "100%" }} />
//         </div>
//       </div></> 
//   )
// }
