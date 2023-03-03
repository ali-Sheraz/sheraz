import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import axios from 'axios'

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
const Formsucces = () => {
    // const [name,setname]=useState("");
    const [nameget, setget] = useState("");
    const [course, setcourse] = useState(undefined);
    const [courseTeacher, setCourseTeacher] = useState([]);
    // const [courseTeacher2, setCourseTeacher2] = useState([]);
    
    // const [qualification,setqualification]=useState("");
    // const [experience,setexperience]=useState("");
    const history = useNavigate();
    useEffect(() => {
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
       console.log( JSON.parse(getuserarr).Uname)
        setget(obj);
    }, [])
    useEffect(() => {
        if (course) {
            setCourseTeacher([])
            axios.get(`http://localhost:1337/api/SearchCourseTeacher/${course}`).then((result) => {
                console.log("result => ", result?.data?.User)
                setCourseTeacher(result && result?.data?.User);
            })
        } else {
            console.log("hello")
            axios.get("http://localhost:1337/api/GetCourseTeacher").then((result) => {
                console.log("result => ", result?.data?.User)
                setCourseTeacher(result && result?.data?.User);
            })
        }
    }, [course])


    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);

    const [error, seterror] = useState({ validation });
    const submit = async e => {
        e.preventDefault();
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        //   localStorage.setItem("store",store);
        seterror(validation(course));
        //  console.log(store);

        //    console.log(data);
    }

    const path = () => {
        console.log("helllo");
      history('/new');
    }
    function validation(course) {

        let error = {};
        if (!course) {
            error.course = "course Required";
        }
        //  else if(!course)
        //  {
        //      error.course="Course Required";
        //  }
        //  else if(!qualification)
        //  {
        //      error.qualification="Qualification Required";
        //  }
        //  else if(!experience)
        //  {
        //      error.experience="Experience Required"; 
        //  }else{
        axios.post("http://localhost:1337/api/courseTeacher", { course }).then((res) => {
            console.log("Response => ", res);
            alert("Inserted")
        }).catch(err => {
            console.log("err => ", err);
        })


        //      else
        //      {
        //       console.log("Email calling")
        //        axios.post('http://localhost:1337/api/login', {email ,password}).then((result)=>{
        //         console.log(result)
        //         alert("Loged in")
        //         history('/formsucces');
        //       }).catch((error)=>{
        //         console.log(error)
        //         error.check="invalid Credentials"
        //       })
        //     //      if(getuserarr && getuserarr.length)
        //     //      {      
        //     //          const userdata=JSON.parse(getuserarr); 
        //     //          // console.log(userdata);
        //     //          const userlogin=userdata.filter((el,k)=>{
        //     //               return el.email===values.email && el.password===values.password  
        //     //          });
        //     //          console.log(userlogin);
        //     //          if(userlogin.length===0)
        //     //          {
        //     //              error.check="Invalid Detail";
        //     //          }
        //     //          else
        //     //          {
        //     //              console.log("login successfully");
        //     //              localStorage.setItem("User_login",JSON.stringify(getuserarr));
        //     //             history('/formsucces');
        //     //          }
        //     //  }
        //  }
        return error;
    }
    const logout = () => {
        localStorage.removeItem("User_login");
        history('/new');
    }
    const styles={
        tr:{
            background:"gray",
            '&:hover':{
                background:'#FFBF00',
                transform:'scale(1.2)',
            },
            transition:'transform 500ms ease',
            marginLeft:'-330%',
            marginTop:'110%',
            size:'90px'
        }
    }
    // const dec = () => {
    //     // localStorage.removeItem("User_login");
    //     history('/show');
    // }
    return (
        <>
        <div style={{display:"flex"}}>
      
        <div className='sidebar' style={{ height:"750px",width:"150px",backgroundColor: "#232B2B"}}>
            <p>Add Data</p>
        </div>
        <div className="sidepic">
        <AddBoxIcon  sx={styles.tr} size={70}/>
        </div>
        <div>
        <div className="sidepic1">
        <img src="images/udp.png" />
        </div>
        <div className='sidebar1'>
            <p>Update Data</p>
        </div>
      
        </div>
        
        <div>
            <div style={{   boxShadow: "10px 10px 5px lightblue",'marginTop': "25px", 'display': "flex", 'marginLeft': "55px", 'marginRight': "25px", 'height': "20px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
                <div className="App" style={{ marginTop: "-8.5px" ,marginLeft:"-9px"}}>
                    <button onClick={logout}>logout</button><br /><br />

                </div>
                <div className="kit"style={{marginLeft:"790px",marginTop:"-15px"}}>
                    <p><span style={{color:"grey"}}>Hellow,</span>{nameget}</p>
                </div>
                <div classname='image'>
                <img style={{ width: "50px", height: "50px", marginLeft: "5px",marginTop:"-15px",borderRadius:"50%" }} src="images/logo1.png" />


                </div> 
                <div style={{marginTop:"-80px",marginLeft:"-45px",fontSize:"35px"}}>
                    <h1 style={{color:"green"}}>.</h1>
                </div>

            </div>
            <div>
                {/* <div style={{ 'textalign': "center", 'color': "black", 'marginDown': "20px" }}>
                </div> */}
                <div className='main' style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "45px", 'display': "flex", 'marginLeft': "50px", 'marginRight': "50px", 'height': "auto", 'backgroundColor': "white", 'borderRadius': "20px" }}>
                    <img style={{ width: "180px", height: "150px", marginLeft: "20px" }} src="images/logo1.png" />
                    <div className='main1' style={{ 'padding': "110px 10px 10px 50px", marginLeft: "150px" }}>
                        <h2>Welcome {nameget}</h2>
                        <p>Search Course For Learning.</p><br /><br />
                        {/* <label htmlFor='name'>Name</label><br/><br/>
         <input type="text"name="name"id="name" placeholder='name' value={name} size="40"onChange={(e)=>setname(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
         {error.name &&<p style={{color: 'red'}}>{error.name}</p>} */}
                        <label></label><br /><br />
                        <input type="text" name="course" id="course" placeholder='course' value={course} size="40" onChange={(e) => {
                            setcourse(e.target.value)
                        }
                        } style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                        {error.course && <p style={{ color: 'red' }}>{error.course}</p>}
                        {/* <label>Qualification</label><br/><br/>
         <input type="text"name="qualification"id="qualification" placeholder='qualification' value={qualification} size="40"onChange={(e)=>setqualification(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
         {error.qualification &&<p style={{color: 'red'}}>{error.qualification}</p>}
         <label>Experience</label><br/><br/>
         <input type="text"name="experience"id="experience" placeholder='experience' value={experience} size="40"onChange={(e)=>setexperience(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
         {error.experience &&<p style={{color: 'red'}}>{error.experience}</p>} */}
                        {/* <button name="check" id="check" onClick={submit}>Submit</button><br /><br /> */}
                        {/* <span className='form-input-login'>Don't have an account? <NavLink to="/login"style={{'color': "rgb(74, 74, 171)",'textDecoration':"none"}}>Sign up</NavLink></span> */}
                        {/* <span> {error.check &&<p>{error.check}</p>}</span> */}
                    </div>
                    {/* <div style={{ 'marginLeft': "50px"}}>
         <img src="images/desktop.png" style={{'height': "100%", 'maxWidth': "100%", 'backgroundSize': "100%",'borderTopRightRadius':"20px",'borderBottomRightRadius':"20px" }} />
       </div> */}
                </div>
            </div>
            <TableContainer component={Paper} sx={{borderRadius:10,marginTop:5,marginLeft:6}}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{backgroundColor:"#007FFF",padding:"40px"}}>
                            <TableCell  sx={{color:"white"}}>ID </TableCell>
                            <TableCell sx={{color:"white"}}align="right">Name</TableCell>
                            <TableCell sx={{color:"white"}}align="right">Course</TableCell>
                            <TableCell sx={{color:"white"}}align="right">Qualification</TableCell>
                            <TableCell sx={{color:"white"}}align="right">Experience</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courseTeacher && courseTeacher.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell >{index + 1}</TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.course}</TableCell>
                                <TableCell align="right">{row.qualification}</TableCell>
                                <TableCell align="right">{row.experience}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            </div>
        </>

    );
}

export default Formsucces