import React from "react";
import "./style.css";
import { employees } from "./data";
import { useNavigate, useParams } from "react-router-dom";
export default function Employee() {
  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  let data = employees[+id - 1];
  console.log(data);
  return (
    <div id="single">
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${Math.random()}`}
        alt=""
      />
      <p>
        <span>Name: </span>
        {data.name}
      </p>
      <p>
        <span>Email: </span>
        {data.email}
      </p>
      <p>
        <span>Gender: </span>
        {data.gender}
      </p>
      <p>
        <span>Roll: </span>
        {data.roll}
      </p>
      <p>
        <span>Department: </span>
        {data.department}
      </p>
      <p>
        <span>Salary: </span>
        {data.salary} $
      </p>
      <button
        onClick={() => {
          navigate(`/employees`);
        }}
      >
        Go Back
      </button>
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => {
          navigate(`/employees/${id}/edit`);
        }}
      >
        Edit
      </button>
    </div>
  );
}
