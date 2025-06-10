import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function UpdateLeave() {

      let params=useParams();
  // return object which contain all values passed in url
  let id=params.id;
  // console.log(id);

    
        let[employeeName,setEmployeeName]=useState("")
        let[reason,setReason]=useState('')
        let[fromDate,setFromDate]=useState('')
        let[toDate,setToDate]=useState('')
    
        let navigate=useNavigate();

         useEffect(()=>{
                getleave();
                //console.log(emp)
            },[])

            
  let getleave=()=>{
     axios.get(`http://localhost:8080/leave/findleavebyid/${id}`)
        .then((response)=>{
          
       // just if you need it elsewhere
            // setEmployee(response.data)
            // console.log(emp)
           //console.log(response) 
           setEmployeeName(response.data.employeeName)
           setFromDate(response.data.fromDate)
           setToDate(response.data.toDate)
           setReason(response.data.reason)

        })
        .catch((error)=>{
            console.log(error)

        })

        
  }



  let updateleave=()=>{
    let uleave={employeeName,fromDate,reason,toDate}
    axios.put(`http://localhost:8080/leave/updateleave/${id}`,uleave)
    .then((response)=>{
        if(response.data!=null){
        
            alert("Leave Update sucessfully");
            navigate("/")
        }
    })
    .catch((error)=>{console.log(error)})

  }


  return (
    <div>
         <form className="employee-form" onSubmit={updateleave} >
      <h2>Employee Get Leave</h2>
      <label>Employee Name:</label>
      <input type="text" name="Employee name" placeholder="Employee Name" value={employeeName} onChange={(e)=>{setEmployeeName(e.target.value)}}  />
     
      <label>Leave Form date:</label>
      <input type="date" name="joiningdate" value={fromDate} onChange={(e)=>{setFromDate(e.target.value)} } />
      <label>Leave to date:</label>
      <input type="date" name="dob" value={toDate} onChange={(e)=>{setToDate(e.target.value)}}  />
      <label htmlFor="">Leave Reason:</label>
      <textarea name='Employee Leave Reason' placeholder='Leave Reason' cols="55" rows="4" style={{"resize":"none"}} value={reason} onChange={(e)=>{setReason(e.target.value)}}></textarea>
      <button type="submit">Get Leave</button>
      </form>
    </div>
  )
}
