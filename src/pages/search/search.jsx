import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ProductItem from "../../components/products/components/ProductItem";
import { searchProduct } from "../../service/product";
const Search = () => {
  const handleFilter = (value) => {
    const params = {
      search: value
    }
    searchProduct(
      params,
      (res)=>{
        setData(res.data.products)
      },
      (err)=>{
        setData([])
      }
    )
  };
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  return (
    <div className="search container">
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
      <div className="content__list" style={{width: "100%"}}>
        <div className="content__product">
          {data.length !== 0 ? (
            data.map((item, index) => <ProductItem key={index} data={item} />)
          ) : (
            <div
              className="content__error"
              style={{ marginLeft: 200, marginTop: 0 }}
            >
              {" "}
              KHÔNG CÓ SẢN PHẨM{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
