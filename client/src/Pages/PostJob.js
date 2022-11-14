import React, { useState } from "react";
import DefaultLayout from "../Components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { postJob } from "../redux/actions/jobActions";

const { TextArea } = Input;

function PostJob() {
  const [jobInfo, setJobInfo] = useState({});
  const dispatch = useDispatch()
  function onFirstFormFinish(values) {
    setJobInfo(values);
    message.info('Saved');
  }

  function onFinalFormFinish(values) {
      const finalObj = {...jobInfo , ...values};
      dispatch(postJob(finalObj))
  }
  
  return (
    <div>
      <DefaultLayout>
      <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: `Job Info`,
              key: "1",
              children: (
                <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: true }]}
                    label="Title"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="department"
                    rules={[{ required: true }]}
                    label="Department"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="experience"
                    rules={[{ required: true }]}
                    label="Experience"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryFrom"
                    rules={[{ required: true }]}
                    label="Salary From"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryTo"
                    rules={[{ required: true }]}
                    label="Salary To"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="skillsRequired"
                    rules={[{ required: true }]}
                    label="Skills"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minimumQualification"
                    rules={[{ required: true }]}
                    label="Minimum Qualification"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="description"
                    rules={[{ required: true }]}
                    label="Description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
              </Row>

              <Button htmlType="submit">Save</Button>
            </Form>
              ),
            },
            {
              label: `Company Info`,
              key: "2",
              children: (
                <Form layout='vertical' onFinish={onFinalFormFinish}>
                <Row gutter={16}>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      name="company"
                      label="Company Name"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    </Col>
                    <Col lg={8} sm={24}>
                    <Form.Item
                      name="email"
                      label="Company Email"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    </Col>
  
                    <Col lg={8} sm={24}>
                    <Form.Item
                      name="phoneNumber"
                      label="Phone number"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                    </Col>
                    <Col lg={24} sm={24}>
                    <Form.Item
                      name="companyDescription"
                      label="Company Description"
                      rules={[{ required: true }]}
                    >
                      <TextArea rows={3} />
                    </Form.Item>
                    </Col>
                
                </Row>
                <Button htmlType="submit">Post Job</Button>
              </Form> 
              ),
            },
          ]}
        />
      </DefaultLayout>
    </div>
  );
}

export default PostJob;