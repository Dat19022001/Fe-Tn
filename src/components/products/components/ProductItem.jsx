import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaExpandAlt } from "react-icons/fa";
import "./ProductItem.scss";
import { useDispatch } from "react-redux";
import { setCheckAdd, setOpenModal, setProductId } from "../../../redux/slice/appReduce";
import { postCart } from "../../../service/cart";
import useNotify from "../../../hook/useNotify";
const ProductItem = ({ data }) => {
  const dispatch = useDispatch();
  const notify = useNotify();
  // console.log(data)
  const openModal = () => {
    dispatch(setOpenModal(true));
    dispatch(setProductId(data.id));
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
    dispatch(setCheckAdd(Date.now()))
  };
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__img" onClick={() => openModal()}>
          <div style={{ lineHeight: 0 }}>
            <img src={data.image} alt="" />
          </div>
        </div>
        <div className="card__text">
          <h3 className="card__title">
            <Link to="">
              <span>{data.name}</span>
            </Link>
          </h3>
          {/*  */}
          <div className="card__price">
            <span> {data.price}$ </span>
          </div>
          <div className="card__icon">
            <div
              className="card__cart card__a"
              onClick={() => addToCart(data.id,1)}
            >
              <RiShoppingBasketLine />
            </div>
            <div className="card__expand card__a">
              <FaExpandAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
