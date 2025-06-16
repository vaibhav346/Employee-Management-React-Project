import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EmployeeProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState,useE } from 'react';

export default function EmployeeProfile() {
  let [employees, setEmployees] = useState([]);
  let [error, setError] = useState("");

  useEffect(() => {
    fechemployees();
  }, []);

  let fechemployees = () => {
    axios
      .get("http://localhost:8080/api/findall") // fetch all employees
      .then((response) => {
        setEmployees(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setError("Failed to load employee data.");
      });
  };

  if (error) return <div className="text-danger text-center mt-4">{error}</div>;
  if (employees.length === 0)
    return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Employees</h2>
      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-6 col-lg-4 mb-4" key={employee.eid}>
            <div className="card employee-card shadow">
              <div className="row g-0">
                <div className="col-4 text-center p-2">
                  <img
                    src={employee.img || "https://via.placeholder.com/100"} // fallback image
                    alt="Employee"
                    className="img-fluid rounded-circle employee-img"
                  />
                  <h6 className="mt-2">{employee.name}</h6>
                  <p className="text-muted small">{employee.role}</p>
                </div>
                <div className="col-8">
                  <div className="card-body p-2">
                    <p className="mb-1">
                      <strong>ID:</strong> {employee.eid}
                    </p>
                    <p className="mb-1">
                      <strong>Dept:</strong> {employee.department}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {employee.email}
                    </p>
                    <p className="mb-1">
                      <strong>Phone:</strong> {employee.contactno}
                    </p>
                    <p className="mb-1">
                      <strong>Salary:</strong> ₹
                      {employee.salary.toLocaleString()}
                    </p>
                    <p className="mb-1">
                      <strong>Join Date:</strong> {employee.joiningdate}
                    </p>
                    <p className="mb-1">
                      <strong>DOB:</strong> {employee.dob}
                    </p>
                    <p className="mb-1">
                      <strong>Gender:</strong> {employee.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
