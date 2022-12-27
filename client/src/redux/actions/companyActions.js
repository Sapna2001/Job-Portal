import axios from "axios";
import { message } from "antd";

export const getAllCompanyReviews = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/company/getallcompanyreview");
    dispatch({ type: "GET_ALL_COMPANY_REVIEW", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateCompanyReview = (values) => async (dispatch) => {
    values.postedBy = JSON.parse(localStorage.getItem("user"))._id;
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.post("/api/company/postcompanyreview", values);
      dispatch({ type: "LOADING", payload: false });
      message.success("Company Posted Successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      dispatch({ type: "LOADING", payload: false });
    }
  };