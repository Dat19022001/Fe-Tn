import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelopeSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__item">
            <h4 className="footer__title">Thời trang công sở Hime</h4>
            <div className="footer__content">
              <p>
                "... Chúng tôi tự tin khẳng đinh rằng sản phẩm từ cửa hàng chúng
                tôi luôn đảm bảo về chất lượng và giá cả. ..."
              </p>
              <ul>
                <li>
                  <FaMapMarkerAlt />
                  <span>111 Triều Khúc, Tân Triều, Thanh Trì, TP. Hà Nội.</span>
                </li>
                <li>
                  <FaEnvelopeSquare />
                  <span>
                    <a href="a">dat@gmail.com</a>
                  </span>
                </li>
                <li>
                  <FaPhoneSquareAlt />
                  <span>
                    <a href="a">0869394765</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__item">
            <h4 className="footer__title">Hướng dẫn</h4>
            <ul className="footer__menu">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/Ao">Áo</Link>
              </li>
              <li>
                <Link to="/Quan">Quần</Link>
              </li>
              <li>
                <Link to="/SetBo">Set Bộ</Link>
              </li>
              <li>
                <Link to="/gioi_thieu">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/lien_he">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h4 className="footer__title">Chính sách</h4>
            <ul className="footer__menu">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/Ao">Áo</Link>
              </li>
              <li>
                <Link to="/Quan">Quần</Link>
              </li>
              <li>
                <Link to="/SetBo">Set Bộ</Link>
              </li>
              <li>
                <Link to="/gioi_thieu">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/lien_he">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h4 className="footer__title">Tài Khoản</h4>
            <ul className="footer__menu">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/Ao">Áo</Link>
              </li>
              <li>
                <Link to="/Quan">Quần</Link>
              </li>
              <li>
                <Link to="/SetBo">Set Bộ</Link>
              </li>
              <li>
                <Link to="/gioi_thieu">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/lien_he">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
