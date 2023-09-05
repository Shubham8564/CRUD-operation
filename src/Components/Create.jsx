import React, { useState } from "react";
// import App from '../App'
import style from "./create.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let [name, setName] = useState("");
  let [salary, setSalay] = useState("");
  let [company, setCompany] = useState("");

  let nameData = (e) => {
    setName(e.target.value);
  };
  let salaryData = (e) => {
    setSalay(e.target.value);
  };
  let companyData = (e) => {
    setCompany(e.target.value);
  };

  const history = useNavigate(); //to nevigate the page

  const formHandler = (e) => {
    e.preventDefault();
    let payload = { name: name, salary: salary, company: company };
    axios
      .post(
        "https://64eed0f7219b3e2873c384fb.mockapi.io/api/crud-operation",
        payload
      )
      .then(() => {
        history("/read");
        console.log("Data has been added");
      })
      .catch(() => {
        console.log("Something went wrong!");
      });
  };

  return (
    
    <div id={style.myForm}>
      
      
      
      {/* just a form to give input */}
      {/* {name}{salary}{company} to check input is working or not*/}

      <form>
        <h2>Create Page</h2>
        
        <label>NAME</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={nameData}
        />
        <br />
        <label>SALARY</label>
        <input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={salaryData}
        />
        <br />
        <label>COMPANY</label>
        <input
          type="text"
          placeholder="Enter Company Name"
          value={company}
          onChange={companyData}
        />
        <br />
        <button onClick={formHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Create;
