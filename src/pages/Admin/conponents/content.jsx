import React from "react";
import { Space, Table } from "antd";
import "./content.scss";
import { useEffect } from "react";
import {
  deleteProduct,
  getAllProduct,
  searchProduct,
} from "../../../service/product";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import useNotify from "../../../hook/useNotify";
import { setManagerDelete, setOpenModalAdd } from "../../../redux/slice/appReduce";
import Plus from "../../../assets/plus.png"
import ModalAdd from "../../../components/modalAdd";
const { Column } = Table;
const Content = () => {
  const dispatch = useDispatch();
  const notify = useNotify();
  const { managerDelete } = useSelector((states) => states.appReduce);
  const [data, setData] = useState([]);
  const handleFilter = (value) => {
    const params = {
      search: value,
    };
    searchProduct(
      params,
      (res) => {
        setData(res.data.products);
      },
      (err) => {
        setData([]);
      }
    );
  };
  const handleDelete = (id) => {
    const params = {
      id: id,
    };
    deleteProduct(
      params,
      (res) => {
        dispatch(setManagerDelete(Date.now()));
        notify.success("Xóa sản phẩm thành công");
      },
      (err) => {
        notify.error("Xóa sản phẩm thất bại");
      }
    );
  };
  const handleOpen = () => {
    dispatch(setOpenModalAdd(true))
  }
  const [value, setValue] = useState("");
  useEffect(() => {
    getAllProduct(
      {},
      (res) => {
        setData(res.data.products);
      },
      (err) => {
        setData([]);
      }
    );
  }, [managerDelete]);
  return (
    <div className="content1">
      <div className="sidebar__tk">
        <input
          placeholder="Tìm kiếm sản phẩm...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span>
          <button onClick={() => handleFilter(value)}>
            <AiOutlineSearch />
          </button>
        </span>
      </div>
      <Table dataSource={data}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column
          title="Category"
          dataIndex="category_name"
          key="category_name"
        />
        <Column title="Producer" dataIndex="producer" key="producer" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <div
                className="content1__delete"
                onClick={() => handleDelete(data.id)}
              >
                Delete
              </div>
            </Space>
          )}
        />
      </Table>
      <div className="content1-add" onClick={() => handleOpen()}>
        <img src={Plus} alt="plus"/>
      </div>
      <ModalAdd/>
    </div>
  );
};
export default Content;
