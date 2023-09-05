import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  //to get the data on read page
  function getData() {
    axios
      .get("https://64eed0f7219b3e2873c384fb.mockapi.io/api/crud-operation")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(
        `https://64eed0f7219b3e2873c384fb.mockapi.io/api/crud-operation/${id}`
      )
      .then(() => {
        getData();
      });
  }

  //read data for update
  const storeData=(id,name,salary,company)=>{
    //saving data in localstorage
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("salary",salary)
    localStorage.setItem("company",company)
  };
  //any modification we do it will reload the page
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Read Operation</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Company</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {/* wrapped in curly{} braces,used map fn to access all the data */}

        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.salary}</td>
                  <td>{eachData.company}</td>
                  <td>
                    <Link to="/update">
                      <button className="btnE" onClick={()=>storeData(eachData.id,eachData.name,eachData.salary,eachData.company)}>Edit{" "}</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btnD"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
