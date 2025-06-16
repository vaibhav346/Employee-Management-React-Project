import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
import AddEmployee from "./Home/AddEmployee";
import UpdateEmployee from "./Home/UpdateEmployee";
import GetEmployee from "./Home/GetEmployee";
// import EmployeeShow from './Home/AdminDashBoard';
import AddLeave from "./Home/AddLeave";
import EmployeeDashboard from "./Home/EmployeeDashboard";
import UpdateLeave from "./Home/UpdateLeave";
import LeaveDashBoard from "./Home/LeaveDashBoard";
import ViewLeaveDeatils from "./Home/ViewLeaveDeatils";
import LeaveIssue from "./Home/LeaveIssue";
import UserRegisterForm from "./Home/UserRegisterForm";
import AdminDashBoard from "./Home/AdminDashBoard";
import ContactPage from "./Home/ContactPage";
import About from "./Home/About";
import Service from "./Home/Service";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/EmployeeR"
            element={<AddEmployee></AddEmployee>}
          ></Route>
          <Route
            path="/update/:id"
            element={<UpdateEmployee></UpdateEmployee>}
          ></Route>
          <Route
            path="/update"
            element={<UpdateEmployee></UpdateEmployee>}
          ></Route>
          <Route
            path="/getemployee"
            element={<GetEmployee></GetEmployee>}
          ></Route>
          <Route
            path="/admindashboard"
            element={<AdminDashBoard></AdminDashBoard>}
          ></Route>
          <Route path="/addleave/:eid" element={<AddLeave></AddLeave>}></Route>
          <Route
            path="/employeedashbord"
            element={<EmployeeDashboard></EmployeeDashboard>}
          ></Route>
          <Route
            path="/updateleave/:id"
            element={<UpdateLeave></UpdateLeave>}
          ></Route>
          <Route
            path="/showleave"
            element={<LeaveDashBoard></LeaveDashBoard>}
          ></Route>
          <Route
            path="/viewleavedeatils/:eid"
            element={<ViewLeaveDeatils></ViewLeaveDeatils>}
          ></Route>
          <Route path="/leaveissue" element={<LeaveIssue></LeaveIssue>}></Route>
          <Route
            path="/RegisterForm"
            element={<UserRegisterForm></UserRegisterForm>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="/Service" element={<Service></Service>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
