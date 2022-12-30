import axios from "axios";
import { message } from "antd";

export const getAllReferrals = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/referral/getallreferral");
    dispatch({ type: "GET_ALL_REFERRALS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const updateReferrals = (values) => async (dispatch) => {
  values.postedBy = JSON.parse(localStorage.getItem("user"))._id;
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/referral/postreferrals", values);
    dispatch({ type: "LOADING", payload: false });
    message.success("Employee Registered Successfully");
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
    message.success("Employee Info Updated Successfully");
    
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
