import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './AddEmployee.css';


export default function UpdateEmployee() {
 
    let[isupdate,setIsupdate]=useState(false)
    let[emp,setEmp]=useState([])
    const[eid,setEid]=useState(0)
  const [img, setImg] = useState(null);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [joiningdate, setJoiningdate] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  let [error,setError]=useState('')

  
  useEffect(()=>{
    fechempdata();
  },[])

  let fechempdata=()=>{
    axios.get("http://localhost:8080/api/findall")
    .then((response)=>{
        setEmp(response.date);
    })

    .catch((error)=>{
        console.log(error)
    })
  }

  let updateemp=(event)=>{
    event.preventDefault();
        let newemp={name,department,role,email,contactno,address,salary,joiningdate,dob,gender,img }
        axios.put(`http://localhost:8080/api/updatebyid/${eid}`,newemp)
        .then((response)=>{
            if(response.data){
                alert("Employee Update Sucessfully");
            }
        })
        .catch((error)=>{console.log(error)});

  }

 

 let update=(emp)=>{
    setIsupdate(!isupdate)
    console.log(emp)

    setName(emp.name);
    setDepartment(emp.department);
    setRole(emp.role);
    setEmail(emp.email);
    setContactno(emp.contactno);
    setAddress(emp.address);
    setSalary(emp.salary);
    setJoiningdate(emp.joiningdate);
    setDob(emp.dob);
    setGender(emp.gender);
    setImg(emp.img);
  }
  return (
    <div>
    {

   isupdate? <form className="employee-form" onSubmit={updateemp}>
      <h2>Employee Registration Form</h2>
    
      <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}  />
      <input type="text" name="department" placeholder="Department" value={department} onChange={(e)=>{setDepartment(e.target.value)}} />
      <input type="text" name="role" placeholder="Role" value={role} onChange={(e)=>{setRole(e.target.value)}} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="number" name="contactno" placeholder="Contact Number" value={contactno} onChange={(e)=>{setContactno(e.target.value)} } />
      <input type="text" name="address" placeholder="Address" value={address} onChange={(e)=>{setAddress(e.target.value)} }/>
      <input type="number" name="salary" step="0.01" placeholder="Salary" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
      <label>Joining Date:</label>
      <input type="date" name="joiningdate" value={joiningdate} onChange={(e)=>{setJoiningdate(e.target.value)} } />
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={dob} onChange={(e)=>{setDob(e.target.value)}}  />

      <select name="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Upload Image:</label>
      <input type="file" name="img" onChange={(e)=>{setImg(e.target.value)}} accept="image/*"  />

      <button type="submit">Update</button>
    </form>:null
}
</div>
  );
}
