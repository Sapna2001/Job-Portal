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
import Referral from "./Pages/Referral";
import Resume from "./Pages/Resume";
import Company from "./Pages/Company";
import Templates from "./Pages/templates";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "./redux/actions/jobActions";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <>
      <div className="App">
        {loader && (
          <div className="sweet-loading text-center">
            <RingLoader color={"#001529"} />
          </div>
        )}
        <BrowserRouter>
          <Routes>
            <Route element = {<ProtectedRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/appliedjobs" element={<AppliedJobs />} />
                        <Route path="/postjob" element={<PostJob />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/jobs/:id" element={<JobInfo />} />
                        <Route path="/posted" element={<PostedJobs />} />
                        <Route path="/editjob/:id" element={<EditJob />} />
                        <Route path="/users/:id" element={<UserInfo />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/referral" element={<Referral />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/templates/:id" element={<Templates />}
          />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  } else {
   return <Outlet {...props} />;
  }
}