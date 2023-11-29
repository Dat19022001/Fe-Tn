import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Cart.scss";
import React from "react";
import { useEffect } from "react";
import { deleteCart, getCart, updateCart } from "../../service/cart";
import { useState } from "react";
import useNotify from "../../hook/useNotify";
import { useDispatch, useSelector } from "react-redux";
import { setCheckDelete, setCheckUpdate } from "../../redux/slice/appReduce";

export default function Cart() {
  const notify = useNotify();
  const dispatch = useDispatch();
  const { checkDelete, checkUpdate } = useSelector(
    (states) => states.appReduce
  );
  const [cart, setCart] = useState([]);
  // const cart = [
  //   {
  //     id:1,
  //     img:"https://theme.hstatic.net/200000549029/1000902525/14/megamenu_image_default_1.jpg?v=2761",
  //     quantity:2,
  //     price:1.2,
  //     title:"Áo"
  //   },
  // ];
  const deleteProduct = (id) => {
    const params = {
      id: id,
    };
    deleteCart(
      params,
      (res) => {
        dispatch(setCheckDelete(Date.now()));
        notify.success("Xóa sản phẩm thành công");
      },
      (err) => {
        notify.success("xóa sản phẩm thất bại");
      }
    );
  };
  const updateProduct = (id, type) => {
    const params = {
      id: id,
      type: type,
    };
    updateCart(
      params,
      (res) => {
        notify.success("Update sản phẩm thành công");
        dispatch(setCheckUpdate(Date.now()));
      },
      (err) => {
        notify.error("Update sản phẩm không thành công");
      }
    );
  };
  useEffect(() => {
    const params = {
      // cate: title,
    };
    getCart(
      params,
      (res) => {
        setCart(res.data.cart);
      },
      (err) => {
        setCart([]);
      }
    );
  }, [checkDelete, checkUpdate]);

  var total = 0;
  return (
    <div className="cart container">
      <h1 className="cart__title">Giỏ hàng của bạn </h1>
      <div className="cart__menu">
        <div className="cart__img cart__item">
          <span>Ảnh sản phẩm</span>
        </div>
        <div className="cart__name cart__item">
          <span>Tên Sản Phẩm</span>
        </div>
        <div className="cart__price cart__item">
          <span>Đơn giá</span>
        </div>
        <div className="cart__quantity cart__item">
          <span>Số lượng</span>
        </div>
        <div className="cart__total cart__item">
          <span>Thành tiền</span>
        </div>
        <div className="cart__delete cart__item">
          <span>Xoá</span>
        </div>
      </div>
      <div className="cart__body">
        {cart.length !== 0 ? (
          cart.map((item, index) => {
            total = total + item.quantity * item.product.price;
            return (
              <div className="cart__body1" key={index}>
                <div className="cart__img cart__item2">
                  <a href="/">
                    <img src={item.product.image} alt="" />
                  </a>
                </div>
                <div className="cart__name cart__item2">
                  <strong>{item.product.name}</strong>
                </div>
                <div className="cart__price cart__item2">
                  <strong>{item.product.price}</strong>
                </div>
                <div className="cart__quantity cart__item2">
                  <strong>
                    <input
                      type="button"
                      value="-"
                      className="modal__btn"
                      onClick={() => updateProduct(item.id, "minus")}
                    />
                    <input
                      type="text"
                      name="quantity"
                      value={item.quantity}
                      min="1"
                      max="100"
                      className="modal__sl"
                    />
                    <input
                      type="button"
                      value="+"
                      className="modal__btn"
                      onClick={() => updateProduct(item.id, "plus")}
                    />
                  </strong>
                </div>
                <div className="cart__total cart__item2">
                  <strong>
                    {(item.product.price * item.quantity).toFixed(2)}
                  </strong>
                </div>
                <div
                  className="cart__delete cart__item2"
                  onClick={() => deleteProduct(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <strong>
                    <AiOutlineClose />
                  </strong>
                </div>
              </div>
            );
          })
        ) : (
          <span className="content__error"> KHÔNG CÓ SẢN PHẨM </span>
        )}
      </div>

      <div className="cart__sum">
        <span>Tổng tiền:</span>
        <strong>{total.toFixed(2)}</strong>
        <div className="cart__btn">
          <div className="cart__button4 cart__button">
            <button type="text">
              <Link to="/">Tiếp tục mua hàng</Link>
            </button>
          </div>
          <div className="cart__button4">
            <button type="text">
              <Link to="/Order">Thanh Toán</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
