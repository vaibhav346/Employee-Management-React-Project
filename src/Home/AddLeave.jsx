import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function AddLeave() {
  let params = useParams();
  let id = params.eid;

  let [employeeName, setEmployeeName] = useState("");
  let [reason, setReason] = useState("");
  let [fromDate, setFromDate] = useState("");
  let [toDate, setToDate] = useState("");
  let [employeeId, setEmployeeId] = useState(id);

  var app="http://http://51.20.187.166:8080/Employee_Management_System-0.0.1-SNAPSHOT"


  let navigate = useNavigate();

  let addleave = (event) => {
    event.preventDefault();
    // console.log(employeeId)
    let addleave = { employeeName, reason, fromDate, toDate, employeeId };
    axios
      .post(`${app}/leave/apply`, addleave)
      .then((resonse) => {
        if (resonse.data) {
          alert("Applied for leave sucessfully");
          navigate("/employeedashbord");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="employee-form" onSubmit={addleave}>
        <h2>Employee Get Leave</h2>

        {/* <label>Employee Name:</label> */}
        {/* <input type="number" name="Employee Id" placeholder="Employee Id" value={employeeId} onChange={(e)=>{setEmployeeId(e.target.value)}}  /> */}

        <label>Employee Name:</label>
        <input
          type="text"
          name="Employee name"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => {
            setEmployeeName(e.target.value);
          }}
        />

        <label>Leave Form date:</label>
        <input
          type="date"
          name="joiningdate"
          value={fromDate}
          onChange={(e) => {
            setFromDate(e.target.value);
          }}
        />
        <label>Leave to date:</label>
        <input
          type="date"
          name="dob"
          value={toDate}
          onChange={(e) => {
            setToDate(e.target.value);
          }}
        />
        <label htmlFor="">Leave Reason:</label>
        <textarea
          name="Employee Leave Reason"
          placeholder="Leave Reason"
          cols="55"
          rows="4"
          style={{ resize: "none" }}
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
          }}
        ></textarea>
        <button type="submit">Get Leave</button>
      </form>
    </div>
  );
}
