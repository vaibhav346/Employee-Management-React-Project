import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import AddEmployee from './Home/AddEmployee';
import UpdateEmployee from './Home/UpdateEmployee';
import GetEmployee from './Home/GetEmployee';
import EmployeeShow from './Home/EmployeeShow';

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

        </Routes>
      </div>
    </Router>
  );
}
