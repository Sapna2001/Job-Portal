import "./App.css";
import "antd/dist/antd.min.css";
import Home from "./Pages/Home";
import AppliedJobs from "./Pages/AppliedJobs";
import JobInfo from "./Pages/JobInfo";
import Login from "./Pages/Login";
import PostedJobs from "./Pages/PostedJobs";
import Profile from "./Pages/Profile";
import EditJob from "./Pages/EditJob";
import PostJob from "./Pages/PostJob";
import UserInfo from "./Pages/UserInfo";
import Register from "./Pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
