import axios from 'axios'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function UserRegisterForm() {

    let navigate=useNavigate();

let [name,setName]=useState('')
let [username,setUsername]=useState('')
let [password,setPassword]=useState('')
let [confirmpassword,setConfirmpassword]=useState('')
let [email,setEmail]=useState('')
let [contactno,setContactno]=useState('')
let [urole,setUrole]=useState('')
let [gender,setGender]=useState('')

//isregistered is true is registration completed.
let[isregistered,setIsregistered]=useState(false)



let validation=()=>{
    if(contactno.length>10||contactno.length<10){
        alert("Please enter valid contactno with 10 digits")
        return false;
    }

    else if(!/\S+@\S+\.\S+/.test(email)){
        alert("Please enter valid emailid")
        return false;
    }
   else  if(password!==confirmpassword){
        alert("Password and conformpassword must be same")
        return false;
    }
    else if(password.length>13||password.length<8){
        alert("Please enter password with 8 to 13 characters")
        return false;
    }
    else{
        return true;
    }
}

let Register=(event)=>{
     event.preventDefault();
    
     if(!validation()){
        return "Fill all data is Correct"

     }

     else{
    let register={name,username,password,confirmpassword,email,contactno,urole,gender}
    axios.post("http://localhost:8080/user/registe",register)
    .then((response)=>{
        if(response.data==="Please enter another username. This is one is already exists"){
        alert("Please enter another username. This is one is already exists");
       
        }
        else{
            alert("Registration Sucessfully")
            setName('')
            setEmail('')
            setGender('')
            setConfirmpassword('')
            setPassword('')
            setUrole('')
            setUsername('')
            setContactno('')
        }
        
    })
    .catch((error)=>{console.log("Error")})
}
}

// let [user,setUser]=useState([]);
// console.log(user);

let Login=(event)=>{
     event.preventDefault();
    let login={username,password}
    axios.post("http://localhost:8080/user/login",login)
    .then((response)=>{
        if(response.data){
            // console.log(response.data)
            alert("Admin Login Sucessfully")

            // localStorage always store data in String
            localStorage.setItem("user",JSON.stringify(response.data));
           // JSON.parese() convert data from String to object
            let userdata=JSON.parse(localStorage.getItem("user"));
            if(userdata.urole.trim().toLowerCase()=="admin"){
                navigate("/admindashboard")
            }
            else{
                alert("Employee Login Sucessfully")
                navigate("/employeedashbord")
                // console.log(response.data)
            }
        }
    })
    .catch((error)=>{console.log("Error")})

}

  return (
    <div>
      {!isregistered?<form className="employee-form" onSubmit={Register}>
      <h2>User Registration </h2>
    
      <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}  required/>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}required />
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
      <input type="password" name="confirmpassword"  placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} required/>
<select name="role" value={urole} onChange={(e)=>{setUrole(e.target.value)}} required>
    <option value="">Select Role</option>
    <option value="Admin">Admin</option>
    <option value="Employee">Employee</option>
</select>
      <input type="text" name="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
      <input type="number" name="contactno" placeholder="Contact Number" value={contactno} onChange={(e)=>{setContactno(e.target.value)} } required/>

      <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>


      <button type="submit" value='register'>Register</button>
      <button type="submit" style={{margin:"5px 0px"}} value='Login' onClick={()=>{setIsregistered(true)}}>Already Register?? Click here for login</button>
    </form>


     :<form className="employee-form" style={{margin:"200px 550px"}} onSubmit={Login}>
      <h2>Login Page</h2>
    
      <input type="text" name="name" placeholder="Username"  value={username} onChange={(e)=>{setUsername(e.target.value)}}  required/>
      <input type="password" name="username" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}required />
      


      <button type="submit" value='Login'>Login</button>
            <button type="submit" style={{margin:"5px 0px"}} value='Login' onClick={()=>{setIsregistered(false)}}>New User?? Click here for Register</button>

    </form>
    }
    </div>
  )
}
