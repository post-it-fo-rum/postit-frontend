import React from "react";
import { Layout } from "antd";
import SideBar from "../components/sidebar";
import TopHeader from "../components/header";
import Post from "../components/post";

const { Content } = Layout;

const MyPost: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <TopHeader />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 50,
              minHeight: 360,
            }}
          >
            <Post />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyPost;
