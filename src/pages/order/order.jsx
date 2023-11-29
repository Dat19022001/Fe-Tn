import { Link, useNavigate } from "react-router-dom";
import "./order.scss";
import { useEffect, useState } from "react";
import { getCart } from "../../service/cart";
import { postOrder } from "../../service/order";
import useNotify from "../../hook/useNotify";
const Order = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [payment, setPayment] = useState("");
  const [items, setItems] = useState([]);
  const notify = useNotify();
  const navigate = useNavigate();
  const handleOrder = () => {
    const params = {
      address: address,
      shipping_fee: ship,
      phone: phone,
      notes: note,
      payment_method: payment,
      items: items,
    };
    postOrder(
      params,
      (res)=> {
        if(res.data.order_url === undefined){
          notify.success("Thanh toán thành công")
          navigate("/", { replace: true });
        }
        else{
          window.location.href= res.data.order_url;
        }
      },
      (err)=>{
        console.log("lỗi")
      }
    )
  };

  useEffect(() => {
    const params = {};
    getCart(
      params,
      (res) => {
        setData(res.data.cart);
        const itemsData = res.data.cart.map((item) => {
          return {
            product_id: item.product.id,
            product_name: item.product.name,
            product_price: item.product.price,
            quantity: item.quantity,
          };
        });
        setItems(itemsData);
      },
      (err) => {
        setData([]);
      }
    );
  }, []);
  let total = 0;
  let ship = Math.floor(Math.random() * 2) + 1;
  return (
    <div className="order container">
      <div className="order__left">
        <div className="order__name">HIME</div>
        <div className="order__title">Thông tin giao hàng</div>
        <div className="order__form">
          <input
            placeholder="Họ và tên"
            className="order__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="order__tt">
            <input placeholder="Email" className="order__input order__email" />
            <input
              placeholder="Số Điện Thoại"
              className="order__input order__sdt"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <input
            placeholder="Địa chỉ"
            className="order__input"
            style={{ marginBottom: 20 }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            placeholder="Note"
            className="order__input"
            style={{ marginBottom: 20 }}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="order__pt">Phường thức thanh toán</div>
        <div className="order__box">
          <div className="order__lc">
            <label>
              <input
                type="radio"
                name="pt"
                onChange={(e) => setPayment("COD")}
              />
              Thanh toán khi nhận hàng (COD)
            </label>
          </div>
          <div className="order__lc">
            <label>
              <input
                type="radio"
                name="pt"
                onChange={(e) => setPayment("payment")}
              />
              Thanh toán qua ngân hàng
            </label>
          </div>
        </div>
      </div>
      <div className="order__right">
        {data.map((item, index) => {
          total = total + item.quantity * item.product.price;
          return (
            <div className="order__sp" key={index}>
              <img src={item.product.image} alt="áo" />
              <div className="order__ct">
                <p>Name: {item.product.name}</p>
                <span>Số lượng: {item.quantity}</span>
              </div>
              <div className="order__price">
                Price: {item.product.price.toFixed(2)}$
              </div>
            </div>
          );
        })}
        <div className="order__cp">
          <div className="order__total">Tổng Tiền: {total.toFixed(2)} $</div>
          <div className="order__ship">Phí Ship: {ship.toFixed(2)} $</div>
        </div>
        <div className="order__tong">
          <p>Tổng cộng</p>
          <p>{(total + ship).toFixed(2)}$</p>
        </div>
        <div className="order__bt">
          <div className="cart__button4">
            <button type="text">
              <Link to="/cart"> Quay lại giỏ hàng</Link>
            </button>
          </div>
          <div className="cart__button4">
            <button type="text" onClick={() => handleOrder()}>
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
