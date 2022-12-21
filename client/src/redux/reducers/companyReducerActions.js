const initialState = {
    jobs: [],
  };
  
  export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_COMPANY_REVIEW":
        return {
          ...state,
          jobs: action.payload,
        };
      default:
        return state;
    }
  };