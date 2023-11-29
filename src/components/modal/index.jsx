import { MdClose } from "react-icons/md";
import { useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCheckAdd, setOpenModal } from "../../redux/slice/appReduce";
import { useEffect } from "react";
import { getProductDetail } from "../../service/product";
import { postCart } from "../../service/cart";
import useNotify from "../../hook/useNotify";

export default function Modal() {
  const dispatch = useDispatch();
  const notify = useNotify();
  const { openModal, productId } = useSelector((states) => states.appReduce);
  const [number, setNumber] = useState(1);
  const [data, setData] = useState({
    image: "abc",
    name: "abc",
    description: "abd",
    category_name: "abdc",
    price: 1.2,
    producer: "abc",
  });
  const [size, setSize] = useState("xs");
  const choseSize = (value) => {
    setSize(value);
  };
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    if (number <= 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };
  const closeModal = () => {
    dispatch(setOpenModal(false));
  };
  const addToCart = (productId, quantity) => {
    const params = {
      product_id: productId,
      quantity: quantity,
    };
    postCart(
      params,
      (res) => {
        notify.success("thêm vào giỏ hàng thành công");
      },
      (err) => {
        notify.error("thêm vào giỏ hàng thất bại");
      }
    );
    dispatch(setCheckAdd(Date.now()));
  };
  useEffect(() => {
    setNumber(1);
    const params = {
      id: productId,
    };
    getProductDetail(
      params,
      (res) => {
        setData(res.data.product);
      },
      (err) => {
        console.log(err);
      }
    );
  }, [productId]);
  return (
    <div className={`modal ${openModal ? "active" : ""}`}>
      <div className="modal__bg">
        <div className="modal__cart">
          <div className="modal__exit" onClick={() => closeModal()}>
            <MdClose />
          </div>
          <div className="modal__img">
            <img src={data.image} alt="nước hoa" />
          </div>
          <div className="modal__text">
            <div className="modal__title">
              <h1>Name:{data.name}</h1>
              <span>
                Category:
                <strong> {data.category_name}</strong>
              </span>
            </div>
            <div className="modal__des">
              <span>
                Xuất xứ:
                <strong> {data.producer}</strong>
              </span>
            </div>
            <div className="modal__des">
              <span>
                Đánh giá sản phẩm:
                <strong> {data.description}</strong>
              </span>
            </div>
            <div className="modal__price">Giá:{data.price}$</div>
            <div className="modal__kt">
              <div className="modal__title1">Kích thước:</div>
              <div className="modal__swap">
                <div className="modal__item">
                  <input
                    className="modal__inp"
                    id="size-xs"
                    type="radio"
                    name="size"
                  />
                  <label
                    className={`modal__size ${size === "xs" ? "modal__c" : ""}`}
                    onClick={() => choseSize("xs")}
                    for="size-xs"
                  >
                    <span>XS</span>
                  </label>
                </div>
                <div className="modal__item">
                  <input
                    className="modal__inp"
                    id="size-s"
                    type="radio"
                    name="size"
                  />
                  <label
                    className={`modal__size ${size === "s" ? "modal__c" : ""}`}
                    onClick={() => choseSize("s")}
                    for="size-s"
                  >
                    <span>S</span>
                  </label>
                </div>
                <div className="modal__item">
                  <input
                    className="modal__inp"
                    id="size-m"
                    type="radio"
                    name="size"
                  />
                  <label
                    className={`modal__size ${size === "m" ? "modal__c" : ""}`}
                    onClick={() => choseSize("m")}
                    for="size-m"
                  >
                    <span>M</span>
                  </label>
                </div>
                <div className="modal__item">
                  <input
                    className="modal__inp"
                    id="size-l"
                    type="radio"
                    name="size"
                  />
                  <label
                    className={`modal__size ${size === "l" ? "modal__c" : ""}`}
                    onClick={() => choseSize("l")}
                    for="size-l"
                  >
                    <span>L</span>
                  </label>
                </div>
              </div>
            </div>
            <form className="modal__form">
              <div className="modal__title1">Số lượng:</div>
              <div className="modal__quantity">
                <input
                  type="button"
                  value="-"
                  className="modal__btn"
                  onClick={() => minus()}
                />
                <input
                  type="text"
                  name="quantity"
                  value={`${number}`}
                  min="1"
                  max="100"
                  className="modal__sl"
                />
                <input
                  type="button"
                  value="+"
                  className="modal__btn"
                  onClick={() => plus()}
                />
              </div>
              <div className="modal__button">
                <div
                  className="modal__button1"
                  onClick={() => addToCart(productId, number)}
                >
                  Thêm vào giỏ hàng
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
