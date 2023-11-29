import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import useNotify from "../../hook/useNotify";
import { setIsLogin } from "../../redux/slice/appReduce";
import { useEffect } from "react";
import { getCart } from "../../service/cart";
import { useState } from "react";
const Header = () => {
  const { isLogin,checkAdd,checkDelete } = useSelector((states) => states.appReduce);
  const User = localStorage.getItem("user");
  const isCheckLogin = !!User;
  const CV = localStorage.getItem("cv");
  const dispatch = useDispatch();
  const notify = useNotify();
  const handleLogout = () => {
    dispatch(setIsLogin(false));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cv");
    notify.success("Đăng xuất thành công");
  };
  const [cart,setCart] = useState([])
  useEffect(()=>{
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
  },[isLogin,checkAdd,checkDelete])

  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__info">
            
            <ul>
              <li>
                <a href="/" title={"Hệ thống cửa hàng"}>
                  Hệ thống cửa hàng
                </a>
              </li>
              <li>
                <a href="/">0869394765</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__sub">
        <div className="container">
          <div className="header__content">
            <div className="header__mobile">
              <AiOutlineMenu />
            </div>
            <div className="header__hotline col-lg-3">
              <a href="/">
                <img src="../assets/images/header/mobile-phone.svg" alt="" />
                0869394765
              </a>
            </div>
            <div className="header__logo col-lg-3">
              <Link to="/">
                <img
                  src="https://theme.hstatic.net/200000549029/1000902525/14/logo.png?v=2761"
                  alt=""
                />
              </Link>
            </div>
            <div className="header__help col-lg-3">
              <ul>
                <li className="header__cart">
                  <Link to="/cart">
                    <img
                      src="../assets/images/header/shopping-cart.svg"
                      alt=""
                    />
                  </Link>
                  <span className="header__quantity">1</span>
                </li>
                <li className="header__search">
                  <Link to="/search">
                    <img src="../assets/images/header/search.svg" alt="" />
                  </Link>
                </li>

                {isCheckLogin && (
                  <li className="header__account">
                    <a href="/">
                      <img
                        src={`https://ui-avatars.com/api/?background=ff324d&color=fff&name=+${User.replace(
                          /['"]+/g,
                          ""
                        )}`}
                        style={{ borderRadius: "50%" }}
                        alt=""
                      />
                    </a>
                    <ul>
                      <li>
                        <div
                          className="header__logout"
                          onClick={() => handleLogout()}
                        >
                          <FiLogOut />
                          Đăng xuất
                        </div>
                      </li>
                    </ul>
                  </li>
                )}
                {!isCheckLogin && (
                  <li className="header__account">
                    <a href="/">
                      <img src="../assets/images/header/user.svg" alt="" />
                    </a>
                    <ul>
                      <li>
                        <Link to="user/register">
                          <BsPencilSquare />
                          Đăng ký
                        </Link>
                      </li>
                      <li>
                        <Link to="user/login">
                          <FaLock />
                          Đăng nhập
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <form className="header__tk">
            <input type="search" placeholder="Tìm kiếm sản phẩm...." />
            <span>
              <button>
                <AiOutlineSearch />
              </button>
            </span>
          </form>
        </div>
      </div>

      <div className="container">
        {/* ${open === 0 ? "" : "active"} */}
        <nav className={`header__menu `}>
          <ul>
            <li className="header__logo-mobile">
              <div className="header__sub-mobile">
                <div className="header__close">
                  <MdClose />
                </div>
                <img
                  src="../assets/images/header/store_1554367871_28.jpg"
                  alt=""
                />
                <div className="header__menu-mobile">
                  <Link to="/user/login">
                    <p>Đăng Nhập</p>
                  </Link>
                  <Link to="/user/register">
                    <p>Đăng ký</p>
                  </Link>
                </div>
              </div>
            </li>
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
              <Link to="/Chan_vay">Chân váy</Link>
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
            {CV === "1" ? (
              <li>
                <Link to="/Admin">Admin</Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
