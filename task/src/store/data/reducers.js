import { ALL_DATA_LOAD, ALL_DATA_ERROR, ALL_DATA_SUCCESS } from "./actionTypes";

const initialState = {
  error: "Error Data",
  loading: true,
  allData: [],
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA_LOAD:
      state = {
        ...state,
        loading: true,
      };
      break;
    case ALL_DATA_SUCCESS:
      state = {
        ...state,
        loading: false,
        allData: action.data,
      };
      break;
    case ALL_DATA_ERROR:
      state = {
        ...state,
        loading: false,
        allData: [],
      };
      break;

    default:
      break;
  }
  return state;
};

export default DataReducer;
