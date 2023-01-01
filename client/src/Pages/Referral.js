import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../Components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { postReferrals } from "../redux/actions/referralActions";
import { Link } from "react-router-dom";

function Referral() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { referrals } = useSelector((state) => state.referralReducer);
  const userid = user._id;

  function onSubmit(values) {
    dispatch(postReferrals(values));
  }

  return (
    <div>
      <DefaultLayout>
        {
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: `Post Referral Post`,
                key: "1",
                children: (
                  <Form layout="vertical" onFinish={onSubmit}>
                    <Row gutter={16}>
                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="employeefirst"
                          rules={[{ required: true }]}
                          label="First Name"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="employeelast"
                          rules={[{ required: true }]}
                          label="Last Name"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="mobile"
                          rules={[{ required: true }]}
                          label="Mobile Number"
                        >
                          <Input type="number" />
                        </Form.Item>
                      </Col>

                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="email"
                          required
                          rules={[{ required: true }]}
                          label="Email ID"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="company"
                          rules={[{ required: true }]}
                          label="Company Name"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="role"
                          rules={[{ required: true }]}
                          label="Role"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={8} sm={24}>
                        <Form.Item
                          name="applyLink"
                          rules={[{ required: true }]}
                          label="Link to apply"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col lg={16} sm={24}>
                        <Form.Item
                          name="description"
                          rules={[{ required: true }]}
                          label="Job Description"
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
                label: `View Referral Posts`,
                key: "2",
                children: (
                  <Row gutter={16}>
                    {referrals.map((referral) => {
                      return (
                        <Col lg={12} sm={24}>
                          <div className="job-div box-shadow m-3 p-7">
                            <p>
                              <b>First Name:</b> {referral.employeefirst}
                            </p>
                            <p>
                              <b>Last Name:</b> {referral.employeelast}
                            </p>
                            <p>
                              <b>Mobile Number:</b> {referral.mobile}
                            </p>
                            <p>
                              <b>Email ID:</b> {referral.email}
                            </p>
                            <p>
                              <b>Company Name:</b> {referral.company}
                            </p>
                            <p>
                              <b>Job Description:</b> {referral.description}
                            </p>
                            <h4>
                              <b>Apply directly or mail for referral.</b>
                            </h4>
                            <div className="flex justify-content-between">
                              {referral.postedBy === userid ? (
                                <Button>
                                  <Link to={`/editreferral/${referral._id}`}>
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

export default Referral;
