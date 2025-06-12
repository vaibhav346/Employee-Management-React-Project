import axios from 'axios'
import { useState,useEffect } from 'react'
import './EmployeeShow.css'
import { useNavigate } from 'react-router-dom'
// import AdminNavbar from './AdminNavbar'
import EmployeeNavbar from './EmployeeNavbar'

export default function EmployeeDashboard() {

  let[searchname,setSearchname]=useState('')
  let[searchdepartment,setSearchdepartment]=useState('')
  let[searchrole,setSearchrole]=useState('')
  let[searchresult,setSearchresult]=useState([])


let searchbyname=()=>{

  axios.get(`http://localhost:8080/api/findbyname/${searchname}`)
  .then((response)=>{
    if(response.data){
      setSearchresult(response.data)
      console.log(searchresult)
      setSearchname('');
    }
  })
  .catch((error)=>{alert("error")})
}


let searchbyrole=()=>{
   axios.get(`http://localhost:8080/api/findbyrole/${searchrole}`)
  .then((response)=>{
    if(response.data){
      setSearchresult(response.data)
      console.log(searchresult)
      setSearchrole('');
    }
  })
  .catch((error)=>{alert("error")})
  
}
let searchbydpet=()=>{
  // console.log(searchrole)
   axios.get(`http://localhost:8080/api/findbydepartment/${searchdepartment}`)
   
  .then((response)=>{
    if(response.data){
      setSearchresult(response.data)
      console.log(searchresult)
      setSearchdepartment('');
    }
  })
  .catch((error)=>{alert("error")})
}


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

//     let deleteemp = (eid) => {
//   axios.delete(`http://localhost:8080/api/deletebyid/${eid}`)
//     .then((response) => {
//       if (response.data != null) {
//         alert("Record deleted successfully");
//         fechempdata();  // Re-fetch users after deletion
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


  return (
    <div >
<EmployeeNavbar></EmployeeNavbar>
<div className='container'>
  <div className='row'>

    <div className='col-3'>
      <input className="form-control me-2" type="text" placeholder='Enter name to search' value={searchname} onChange={(e)=>{setSearchname(e.target.value)}} /><button class="btn btn-outline-success" onClick={searchbyname}>Search</button>
    </div>

     <div className='col-3'>
     <input className="form-control me-2"  type="text" placeholder='Enter Department to search' value={searchdepartment} onChange={(e)=>{setSearchdepartment(e.target.value)}}/><button class="btn btn-outline-success" onClick={searchbydpet}>Search</button>
    </div>

    <div className='col-3'>
     <input className="form-control me-2"  type="text" placeholder='Enter Role to search' value={searchrole} onChange={(e)=>{setSearchrole(e.target.value)}} /><button class="btn btn-outline-success" onClick={searchbyrole}>Search</button>
    </div>

   

    

  </div>
</div>
<div className='container'>
        <div className='row'>
{
        (searchresult.length>0?searchresult:emp).map((emp)=>
            <div className='col-3' response>
                <div class="card" style={{width: "18rem"}} response>
  <img src={emp.img} class="card-img-top" alt="Vaibhav img"
  style={{ width: '286px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} ></img>
  <div class="card-body">
    <h4 class="card-title">{emp.name}</h4>
    <p class="card-text">
       <strong>Employee Id:</strong>{emp.eid} <br />
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
    <button className='delete'  onClick={()=>{nevagite(`/addleave/${emp.eid}`)}}>GetLeave</button>
    <button className='update' onClick={()=>{nevagite(`/viewleavedeatils/${emp.eid}`)}}>LeaveDetial</button>
  </div>
</div>
            </div>
            //
        )
    }
        </div>
        </div>

      
       <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Vaibhav vikas dhere. Library Management System. All Rights Reserved.</p>
        </footer>
    </div>
  )
}
