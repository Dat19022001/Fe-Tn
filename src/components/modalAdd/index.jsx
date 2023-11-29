import { MdClose } from "react-icons/md";
import { setOpenModalAdd } from "../../redux/slice/appReduce";
import { useDispatch, useSelector } from "react-redux";
import Plus from "../../assets/plus.png";
import "./style.scss";
import { Select } from "antd";
const ModalAdd = () => {
  const {openModalAdd} = useSelector((states) => states.appReduce);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setOpenModalAdd(false));
  };
  return (
    <div className={`modalAdd ${openModalAdd ? "active" : ""} `}>
      <div className="modalAdd__bg">
        <div className="modalAdd__cart">
          <div className="modalAdd__exit" onClick={() => closeModal()}>
            <MdClose />
          </div>
          <div className="modalAdd__text">
            <div className="modalAdd__update">
              <div className="modalAdd__flex">
                <div className="modalAdd__img">
                  <img src={Plus} alt="plus" />
                </div>
              </div>
              <input
                type="file"
                onChange={(e) => {
                  // setImage(e.target.files[0], uploadImage());
                }}
              ></input>
            </div>
            <div className="order__form" style={{ width: "100%" }}>
              <input
                placeholder="Name"
                className="order__input"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <div
                className="order__tt"
                style={{ justifyContent: "space-between" }}
              >
                <div className="modalAdd__select">
                  <Select
                    // onChange={handleChange}
                    className="newCreate-select"
                    defaultValue="Việt Nam"
                    style={{
                      width: 250,
                      height: 42,
                      marginRight: 15,
                    }}
                    // onChange={handleChange}
                    options={[
                      {
                        value: "Việt Nam",
                        label: "Việt Nam",
                      },
                      {
                        value: "Hàn Quốc",
                        label: "Hàn Quốc",
                      },
                      {
                        value: "Trung Quốc",
                        label: "Trung Quốc",
                      },
                      {
                        value: "Mỹ",
                        label: "Mỹ",
                      },
                    ]}
                  />
                </div>
                <input
                  placeholder="Price"
                  className="order__input order__sdt"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                />
                <div className="modalAdd__select">
                  <Select
                    // onChange={handleChange}
                    className="newCreate-select"
                    defaultValue="Category"
                    style={{
                      width: 250,
                      height: 42,
                      marginLeft: 15,
                    }}
                    // onChange={handleChange}
                    options={[
                      {
                        value: "Category",
                        label: "Category...",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                    ]}
                  />
                </div>
              </div>
              <input
                placeholder="Description"
                className="order__input"
                style={{ marginBottom: 20 }}
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="modalAdd__button">
              <div
                className="modalAdd__button1"
                // onClick={() => addToCart(productId, number)}
              >
                Thêm sản phẩm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalAdd;
