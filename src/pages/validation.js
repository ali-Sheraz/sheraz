// import { useNavigate } from "react-router-dom";

// export default function validation(values){
//    let getuserarr=localStorage.getItem("UserData");
//     console.log(getuserarr);
//     let error={};
//     if(!values.email)
//     {
//         error.email="Email Required";
//     }
//     else if(!values.email.includes("@"))
//     {
//         error.email="Email Invalid";
//     }
//     else if(!values.password)
//     {
//         error.password="Password Required"; 
//     }
//     else
//     {
//         if(getuserarr && getuserarr.length)
//         {      
//             const userdata=JSON.parse(getuserarr); 
//             // console.log(userdata);
//             const userlogin=userdata.filter((el,k)=>{
//                  return el.email===values.email && el.password===values.password  
//             });
//             console.log(userlogin);
//             if(userlogin.length===0)
//             {
//                 error.check="Invalid Detail";
//             }
//             else
//             {
//                 console.log("login successfully");
//                 localStorage.setItem("User_login",JSON.stringify(getuserarr));
//                 window.location.href = '/formsucces';
//             }
//     }
// }
//     return error;
// }