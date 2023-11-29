import ProductItem from "../../components/products/components/ProductItem";
import Sidebar from "../../components/sidebar";
import { Pagination } from "antd";

import "./style.scss";
import { useEffect, useState } from "react";
import { getProductByCate } from "../../service/product";
import { useSelector } from "react-redux";
const Ao = ({type}) => {
  const [title,setTitle] = useState("Áo")
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { categoryId } = useSelector((states) => states.appReduce);
  const onChange = (page) => {
    setPage(page);
  };
  
  useEffect(()=>{
    const params = {
      page: page,
      category_id: categoryId,
    };
    getProductByCate(
      params,
      (res) => {
        setData(res.data.products);
      },
      (err) => {
        setData([]);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[categoryId,page,type])
  useEffect(() => {
    if(type === 'Ao'){
      setTitle("Áo")
    }else if(type === "Quan"){
      setTitle("Quần")
    } else if(type === "Vay"){
      setTitle("Chân Váy")
    }else(
      setTitle("Set Bộ")
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <div className="container content">
      <Sidebar type={type} />
      <div className="content__list">
        <div className="content__title">
          <h1>{title}</h1>
        </div>
        <div className="content__product">
          {data.length !== 0 ? (
            data.map((item, index) => <ProductItem key={index} data={item} />)
          ) : (
            <div className="content__error"> KHÔNG CÓ SẢN PHẨM </div>
          )}
        </div>
        <div className="content__pagination">
          <Pagination
            current={page}
            defaultCurrent={1}
            pageSize={1}
            total={5}
            onChange={(title) => onChange(title)}
          />
        </div>
      </div>
    </div>
  );
};

export default Ao;
