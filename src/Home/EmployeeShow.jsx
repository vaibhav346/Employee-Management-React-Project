import axios from 'axios'
import { useState,useEffect } from 'react'
import './EmployeeShow.css'
import { useNavigate } from 'react-router-dom'

export default function EmployeeShow() {

    let[emp,setEmp]=useState([])
    let nevagite=useNavigate();
    
      // let [error,setError]=useState('')

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
    <button className='update' onClick={()=>{nevagite(`/update/${emp.eid}`)}}>Update</button>
  </div>
</div>
            </div>
        )
    }
        </div>
       
    </div>
  )
}
