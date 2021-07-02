import { ALL_DATA_LOAD, ALL_DATA_SUCCESS, ALL_DATA_ERROR } from "./actionTypes";

export const allDataLoad = (params) => {
  return {
    type: ALL_DATA_LOAD,
    params,
  };
};

export const allDataSuccess = (data) => {
  return {
    type: ALL_DATA_SUCCESS,
    data,
  };
};

export const allDataError = (error) => {
  return {
    type: ALL_DATA_ERROR,
    error,
  };
};
