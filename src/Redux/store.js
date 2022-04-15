import { createStore } from "redux";
import { reducer } from "./reducer";
import emps from "./data";
let isLogin = localStorage.getItem("login")
  ? localStorage.getItem("login")
  : false;
let employees = localStorage.getItem("employees")
  ? JSON.parse(localStorage.getItem("employees"))
  : emps;
let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
export const store = createStore(reducer, {
  isLogin,
  token,
  employees,
});
