import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './EmployeeShow.css'
import { Link } from 'react-router-dom'

export default function EmployeeShow() {

    let[emp,setEmp]=useState([])
    let[isupdate,setIsupdate]=useState(false)
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
            setEmp(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    let deleteemp = (eid) => {
  axios.delete(`http://localhost:8080/api/deletebyid/${eid}`)
    .then((response) => {
      if (response.data != null) {
        alert("Record deleted successfully");
        fechempdata();  // Re-fetch users after deletion
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

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
    <div className='container'>

        <div className='row'>
{
        emp.map((emp)=>
            <div className='col-3' response>
                <div class="card" style={{width: "18rem"}} response>
  <img src={emp.img} class="card-img-top" alt="Vaibhav img"
  style={{ width: '286px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} ></img>
  <div class="card-body">
    <h5 class="card-title">{emp.name}</h5>
    <p class="card-text">
        <strong>Department:</strong>{emp.department} <br />
        <strong>Email:</strong>{emp.email} <br />
        <strong>Role:</strong>{emp.role} <br />
        <strong>Dob:</strong>{emp.dob} <br />
        <strong>Joiningdate:</strong>{emp.joiningdate} <br />
        <strong>Contactno:</strong>{emp.contactno} <br />
        <strong>Salary:</strong>{emp.salary} <br />
        <strong>Address:</strong>{emp.address} <br />
        <strong>Gender:</strong>{emp.gender} <br />
    </p>
    <button className='delete' onClick={(e)=>{deleteemp(emp.eid)}}>Delete</button>
    <button className='update'>Update</button>
  </div>
</div>
            </div>
        )
    }
        </div>
       
    </div>
  )
}
