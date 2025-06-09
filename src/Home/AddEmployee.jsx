import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css';


export default function UpdateAndAddEmployee() {
  // const [employee, setEmployee] = useState({
  //   name: '',
  //   department: '',
  //   role: '',
  //   email: '',
  //   contactno: '',
  //   address: '',
  //   salary: '',
  //   joiningdate: '',
  //   dob: '',
  //   gender: '',
  // });

  let navigate=useNavigate();

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

  let validation=()=>{
    if(name.trim()==''||department.trim()==''||email.trim()==''||role.trim()==''||contactno.trim()==0||address.trim()==''||salary.trim()==0||joiningdate.trim()==''||dob.trim()==''||gender.trim()==''||img.trim()==''){
      setError("Please fill all the field");
      return false;
    }
    else if(contactno.length<10){
      setError("Please enter contact no with 10 digits")
      return false;
    }

    else if(salary<0){
      setError("Please enter valid salary amount")
      return false;
    }
    else if(!/\S+@\S+\.\S/.test(email)){
      setError("Please enter valid email address");
      return false;
    }
    else{
      return true;
    }
   
  }

  const handleImageChange = (event) => {
    let file=event.target.files[0]; // upload mutiple file file is object
    let fullpath=`./img//${file.name}`;
    setImg(fullpath);
     
    console.log(img)
  };

  let handleSubmit=(event)=>{
    event.preventDefault();

    if(!validation()){
      return "Fill all data is correct";
    }
    else{
    let empadd={name,department,role,email,contactno,address,salary,joiningdate,dob,gender,img }
    axios.post("http://localhost:8080/api/save",empadd)
    .then((response)=>{
      if(response.data){
        alert("Employee added sucessfully")
        navigate("/")
      }
    })
    .catch((error)=>{alert(error)})
    console.log(img)
  }
  }



  return (
    <form className="employee-form" onSubmit={handleSubmit}>
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
      <input type="file" name="img" onChange={handleImageChange} accept="image/*"  />

      <button type="submit">Submit</button>
    </form>
  );
}
