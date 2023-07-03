import { SET_USER, DELETE_USER, SET_IS_LOADING, SET_ERROR, SET_USER_PASIEN } from "./type";

const initialState = {
  user: null,
  is_loading: false,
  error: false,
  list_pasien: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_USER_PASIEN:
      return {
        ...state,
        user: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: null,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        is_loading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
