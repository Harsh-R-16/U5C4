export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CREATE = "CREATE";
export const EDIT = "EDIT";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

export const create = (payload) => ({
  type: CREATE,
  payload,
});

export const edit = (payload) => ({
  type: EDIT,
  payload,
});
