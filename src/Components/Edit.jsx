import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { edit } from "../Redux/action";
export default function Edit() {
  let employees = useSelector((state) => state.employees);
  let { id } = useParams();
  let [inp, setInp] = React.useState(employees[+id]);
  let dispatch = useDispatch();
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setInp({
      ...inp,
      [name]: value,
    });
  };
  const submitHandler = () => {
    let newEmployees = [...employees];
    newEmployees[+id] = inp;
    dispatch(edit(newEmployees));
  };
  return (
    <form action="/employees" onSubmit={submitHandler}>
      <h1>Employee Edit Page</h1>
      <label htmlFor="">Enter Your Name:</label>
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        value={inp.name}
        onChange={changeHandler}
      />
      <label htmlFor="">Enter Your Email:</label>
      <input
        type="text"
        name="email"
        placeholder="enter your email"
        value={inp.email}
        onChange={changeHandler}
      />
      <label htmlFor="">Enter Your Gender:</label>
      <input
        type="text"
        name="gender"
        placeholder="enter your gender"
        value={inp.gender}
        onChange={changeHandler}
      />
      <label htmlFor="">Enter Your Roll:</label>
      <input
        type="text"
        name="roll"
        placeholder="enter your roll"
        value={inp.roll}
        onChange={changeHandler}
      />
      <label htmlFor="">Enter Your Department:</label>
      <input
        type="text"
        name="department"
        placeholder="enter your department"
        value={inp.department}
        onChange={changeHandler}
      />
      <label htmlFor="">Enter Your Salary:</label>
      <input
        type="text"
        name="salary"
        placeholder="enter your salary"
        value={inp.salary}
        onChange={changeHandler}
      />
      <button>Submit Details</button>
    </form>
  );
}
