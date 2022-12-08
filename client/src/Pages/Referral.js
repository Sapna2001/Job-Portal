import React, {useState} from 'react'
import DefaultLayout from '../Components/DefaultLayout';
import { Row, Col, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { updateUser } from "../redux/actions/userActions";

const { TextArea } = Input;



function Referral() {
  const [personalInfo, setPersonalInfo] = useState();
  const dispatch = useDispatch();



  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };
    dispatch(updateUser(finalObj))
  }
  
  return (
    <div>
      <DefaultLayout>
        <h1>Employee's Info</h1>
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
        </DefaultLayout>
      </div>
    );
  }

export default Referral;
