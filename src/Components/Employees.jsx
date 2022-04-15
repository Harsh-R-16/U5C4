import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Employees() {
  let navigate = useNavigate();
  let employees = useSelector((state) => state.employees);

  return (
    <section id="emp">
      <h1>All Employees</h1>
      <button onClick={() => navigate("/employees/create")}>
        Go to Create Employee Page
      </button>
      <article>
        {employees.map(
          ({ name, email, gender, roll, department, salary }, index) => (
            <div>
              <p>
                <span>Name: </span>
                {name}
              </p>
              <p>
                <span>Email: </span>
                {email}
              </p>
              <p>
                <span>Gender: </span>
                {gender}
              </p>
              <p>
                <span>Roll: </span>
                {roll}
              </p>
              <p>
                <span>Department: </span>
                {department}
              </p>
              <p>
                <span>Salary: </span>
                {salary}
              </p>
              <button
                onClick={() => {
                  navigate(`/employees/${index}`);
                }}
              >
                More Details
              </button>
            </div>
          )
        )}
      </article>
    </section>
  );
}
