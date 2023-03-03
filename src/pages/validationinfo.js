
export default function validationinfo(values){
    
    let error={};
    let letters=/^[A-Za-z]+$/;
    if(!values.Uname)
    {
    error.Uname="Name Required";

    }
    else if(!values.Uname.match(letters))
      {
        error.Uname="Name must only string";
      }

    else if(!values.email)
    {
        error.email="Email Required";
    }
    else if(!values.email.includes("@"))
    {
        error.email="Email Invalid";
    }
    else if(!values.email.includes(".com"))
    {
        // console.log(values.email.includes("nu.edu.pk"))
        error.email="Email is Invalid";
    }
    else if(!values.loc)
    {
        error.loc="Location must Filled";
    }
 
    else if(!values.password)
    {
        error.password="Password Required"; 
    }
    else if(!values.Cpassword)
    {
        error.Cpassword="Password Required"; 
    }
    else if(values.password.length<6)
    {
        error.password="Password Must Greater than Length 6"; 
    }

    else if(values.Cpassword.length<6)
    {
        error.Cpassword="Password Must Greater than Length 6"; 
    }
    else if (values.password!==values.Cpassword)
    {
        error.Cpassword="Password Does not Match"; 
    }
  
    else
    {
        console.log("Data Added succesfully")
        error.check="Data Added SuccessFully";

    }
    return error;
}