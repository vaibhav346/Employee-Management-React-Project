import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import AddEmployee from './Home/AddEmployee';
import UpdateEmployee from './Home/UpdateEmployee';
import GetEmployee from './Home/GetEmployee';
import EmployeeShow from './Home/EmployeeShow';
import AddLeave from './Home/AddLeave';
import EmployeeDashboard from './Home/EmployeeDashboard';
import UpdateLeave from './Home/UpdateLeave';
import LeaveDashBoard from './Home/LeaveDashBoard';

export default function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/EmployeeR' element={<AddEmployee></AddEmployee>}></Route>
          <Route path='/update/:id' element={<UpdateEmployee></UpdateEmployee>}></Route>
          <Route path='/update' element={<UpdateEmployee></UpdateEmployee>}></Route>
          <Route path='/getemployee' element={<GetEmployee></GetEmployee>}></Route>
          <Route path='/EmployeeShow' element={<EmployeeShow></EmployeeShow>}></Route>
          <Route path='/addleave' element={<AddLeave></AddLeave>}></Route>
          <Route path='/employeedashbord' element={<EmployeeDashboard></EmployeeDashboard>}></Route>
          <Route path='/updateleave/:id' element={<UpdateLeave></UpdateLeave>}></Route>
          <Route path='/showleave' element={<LeaveDashBoard></LeaveDashBoard>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
