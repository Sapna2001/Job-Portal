import { Layout, Menu } from "antd";
import React from "react";
import "../Resources/stylesheets/defaultLayout.css";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  HomeOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
  FilePdfOutlined,
  ShopOutlined,
  AlertOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{
            position: "sticky",
            overflow: "auto",
            height: "100vh",
            top: 0,
          }}
        >
          <div className="logo">
            {this.state.collapsed ? <h1>JP</h1> : <h1>Job Portal</h1>}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="/appliedjobs" icon={<PlusSquareOutlined />}>
              <Link to="/appliedjobs">Applied Jobs</Link>
            </Menu.Item>

            <Menu.Item key="/postjob" icon={<PlusOutlined />}>
              <Link to="/postjob">Post Job</Link>
            </Menu.Item>

            <Menu.Item key="/posted" icon={<CheckOutlined />}>
              <Link to="/posted">Posted Jobs</Link>
            </Menu.Item>

            <Menu.Item key="/resume" icon={<FilePdfOutlined />}>
              <Link to="/resume">Resume</Link>
            </Menu.Item>

            <Menu.Item key="/company" icon={<ShopOutlined />}>
              <Link to="/company">Company Review</Link>
            </Menu.Item>

            <Menu.Item key="/referral" icon={<AlertOutlined />}>
              <Link to="/referral">Referral Alert</Link>
            </Menu.Item>

            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              <Link onClick={this.logout}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              position: "sticky",
              top: 0,
              zIndex: 9999,
            }}
          >
            <div className="topBar">
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>

              <div style={{display : this.state.collapsed ? 'none' : 'inline'}}>
                  <h3 className="name"><b>{user.firstName}</b></h3>
             </div>

            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
