import axios from "axios";
import { message } from "antd";

export const getAllReferrals = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/referral/getallreferrals");
    dispatch({ type: "GET_ALL_REFERRALS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const postReferrals = (values) => async (dispatch) => {
  values.postedBy = JSON.parse(localStorage.getItem("user"))._id;
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/referral/postreferral", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Referral Post Added Successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editReferrals = (values) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/referral/editreferrals", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Referral Post Edited Successfully");
    
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
