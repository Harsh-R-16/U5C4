import { LOGIN, LOGOUT, CREATE, EDIT } from "./action";

export const reducer = (store, action) => {
  let newEmployees;
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("login", true);
      localStorage.setItem("token", action.payload);
      return {
        ...store,
        token: action.payload,
        isLogin: true,
      };

    case LOGOUT:
      localStorage.setItem("login", false);
      return {
        ...store,
        isLogin: false,
      };

    case CREATE:
      newEmployees = [...store.employees];
      newEmployees.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(newEmployees));
      return {
        ...store,
        employees: newEmployees,
      };

    case EDIT:
      localStorage.setItem("employees", JSON.stringify(action.payload));
      return {
        ...store,
        employees: action.payload,
      };
    default:
      return store;
  }
};
