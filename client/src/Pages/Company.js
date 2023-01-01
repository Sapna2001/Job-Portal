import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../Components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { postCompanyReview } from "../redux/actions/companyActions";
import { Link } from "react-router-dom";

function Company() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { companyReviews } = useSelector((state) => state.companyReducer);
  const userid = user._id;

  function onSubmit(values) {
    dispatch(postCompanyReview(values));
  }

  return (
    <div>
      <DefaultLayout>
        {
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: `Post Company Review`,
                key: "1",
                children: (
                  <Form
                    layout="vertical"
                    onFinish={onSubmit}
                    initialValues={user}
                  >
                    <Row gutter={16}>
                      <Col lg={6} sm={24}>
                        <Form.Item
                          label="Company name"
                          required
                          rules={[{ required: true }]}
                          name="companyName"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={6} sm={24}>
                        <Form.Item
                          label="Role"
                          required
                          rules={[{ required: true }]}
                          name="role"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={6} sm={24}>
                        <Form.Item
                          label="Salary"
                          required
                          rules={[{ required: true }]}
                          name="salary"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={6} sm={24}>
                        <Form.Item
                          label="Rating out of 5"
                          required
                          rules={[{ required: true }]}
                          name="rating"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={24} sm={24}>
                        <Form.Item
                          label="Company Review"
                          required
                          rules={[{ required: true }]}
                          name="companyReview"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button htmlType="submit">Post</Button>
                  </Form>
                ),
              },
              {
                label: `View Company Review`,
                key: "2",
                children: (
                  <Row gutter={16}>
                    {companyReviews.map((companyReview) => {
                      return (
                        <Col lg={12} sm={24}>
                          <div className="job-div box-shadow m-2 p-5">
                            <h3>
                              <b>{companyReview.companyName}</b>
                            </h3>
                            <hr />
                            <p>
                              <b>Role:</b> {companyReview.role}
                            </p>
                            <p>
                              <b>Salary:</b> {companyReview.salary}
                            </p>
                            <p>
                              <b>Rating(out of 5):</b> {companyReview.rating}
                            </p>
                            <p>
                              <b>Review:</b> {companyReview.companyReview}
                            </p>
                            <div className="flex justify-content-between">
                              {companyReview.postedBy === userid ? (
                                <Button>
                                  <Link to={`/editcompanyreview/${companyReview._id}`}>
                                    Edit Now
                                  </Link>
                                </Button>
                              ) : <p></p>}
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                ),
              },
            ]}
          />
        }
      </DefaultLayout>
    </div>
  );
}

export default Company;
