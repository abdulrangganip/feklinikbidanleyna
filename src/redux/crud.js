import axios from "axios";

//TODO:: please put the value in .env file, const URL_BE = process.env.REACT_APP_URL_BE;
const URL_BE = "https://82de-180-244-138-171.ngrok-free.app/api";

const LOGIN_URL = `${URL_BE}/signin`;

/**
 *
 * @param {string} username
 * @param {string} password
 */
export const login = (username, password) => {
  return axios.post(LOGIN_URL, {
    username,
    password,
  });
};

const DATA_PASIEN_URL = `${URL_BE}/getpasien`;
