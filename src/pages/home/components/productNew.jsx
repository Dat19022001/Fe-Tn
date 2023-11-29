import { Link } from "react-router-dom";
import ProductItem from "../../../components/products/components/ProductItem";
import { useEffect, useState } from "react";
import "./productNew.scss";
import { getProductNew} from "../../../service/product";
const ProductNew = () => {
  const data1 = [
    {
      path: 1,
      Name: "Áo",
    },
    {
      path: 2,
      Name: "Quần ",
    },
    {
      path: 3,
      Name: "Chân váy",
    },
    {
      path: 4,
      Name: "Set Bộ",
    },
  ];
  const [data, setData] = useState([]);
  const [selectOption, setSelectOption] = useState(0);
  const [title, setTitle] = useState(data1[0].Name);

  const [path, setPath] = useState(data1[0].path);

  const handleSelected = (item, index) => {
    setSelectOption(index);
    setTitle(item.Name);
    setPath(item.path);
  };
  useEffect(() => {
    const params = {
      cate: title,
    };
    getProductNew(
      params,
      (res) => {
        setData(res.data.products);
      },
      (err) => {
        setData([]);
      }
    );
    
  }, [title]);
 
  return (
    <div className="hot">
      <div className="container">
        <h2 className="hot__title">Sản phẩm mới</h2>
      </div>
      <div className="hot__content">
        <ul className="hot__menu">
          {data1.map((item, index) => (
            <li
              key={index}
              className={`${index === selectOption ? "active" : ""}`}
              onClick={() => handleSelected(item, index)}
            >
              <div>
                <span>{item.Name}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="hot__body">
          {data.map((item, index) => (
            <ProductItem key={index} data={item} />
          ))}
        </div>
        <div className="hot__btn">
          <Link to={`/${path}`}>Xem Thêm</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductNew;
