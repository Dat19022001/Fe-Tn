import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";

import "./content.scss";
import { getAllUser } from "../../../service/auth";

const { Column } = Table;

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllUser(
      {},
      (res) => {
        setData(res.data);
      },
      (err) => {
        setData([]);
      }
    );
  }, []);
  return (
    <div className="content1">
      <Table dataSource={data}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Cv" dataIndex="CV" key="CV" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <div className="content1__delete">Delete</div>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
export default User;
