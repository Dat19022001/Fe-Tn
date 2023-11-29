import { Link } from "react-router-dom";
import Icon from "../../assets/icon-thanh-cong.png";
import "./index.scss";
const Success = () => {
  return (
    <div className="success container">
      <img src={Icon} alt="icon" />
      <p>
        Đơn hàng của quý khách đã thanh toán thành công. MIME sẽ sớm liên hệ với
        quý khách để bàn giao sản phẩm. Cảm ơn quý khách đã mua hàng tại MIME
      </p>
      <div className="success-flex">
        <Link to="/" className="success-btn">Tiếp tục mua hàng</Link>
      </div>
    </div>
  );
};
export default Success;
