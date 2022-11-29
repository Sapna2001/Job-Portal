import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../Components/DefaultLayout";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import "../Resources/stylesheets/home.css"

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  
  return (
    <div>
      <DefaultLayout>
        <Row gutter={16}>
          {jobs.map((job) => {
            return (
              <Col lg={12} sm={24}>
                <div className="job-div box-shadow m-2 p-5">
                  <h3><b>{job.title}</b></h3>
                  <p>{job.company}</p>
                  <hr />
                  <p>{job.description}</p>
                  <div className="flex">
                    <p>
                      Salary :
                      <b>
                        {" "}
                        {job.salaryFrom} - {job.salaryTo}
                      </b>
                    </p>
                    <p>
                      Experience : <b>{job.experience} Years</b>
                    </p>
                  </div>
                  <hr />

                  <div className="flex justify-content-between">
                    <Link to={`/jobs/${job._id}`}>
                      <Button>View</Button>
                    </Link>
                    <p>
                      Posted on : {moment(job.createdAt).format("MMM DD yyyy")}
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
}

export default Home;
