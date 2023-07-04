import axios from "axios";

//TODO:: please put the value in .env file, const URL_BE = process.env.REACT_APP_URL_BE;
const URL_BE = "https://f081-140-213-11-117.ngrok-free.app/api";

const LOGIN_URL = `${URL_BE}/signin`;
const LOGIN_PASIEN_URL = `${URL_BE}/login`;

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

export const loginPasien = (no_nik, no_rm) => {
  return axios.post(LOGIN_PASIEN_URL, {
    no_nik,
    no_rm,
  });
};

const DATA_PASIEN_URL = `${URL_BE}/getpasien`;
