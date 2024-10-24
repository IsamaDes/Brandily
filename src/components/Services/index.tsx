import React from "react";
import Sidebar from "./Sidebar";
import Heading from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import LocalStorage from "../../Helpers/storage";

const Services: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const user = LocalStorage.getCurrentUser();
    console.log("user: ", user);
    if (user) {
      navigate("/settings");
    }
  }, [navigate]);

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout
        className="site-layout"
        style={{ width: "82%", backgroundColor: "#FAFAFA", position: "absolute", right: 0 }}
      >
        <Heading />
        <Layout style={{ backgroundColor: "#fff" }} className="poppins">
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Services;
