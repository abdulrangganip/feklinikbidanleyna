import { SET_USER, SET_IS_LOADING, SET_ERROR, DELETE_USER, SET_USER_PASIEN } from "./type";

/**
 *
 * @param {*} userData
 */
export const setUser = (userData) => ({ type: SET_USER, payload: userData });
export const setUserPasien = (userData) => ({ type: SET_USER_PASIEN, payload: userData });
export const deleteUser = () => ({ type: DELETE_USER, payload: null });
