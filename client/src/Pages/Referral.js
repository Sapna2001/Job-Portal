import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../Components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { postReferrals } from "../redux/actions/referralActions"; 

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
                label: `Employee's Info`,
                key: "1",
                children: (
                  <Form
                    layout="vertical"
                    onFinish={onSubmit}
                    initialValues={user}
                  >
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
                    name="description"
                    rules={[{ required: true }]}
                    label="Job Description"
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
                    <Button htmlType="submit">Post</Button>
                    <Row gutter={16}>     
        <h1>How to apply?</h1>
        </Row>
        <Row gutter={16}> 
        <Col lg={6} sm={16}>
            Amazon Software Developer
              <tr>
              <td><a href={"https://www.amazon.jobs/en/job_categories/software-development"}>Click here to apply</a></td>
            </tr>
  
                </Col>  
                <Col lg={6} sm={16}>
            Google Software Engineer
              <tr>
              <td><a href={"https://careers.google.com/jobs/results/?distance=50&q=Software%20Engineer"}>Click here to apply</a></td>
            </tr>
  
                </Col>  

                <Col lg={6} sm={16}>
            Intel Product Designer
              <tr>
              <td><a href={"https://jobs.intel.com/en/job/petah-tikva/experienced-product-designer-ui-ux/41147/40919719136"}>Click here to apply</a></td>
            </tr>
  
                </Col>
              </Row>       
            </Form>
                ),
              },
              {
                label: `View Employee's Info`,
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
                              <b>Job Description:</b> {referrals.description}
                            </p>
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
