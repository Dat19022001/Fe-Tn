import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../redux/slice/appReduce";
const Sidebar = ({ type }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { categoryId } = useSelector((states) => states.appReduce);
  const handleFilter = (value) => {
    setValue("");
  };

  const dataAo = [
    {
      id: 3,
      Name: "Áo sơ mi",
    },
    {
      id: 4,
      Name: "Áo phông",
    },
    {
      id: 5,
      Name: "Áo khoác",
    },
    {
      id: 6,
      Name: "Áo khác",
    },
  ];
  const dataQuan = [
    {
      id: 7,
      Name: "Quần dài",
    },
    {
      id: 8,
      Name: "Quần short",
    },
  ];
  const dataVay = [
    {
      id: 9,
      Name: "Chân váy mini",
    },
    {
      id: 10,
      Name: "Chân váy midi",
    },
  ];

  const changCategory = (value) => {
    dispatch(setCategoryId(value));
  };
  useEffect(() => {
    if (type === "Ao") {
      setData(dataAo);
      dispatch(setCategoryId(3))
    } else if (type === "Quan") {
      setData(dataQuan);
      dispatch(setCategoryId(7))
    } else if (type === "Vay") {
      setData(dataVay);
      dispatch(setCategoryId(9))
    } else {
      setData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
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
        <h2 className="sidebar__title">Lọc sản phẩm</h2>
        <div className="sidebar__filter">
          <div className="sidebar__name">
            <span>Category</span>
          </div>
          <ul className="sidebar__list">
            {data.map((item, index) => (
              <li key={index}>
                <span>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={item.id === categoryId ? true : false} 
                      onChange={() => changCategory(item.id)}
                    />
                    {item.Name}
                  </label>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__filter">
          <div className="sidebar__name">
            <span>Giá Sản phẩm</span>
          </div>
          <ul className="sidebar__list">
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(0)}
                  />
                  Tất cả
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(100000)}
                  />
                  Dưới 100,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(200000)}
                  />
                  Dưới 200,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(300000)}
                  />
                  Dưới 300,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(500000)}
                  />
                  Dưới 500,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(1000000)}
                  />
                  Dưới 1000,000₫
                </label>
              </span>
            </li>
            <li>
              <span>
                <label>
                  <input
                    type="radio"
                    name="price"
                    // onChange={() => changPrice(2000000)}
                  />
                  Trên 1,000,000₫
                </label>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
