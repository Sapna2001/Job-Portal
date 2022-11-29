import React from 'react'
import DefaultLayout from '../Components/DefaultLayout';
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userActions";
import {useState} from "react";

const { TextArea } = Input;

function Referral() {
  const [personalInfo, setPersonalInfo] = useState();
  const dispatch = useDispatch();

  function onPersonInfoSubmit(values) {
    setPersonalInfo(values);
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };
    dispatch(updateUser(finalObj))
  }
  
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <DefaultLayout>
      <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: `Employee's Info`,
              key: "1",
              children: (
                <Form layout="vertical" onFinish={onFinalFinish}>
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

              <Button htmlType="submit">Save</Button>
            </Form>
              ),
            },
            {
              label: `Candidate Info`,
              key: "2",
              children: (
                <Form layout='vertical' onFinish={onFinalFinish}>
                <Row gutter={16}>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      name="candidatefirst"
                      label="First Name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    </Col>
                    <Col lg={8} sm={24}>
                    <Form.Item
                      name="candidatelast"
                      label="Last Name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    </Col>

                    <Col lg={8} sm={24}>
                    <Form.Item
                      name="mobile"
                      label="Mobile Number"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    </Col>
                    </Row>

                    
                    <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="email"
                    rules={[{ required: true }]}
                    label="Email ID"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="job"
                    rules={[{ required: true }]}
                    label="Job Position"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                </Row>
                <Button htmlType="submit">Submit</Button>
              </Form> 
              ),
            },
          ]}
          />
        </DefaultLayout>
      </div>
    );
  }


export default Referral;
