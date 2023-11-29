import { Link } from "react-router-dom";
import Icon from "../../assets/thất bại.png";

const Err = () => {
  return (
    <div className="success container">
      <img src={Icon} alt="icon" />
      <p>
        Đơn hàng của quý khách đã thanh toán không thành công.Quý khách vui lòng kiểm tra lại thông tin. MIME cảm ơn quý khách đã quan tâm đến cửa hàng.
      </p>
      <div className="success-flex">
        <Link to="/" className="success-btn">Tiếp tục mua hàng</Link>
      </div>
    </div>
  );
};
export default Err;
