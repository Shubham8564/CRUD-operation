import React, { useEffect } from "react";
import style from "./create.module.css";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Update = () => {
const [id,setId]=useState(0)
const [name,setName]=useState("")
const [salary,setSalary]=useState("")
const [company,setCompany]=useState("")

// let idData=(e)=>{
//   setId(e.target.value)
// }
let nameData = (e) => {
  setName(e.target.value);
};
let salaryData = (e) => {
  setSalary(e.target.value);
};
let companyData = (e) => {
  setCompany(e.target.value);
};

useEffect(()=>{
  setId(localStorage.getItem("id"))
  setName(localStorage.getItem("name"))
  setSalary(localStorage.getItem("salary"))
  setCompany(localStorage.getItem("company")) 
},[]);

const nevigate=useNavigate();

const handleUpdate=(e)=>{
  e.preventDefault();
  console.log("id...",id);
  let payload = {name: name, salary: salary, company: company };
  axios.put(`https://64eed0f7219b3e2873c384fb.mockapi.io/api/crud-operation/`+id,
    payload
  ).then(()=>{
    nevigate("/read")
  })
};
  return (
    <div id={style.myForm}>
      <form>
        <h2>Update Page</h2>
        <label>NAME</label>
        <input type="text" placeholder="Enter Name" value={name} onChange={nameData}/>
        <br />
        <label>SALARY</label>
        <input type="number" placeholder="Enter Salary" value={salary} onChange={salaryData}/>
        <br />
        <label>COMPANY</label>
        <input type="text" placeholder="Enter Company Name" value={company} onChange={companyData}/> <br />
        <button type="submit" onClick={handleUpdate} >Update</button>
      </form>
    </div>
  );
};

export default Update;
