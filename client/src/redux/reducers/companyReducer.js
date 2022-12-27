const initialState = {
    companyReviews: [],
  };
  
  export const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_COMPANY_REVIEW":
        return {
          ...state,
          companyReviews: action.payload,
        };
      default:
        return state;
    }
  };