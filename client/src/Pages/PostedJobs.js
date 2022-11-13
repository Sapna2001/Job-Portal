import React from "react";
import DefaultLayout from "../Components/DefaultLayout";
import { useSelector } from "react-redux";
import { Table } from "antd";
import moment from "moment";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function PostedJobs() {
  const allJobs = useSelector((state) => state.jobsReducer).jobs;
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const userPostedJobs = allJobs.filter((job) => job.postedBy === userId);
  const navigate = useNavigate();;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <EditOutlined
              className="mr-2"
              style={{ fontSize: 20 }}
              onClick={() => {
                console.log(data.completeJobData._id)
                navigate(`/editjob/${data.completeJobData._id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  const dataSource = [];

  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format("MMM DD yyyy"),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job,
    };
    dataSource.push(obj);
  }

  return (
    <div>
      <DefaultLayout>
        <h1>Posted Jobs</h1>
        <Table columns={columns} dataSource={dataSource} />
      </DefaultLayout>
    </div>
  );
}

export default PostedJobs;
