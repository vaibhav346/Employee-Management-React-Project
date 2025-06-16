// import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LeaveIssue() {
  let [leave, setLeave] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getleave();
  }, []);

  let getleave = () => {
    axios
      .get("http://localhost:8080/leave/findallleaves")
      .then((response) => {
        // console.log(response.data)
        // const d=(response.data)
        setLeave(response.data);
        console.log(leave);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let leavestatus = (id, action) => {
    axios
      .put(`http://localhost:8080/leave/${action}/${id}`)
      .then((response) => {
        if (response.data) {
          alert("Leave Approved sucessfully");
          getleave();
        }
      })
      .catch((error) => {
        console.log("error in updateing leave status");
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Admin Show Leave Details</h1>
        <div className="row">
          {leave.map((leave) => (
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
                  <button
                    className="delete"
                    onClick={(e) => {
                      leavestatus(leave.id, "reject");
                    }}
                  >
                    Reject
                  </button>
                  <button
                    className="update"
                    onClick={(e) => {
                      leavestatus(leave.id, "approve");
                    }}
                  >
                    Approve
                  </button>
                  <button
                    className="back"
                    onClick={(e) => {
                      navigate("/admindashboard");
                    }}
                  >
                    Back to home
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
