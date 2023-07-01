import axios from "axios";

//TODO:: please put the value in .env file, const URL_BE = process.env.REACT_APP_URL_BE;
const URL_BE = "http://127.0.0.1:8000";

//!notes: this is just example using mock, please change this after the backend finish

const LOGIN_URL = `${URL_BE}/auth/login`;

/**
 *
 * @param {string} username
 * @param {string} password
 */
export const login = (username, password) => {
  //!notes: this is how the function work for integration to backend, for now use mock data
  // return axios.post(LOGIN_URL, {
  //   username,
  //   password
  // }, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // });
  if (username === "admin" && password === "passwordAdmin") {
    return {
      status: 200,
      message: "Success",
      data: {
        username: "admin",
        role: "ADMIN",
      },
    };
  }

  if (username === "leyna" && password === "passwordBidan") {
    return {
      status: 200,
      message: "Success",
      data: {
        username: "leyna",
        role: "BIDAN",
      },
    };
  }

  if (username === "Maudy" && password === "passwordPasien") {
    return {
      status: 200,
      message: "Success",
      data: {
        username: "Maudy",
        role: "PASIEN",
      },
    };
  }

  return {
    status: 400,
    message: "Incorrect username or password",
    data: null,
  };
};
