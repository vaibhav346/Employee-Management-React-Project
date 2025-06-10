import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './EmployeeShow.css'


export default function LeaveDashBoard() {



  let [leave,setLeave]=useState([]);
  let navigate=useNavigate();

  useEffect(()=>{
    getleave();
  },[])

  let getleave=()=>{
    axios.get("http://localhost:8080/leave/findallleaves")
    .then((response)=>{
     
        // console.log(response.data)
       // const d=(response.data)
        setLeave(response.data)
        console.log(leave)
      
    })
    .catch((error)=>{console.log(error)})
  }

  let deleteleave=(id)=>{
    axios.delete(`http://localhost:8080/leave/cancelleave/${id}`)
    .then((response)=>{
      if(response.data!=null){
        alert("Cancle Leave");
        getleave();
      }
    })
    .catch((error)=>{console.log(error)})

  }
    
  return (
    <div className='container'>
      <h1>Admin Show Leave Details</h1>
        <div className='row'>
{
      leave.map((leave)=>
            <div className='col-3' response>
                <div class="card" style={{width: "18rem"}} response>
  <div class="card-body">
    <h4 class="card-title">{leave.employeeName}</h4>
    <p class="card-text">
      <strong>Leave Id:</strong>{leave.id} <br />
       <strong>Employee Id:</strong>{leave.employeeId} <br />
       <strong>Status:</strong>{leave.status} <br />

        <strong>Leave Start Date:</strong>{leave.fromDate} <br />
        <strong>Leave End Date:</strong>{leave.toDate} <br />
        <strong>Leave Reason:</strong>{leave.reason} <br />
        
    </p>
    <button className='delete' onClick={(e)=>{deleteleave(leave.id)}}>Delete</button>
    <button className='update' onClick={()=>{navigate(`/updateleave/${leave.id}`)}}>Update</button>
  </div>
</div>
            </div>
        )
    }
        </div>
       
    </div>
   
  )
}
