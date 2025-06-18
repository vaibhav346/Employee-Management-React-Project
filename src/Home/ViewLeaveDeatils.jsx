import axios from "axios";
import React, { useEffect, useState } from "react";
import "./EmployeeShow.css";
import { useParams } from "react-router-dom";

export default function ViewLeaveDeatils() {
  let params = useParams();
  let id = params.eid;

  let [employeeId, setEmployeeId] = useState(id);
  let [leave, setLeave] = useState([]);

    var app="http://http://51.20.187.166:8080/Employee_Management_System-0.0.1-SNAPSHOT"


  useEffect(() => {
    findleavedata();
  });

  let findleavedata = (event) => {
    // event.preventDefault();
    console.log(employeeId);
    axios
      .get(`${app}/leave/findbyemployeeid/${employeeId}`)
      .then((response) => {
        if (response.data) {
          setLeave(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {/* <form onSubmit={findleavedata}>
      Enter Employee Id:<input type='number' placeholder='Enter Employee Id' value={employeeId} onChange={(e)=>{setEmployeeId(e.target.value)}}></input>
      <input type="submit" value="search" />
      </form> */}
      <h1>Admin Show Leave Details</h1>
      <div className="row">
        {employeeId &&
          leave.map((leave) => (
            <div className="col-3" response>
              <div class="card" style={{ width: "18rem" }} response>
                <div class="card-body">
                  <h4 class="card-title">{leave.employeeName}</h4>
                  <p class="card-text">
                    <strong>Leave Id:</strong>
                    {leave.id} <br />
                    <strong>Employee Id:</strong>
                    {leave.employeeId} <br />
                    <strong>Status:</strong>
                    {leave.status} <br />
                    <strong>Leave Start Date:</strong>
                    {leave.fromDate} <br />
                    <strong>Leave End Date:</strong>
                    {leave.toDate} <br />
                    <strong>Leave Reason:</strong>
                    {leave.reason} <br />
                  </p>
                  {/* <button className='cancle' onClick={()=>{deleteleave(leave.id)}}>Cancle Leave</button> */}
                  {/* <button className='update' onClick={()=>{navigate(`/updateleave/${leave.id}`)}}>Update</button> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
