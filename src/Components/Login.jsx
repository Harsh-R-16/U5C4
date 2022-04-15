import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [inp, setInp] = React.useState({
    password: "harsh1234",
    username: "harsh163",
  });
  const formHandler = (e) => {
    e.preventDefault();

    console.log(inp);
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inp),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error === false) {
          //   console.log(res);
          dispatch(login(res.token));
          localStorage.setItem("username", inp.username);
          navigate("/");
        } else {
          alert(res.message);
        }
      });
  };
  const changeHandler = (e) => {
    setInp({
      ...inp,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form onSubmit={formHandler}>
      <label htmlFor="name">Enter Your Name:</label>
      <input
        type="text"
        placeholder="enter your name"
        id="name"
        value="Harsh Gajera"
      />

      <label htmlFor="username">Enter Your Username:</label>
      <input
        type="text"
        placeholder="enter your username"
        id="username"
        value={inp.username}
        onChange={changeHandler}
      />
      <label htmlFor="password">Enter Your Password:</label>
      <input
        type="text"
        placeholder="enter your password"
        id="password"
        value={inp.password}
        onChange={changeHandler}
      />

      <button>Login</button>
    </form>
  );
}
