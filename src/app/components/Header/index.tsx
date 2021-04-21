import React from "react";
import { Layout, Button, Col, Typography, Tag } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import DisplayAccount from "../DisplayAccount";

const { Header } = Layout;
const { Text } = Typography;

const HeaderMenu = () => {
  return (
    <Header className="site-layout-background">
      <Col span={12}>
        <Text className="font-bold text-xl">Example.io</Text>
      </Col>
      <Col span={12} className="flex justify-end items-center">
        <Tag color="gold" className="mr-3 rounded-xl">
          Rinkeby
        </Tag>
        <DisplayAccount className="mr-3" />
        {/* <Button type="primary" className="mr-3 rounded-md">
          Connect to Wallet
        </Button> */}

        <Button
          className="flex justify-center items-center rounded-md px-3"
          type="ghost"
          icon={<EllipsisOutlined />}
        ></Button>
      </Col>
    </Header>
  );
};

export default HeaderMenu;
