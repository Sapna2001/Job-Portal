const initialState = {
    referrals: [],
  };
  
  export const referralReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_REFERRALS":
        return {
          ...state,
          referrals: action.payload,
        };
      default:
        return state;
    }
  };
