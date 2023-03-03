import React ,{useState} from 'react'
import validation from './validation';
import validationinfo   from './validationinfo';
import Axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const Login = () => {

    // const [age, setAge] = useState('');
  
    // const handleChange = (event) => {
    //   setAge(event.target.value);
  
    // }
    const [passwordShown, setPasswordShown] = useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loginError,setLoginError] = useState(null);
    const history=useNavigate();
    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);
    const [error,seterror]=useState({validation});
    const submit = async e => {
      e.preventDefault();
      //  LoginEntry={ email : email , password : password };
      // console.log(LoginEntry);
      // setStore([...store,LoginEntry]);
    //   localStorage.setItem("store",store);
      seterror(validation(email,password));
      //  console.log(store);

    //    console.log(data);
     }
     const togglePassword = () => {
      // When the handler is invoked
      // inverse the boolean state of passwordShown
      setPasswordShown(!passwordShown);
    };
    function validation(email ,password){
        let getuserarr=localStorage.getItem("UserData");
         console.log(getuserarr);
         let error={};
         if(!email)
         {
             error.email="Email Required";
         }
         else if(!email.includes("@"))
         {
             error.email="Email Invalid";
         }
         else if(!email.includes(".com"))
         {
             // console.log(values.email.includes("nu.edu.pk"))
             error.email="Email is Invalid";
         }
         else if(!password)
         {
             error.password="Password Required"; 
         }
         else
         {
          // console.log("Email calling")
           axios.post('http://localhost:1337/api/login', {email ,password}).then((result)=>{
            console.log("result => ",result?.data?.User)
            localStorage.setItem("UserData",JSON.stringify(result?.data?.User)); 
            if(result.data.User.type==="Teacher"){
              alert("Loged in")
              history('/formsucces');
            }
            else{
              alert("Loged in")
              history('/stu');
            }
          }).catch((error)=>{
            console.log("Error ",error)
            setLoginError("invalid Credentials")
          })
        //      if(getuserarr && getuserarr.length)
        //      {      
        //          const userdata=JSON.parse(getuserarr); 
        //          // console.log(userdata);
        //          const userlogin=userdata.filter((el,k)=>{
        //               return el.email===values.email && el.password===values.password  
        //          });
        //          console.log(userlogin);
        //          if(userlogin.length===0)
        //          {
        //              error.check="Invalid Detail";
        //          }
        //          else
        //          {
        //              console.log("login successfully");
        //              localStorage.setItem("User_login",JSON.stringify(getuserarr));
        //             history('/formsucces');
        //          }
        //  }
     }
         return error;
     }
  return (
    <div>
       <div style={{'textalign':"center",'color':"black",'marginDown':"20px"}}>
    </div>
    <div className='main' style={{ 'marginTop':"45px",'display': "flex",'marginLeft':"50px",'marginRight':"50px",'height':"auto",'backgroundColor':"white",'borderRadius':"20px"}}>
    <img style={{width:"350px",height:"150px",marginLeft:"20px"}}src="images/logo1.png"/>
        <div className='main1' style={{'padding':"150px 100px 50px 50px",marginLeft:"-60px"}}>
          <h2>Welcome Back Login</h2>
          <p>Welcome Back!Please Enter Your Detail.</p><br/><br/>
          <label htmlFor='email'>Email</label><br/><br/>
          <input type="text"name="email"id="email" placeholder='Email' value={email} size="40"onChange={(e)=>setEmail(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
          {error.email &&<p style={{color: 'red'}}>{error.email}</p>}
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
          <button name="check" id="check" onClick={submit}>Sign in</button><br/><br/>
         
    {/* <Box sx={{ }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Teacher</MenuItem>
          <MenuItem value={20}>Student</MenuItem>
        </Select>
      </FormControl>
    </Box><br/> */}

          <span className='form-input-login'>Don't have an account? <NavLink to="/login"style={{'color': "rgb(74, 74, 171)",'textDecoration':"none"}}>Sign up</NavLink></span>
          <span> {loginError &&<p>{loginError}</p>}</span>
        </div>

        <div style={{ 'marginLeft': "50px"}}>
          <img src="images/logo.png" style={{'height': "100%", 'maxWidth': "100%", 'backgroundSize': "100%",'borderTopRightRadius':"20px",'borderBottomRightRadius':"20px" }} />
        </div>
      </div>
      </div>
  )
}

export default Login