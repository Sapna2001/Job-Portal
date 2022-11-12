import React, { useState } from "react";
import DefaultLayout from "../Components/DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

const { TextArea } = Input;

function Profile() {
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
              label: `Personal Info`,
              key: "1",
              children: (
                <Form
                  layout="vertical"
                  onFinish={onPersonInfoSubmit}
                  initialValues={user}
                >
                  <Row gutter={16}>
                    <Col lg={8} sm={24}>
                      <Form.Item
                        label="First name"
                        required
                        rules={[{ required: true }]}
                        name="firstName"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={8} sm={24}>
                      <Form.Item
                        label="Last name"
                        required
                        rules={[{ required: true }]}
                        name="lastName"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={8} sm={24}>
                      <Form.Item
                        label="Email"
                        required
                        rules={[{ required: true }]}
                        name="email"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={8} sm={24}>
                      <Form.Item
                        label="Mobile Number"
                        required
                        rules={[{ required: true }]}
                        name="mobileNumber"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={8} sm={24}>
                      <Form.Item
                        label="Portfolio"
                        required
                        rules={[{ required: true }]}
                        name="portfolio"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24}>
                      <Form.Item
                        label="About"
                        required
                        rules={[{ required: true }]}
                        name="about"
                      >
                        <TextArea rows={2} />
                      </Form.Item>
                    </Col>
                    <Col lg={24} sm={24}>
                      <Form.Item
                        label="Address"
                        required
                        rules={[{ required: true }]}
                        name="address"
                      >
                        <TextArea rows={1} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button htmlType="submit">Update</Button>
                </Form>
              ),
            },
            {
              label: `Skills and Education`,
              key: "2",
              children: (
                  <Form
                    initialValues={user}
                    layout="vertical"
                    onFinish={onFinalFinish}
                  >
                    <Row>
                      <Col lg={24} sm={24}>
                        <Form.List name="education">
                          {(education, { add, remove }) => (
                            <div>
                              {education.map((field, index) => (
                                <div className="flex">
                                  <Form.Item
                                    required
                                    {...field}
                                    label="Education"
                                    style={{ width: "80%" }}
                                    rules={[{ required: true }]}
                                  >
                                    <TextArea rows={1} />
                                  </Form.Item>
                                  <Button
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add more
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </Form.List>
                      </Col>

                      <Col lg={24} sm={24}>
                        <Form.List name="skills">
                          {(skills, { add, remove }) => (
                            <div>
                              {skills.map((field, index) => (
                                <div className="flex">
                                  <Form.Item
                                    required
                                    {...field}
                                    label="Skill"
                                    style={{ width: "80%" }}
                                    rules={[{ required: true }]}
                                  >
                                    <TextArea rows={1} />
                                  </Form.Item>
                                  <Button
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add more
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </Form.List>
                      </Col>

                      <Col lg={24} sm={24}>
                        <Form.List name="projects">
                          {(projects, { add, remove }) => (
                            <div>
                              {projects.map((field, index) => (
                                <div className="flex">
                                  <Form.Item
                                    required
                                    {...field}
                                    label="Project"
                                    style={{ width: "80%" }}
                                    rules={[{ required: true }]}
                                  >
                                    <TextArea rows={3} />
                                  </Form.Item>
                                  <Button
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add more
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </Form.List>
                      </Col>
                      <Col lg={24} sm={24}>
                        <Form.List name="experience">
                          {(experience, { add, remove }) => (
                            <div>
                              {experience.map((field, index) => (
                                <div className="flex">
                                  <Form.Item
                                    required
                                    {...field}
                                    label="Experience"
                                    style={{ width: "80%" }}
                                    rules={[{ required: true }]}
                                  >
                                    <TextArea rows={3} />
                                  </Form.Item>
                                  <Button
                                    onClick={() => {
                                      add();
                                    }}
                                  >
                                    Add more
                                  </Button>
                                  {index !== 0 && (
                                    <Button
                                      onClick={() => {
                                        remove(index);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </Form.List>
                      </Col>
                    </Row>
                    <Button htmlType="submit">Update</Button>
                  </Form>
              ),
            },
          ]}
        />
      </DefaultLayout>
    </div>
  );
}

export default Profile;
