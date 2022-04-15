import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { create } from "../Redux/action";
export default function Create() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    let data = {
      name: e.target.elements[0].value,
      email: e.target.elements[1].value,
      gender: e.target.elements[2].value,
      roll: e.target.elements[3].value,
      department: e.target.elements[4].value,
      salary: e.target.elements[5].value,
    };
    dispatch(create(data));
  };
  return (
    <form action="/employees" onSubmit={submitHandler}>
      <h1>Employee Create Page</h1>
      <label htmlFor="">Enter Your Name:</label>
      <input type="text" placeholder="enter your name" />
      <label htmlFor="">Enter Your Email:</label>
      <input type="text" placeholder="enter your email" />
      <label htmlFor="">Enter Your Gender:</label>
      <input type="text" placeholder="enter your gender" />
      <label htmlFor="">Enter Your Roll:</label>
      <input type="text" placeholder="enter your roll" />
      <label htmlFor="">Enter Your Department:</label>
      <input type="text" placeholder="enter your department" />
      <label htmlFor="">Enter Your Salary:</label>
      <input type="text" placeholder="enter your salary" />
      <button>Submit Details</button>
    </form>
  );
}
