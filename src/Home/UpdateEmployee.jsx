import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./AddEmployee.css";

export default function UpdateEmployee() {
  let params = useParams();
  // return object which contain all values passed in url
  let id = params.id;
  // console.log(id);
  let navigate = useNavigate();

  // let[isupdate,setIsupdate]=useState(false)
  let [emp, setEmp] = useState({
    name: "",
    email: "",
    contactno: 0,
    department: "",
    role: "",
    salary: 0,
    address: "",
    img: null,
    gender: "",
    dob: "",
    joiningdate: "",
  });
  // const[eid,setEid]=useState(0)
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // let [error,setError]=useState('')

  const handleImageChange = (event) => {
    let file = event.target.files[0]; // upload mutiple file file is object
    let fullpath = `./img//${file.name}`;
    setImg(fullpath);

    console.log(img);
  };

  useEffect(() => {
    getemployee();
    //console.log(emp)
  }, []);

  let getemployee = () => {
    axios
      .get(`http://localhost:8080/api/findbyid/${id}`)
      .then((response) => {
        const d = response.data;
        setEmp(d); // just if you need it elsewhere
        // setEmployee(response.data)
        // console.log(emp)
        //console.log(response)
        setName(response.data.name);
        setDepartment(response.data.department);
        setRole(response.data.role);
        setEmail(response.data.email);
        setImg(response.data.img);
        setContactno(response.data.contactno);
        setAddress(response.data.address);
        setSalary(response.data.salary);
        setJoiningdate(response.data.joiningdate);
        setDob(response.data.dob);
        setGender(response.data.gender);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let updateemp = (event) => {
    event.preventDefault();
    let updatedata = {
      name,
      department,
      role,
      email,
      img,
      contactno,
      address,
      salary,
      joiningdate,
      dob,
      gender,
    };
    axios
      .put(`http://localhost:8080/api/updatebyid/${id}`, updatedata)
      .then((response) => {
        console.log(response);
        if (response.data != null) {
          alert("Employee data updated sucessfully");
          navigate("/admindashboard");
        }
      })
      .catch((error) => {
        alert("Error");
      });
  };
  return (
    <div>
      <form className="employee-form" onSubmit={updateemp}>
        <h2>Employee Update Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="number"
          name="contactno"
          placeholder="Contact Number"
          value={contactno}
          onChange={(e) => {
            setContactno(e.target.value);
          }}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="number"
          name="salary"
          step="0.01"
          placeholder="Salary"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <label>Joining Date:</label>
        <input
          type="date"
          name="joiningdate"
          value={joiningdate}
          onChange={(e) => {
            setJoiningdate(e.target.value);
          }}
        />
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />

        <select
          name="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Upload Image:</label>
        <input
          type="file"
          name="img"
          onChange={handleImageChange}
          accept="image/*"
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
