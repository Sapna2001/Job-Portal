import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from '../Components/DefaultLayout'
import { Row, Col, Form, Tabs, Input, Button } from "antd";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [companyInfo, setCompanyInfo] = useState();
  const dispatch = useDispatch();
  const { companyReviews } = useSelector((state) => state.companyReviewReducer);

  function onSubmit(values) {
    setCompanyInfo(values);
    dispatch(updateCompanyReview(companyInfo))
  }

  return (
    <div>
      <DefaultLayout>
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
                        name="review"
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
                 <h1>Company</h1>
              ),
            },
          ]}
        />
      </DefaultLayout>
    </div>
  );
}

export default Home