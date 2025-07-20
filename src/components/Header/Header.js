import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faBagShopping,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from "../../assets/images/logo/logo.jpg";
import Lang from "../../assets/images/icon/vn.jpg";
import DropdownCategory from "./Dropdown/DropdownCategory";
import { useCart } from "../Context/CartContext";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cart } = useCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header">
        {isDropdownOpen && (
          <div
            className="header-dropdown-overlay"
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
        <div className="header-top container" style={{ position: "relative", zIndex: 11 }}>
          <img src={logo} alt="Logo" className="header-logo" />
          <div className="header-search">
            <input type="text" placeholder="Tìm sản phẩm" />
            <button className="header-search-icon">
              <FontAwesomeIcon icon={faCamera} />
            </button>
            <button className="header-search-btn">
              <FontAwesomeIcon icon={faSearch} className="fa-search" />
            </button>
          </div>
          <div className="header-actions">
            <span className="header-lang">
              <span className="header-lang">
                <img src={Lang} alt="VI" className="flag-icon" />
                VI
              </span>
            </span>
            <span className="header-cart">
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ fontSize: "24px", color: "#0154C5" }}
              />
              <span className="header-cart-badge">{totalQuantity}</span> Giỏ hàng
            </span>
            <span className="header-account">
              <FontAwesomeIcon
                icon={faCircleUser}
                style={{ fontSize: "24px", color: "#0154C5" }}
              />
              Tài khoản
            </span>
          </div>
        </div>
        <nav className="header-nav container">
          <div
            className="header-menu-btn"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            style={{ position: "relative", zIndex: 10 }}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ marginRight: 8, fontSize: 20 }}
            />
            Danh Mục Sản Phẩm
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: 8, fontSize: 18 }}
            />
            {isDropdownOpen && (
              <div style={{ position: "absolute", left: 0, top: "100%" }}>
                <DropdownCategory />
              </div>
            )}
          </div>
          <a href="#" style={{ position: "relative", zIndex: 11 }}>Về Chúng Tôi</a>
          <a href="#" style={{ position: "relative", zIndex: 11 }}>Bài Viết</a>
          <a href="#" style={{ position: "relative", zIndex: 11 }}>Catalog</a>
          <a href="#" style={{ position: "relative", zIndex: 11 }}>Liên Hệ</a>
          <span className="header-nav-info" style={{ marginLeft: "65px", position: "relative", zIndex: 11}}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10.0002C20 15.5231 15.5228 20.0002 10 20.0002C4.47715 20.0002 0 15.5231 0 10.0002C0 4.4774 4.47715 0.000244141 10 0.000244141C15.5228 0.000244141 20 4.4774 20 10.0002Z"
                fill="#0373F3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 5.25024C10.4142 5.25024 10.75 5.58603 10.75 6.00024V9.68958L13.0303 11.9699C13.3232 12.2628 13.3232 12.7377 13.0303 13.0306C12.7374 13.3235 12.2626 13.3235 11.9697 13.0306L9.46967 10.5306C9.32902 10.3899 9.25 10.1992 9.25 10.0002V6.00024C9.25 5.58603 9.58579 5.25024 10 5.25024Z"
                fill="white"
              />
            </svg>
            <span className="text-black">Hỗ trợ 24/7</span>
          </span>
          <span className="header-nav-info" style={{ position: "relative", zIndex: 11 }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25993 21.3886H6C5.05719 21.3886 4.58579 21.3886 4.29289 21.0957C4 20.8028 4 20.3314 4 19.3886V18.2767C4 17.7582 4 17.4989 4.13318 17.2674C4.26636 17.0359 4.46727 16.919 4.8691 16.6853C7.51457 15.1467 11.2715 14.2806 13.7791 15.7761C13.9475 15.8766 14.0991 15.9979 14.2285 16.1434C14.7866 16.7702 14.746 17.7164 14.1028 18.2777C13.9669 18.3963 13.8222 18.4862 13.6764 18.5174C13.7962 18.5036 13.911 18.4876 14.0206 18.4702C14.932 18.3248 15.697 17.8378 16.3974 17.3087L18.2046 15.9435C18.8417 15.4622 19.7873 15.4621 20.4245 15.9433C20.9982 16.3764 21.1736 17.0897 20.8109 17.671C20.388 18.3489 19.7921 19.2162 19.2199 19.7462C18.6469 20.2769 17.7939 20.7506 17.0975 21.0868C16.326 21.4591 15.4738 21.6737 14.6069 21.814C12.8488 22.0986 11.0166 22.0552 9.27633 21.6966C8.29253 21.4939 7.27079 21.3886 6.25993 21.3886Z"
                fill="#0373F3"
              />
              <path
                d="M6.58579 2.58603C6.21901 2.95281 6.08188 3.45955 6.03061 4.25004C7.24895 4.23379 8.23355 3.2492 8.2498 2.03086C7.4593 2.08213 6.95256 2.21926 6.58579 2.58603Z"
                fill="#0373F3"
              />
              <path
                d="M17.4142 2.58603C17.0474 2.21925 16.5407 2.08212 15.7502 2.03085C15.7664 3.2492 16.751 4.2338 17.9694 4.25004C17.9181 3.45955 17.781 2.95281 17.4142 2.58603Z"
                fill="#0373F3"
              />
              <path
                d="M17.4142 9.41446C17.0474 9.78123 16.5407 9.91836 15.7502 9.96963C15.7665 8.75129 16.751 7.76669 17.9694 7.75045C17.9181 8.54094 17.781 9.04768 17.4142 9.41446Z"
                fill="#0373F3"
              />
              <path
                d="M6.58579 9.41446C6.95256 9.78123 7.4593 9.91836 8.2498 9.96963C8.23355 8.75129 7.24895 7.7667 6.03061 7.75045C6.08188 8.54094 6.21901 9.04768 6.58579 9.41446Z"
                fill="#0373F3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 5.75024C8.07107 5.75024 9.75 4.07131 9.75 2.00024H14.25C14.25 4.07131 15.9289 5.75024 18 5.75024V6.25024C15.9289 6.25024 14.25 7.92918 14.25 10.0002H9.75C9.75 7.92918 8.07107 6.25024 6 6.25024V5.75024ZM12 7.00024C12.5523 7.00024 13 6.55253 13 6.00024C13 5.44796 12.5523 5.00024 12 5.00024C11.4477 5.00024 11 5.44796 11 6.00024C11 6.55253 11.4477 7.00024 12 7.00024Z"
                fill="#0373F3"
              />
            </svg>
            <span className="text-black">Miễn Phí Vận Chuyển</span>
          </span>
          <span className="header-nav-info" style={{ position: "relative", zIndex: 11 }}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2.00024C0 0.895675 0.89543 0.000244141 2 0.000244141H13C14.1046 0.000244141 15 0.895675 15 2.00024V3.00024H16.5194C17.1269 3.00024 17.7016 3.27642 18.0811 3.75085L19.5617 5.60163C19.8454 5.95626 20 6.39688 20 6.85103V11.0002C20 12.1048 19.1046 13.0002 18 13.0002H17C17 14.6571 15.6569 16.0002 14 16.0002C12.3431 16.0002 11 14.6571 11 13.0002H8C8 14.6571 6.65685 16.0002 5 16.0002C3.34315 16.0002 2 14.6571 2 13.0002C0.895432 13.0002 0 12.1048 0 11.0002V2.00024ZM15 9.00024V5.00024H16.5194L18 6.85103V9.00024H15ZM6 13.0002C6 13.5525 5.55228 14.0002 5 14.0002C4.44772 14.0002 4 13.5525 4 13.0002C4 12.448 4.44772 12.0002 5 12.0002C5.55228 12.0002 6 12.448 6 13.0002ZM14 14.0002C14.5523 14.0002 15 13.5525 15 13.0002C15 12.448 14.5523 12.0002 14 12.0002C13.4477 12.0002 13 12.448 13 13.0002C13 13.5525 13.4477 14.0002 14 14.0002Z"
                fill="#0373F3"
              />
            </svg>
            <span className="text-black"> Giao Hàng Nhanh 2h</span>
          </span>
          <span className="header-nav-info" style={{ position: "relative", zIndex: 11 }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C6.47715 22.0002 2 17.5231 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM5.46056 11.0836C5.83331 7.80012 8.62404 5.25024 12.0096 5.25024C14.148 5.25024 16.0489 6.26817 17.2521 7.8427C17.5036 8.17183 17.4406 8.64251 17.1115 8.89401C16.7824 9.1455 16.3117 9.08257 16.0602 8.75345C15.1289 7.53469 13.6613 6.75024 12.0096 6.75024C9.45213 6.75024 7.33639 8.63243 6.9733 11.0836H7.33652C7.63996 11.0836 7.9135 11.2664 8.02953 11.5468C8.14556 11.8272 8.0812 12.1499 7.86649 12.3643L6.69823 13.5309C6.40542 13.8233 5.9311 13.8233 5.63829 13.5309L4.47003 12.3643C4.25532 12.1499 4.19097 11.8272 4.30699 11.5468C4.42302 11.2664 4.69656 11.0836 5 11.0836H5.46056ZM18.3617 10.4696C18.0689 10.1771 17.5946 10.1771 17.3018 10.4696L16.1335 11.6362C15.9188 11.8506 15.8545 12.1733 15.9705 12.4537C16.0865 12.7341 16.3601 12.9169 16.6635 12.9169H17.0267C16.6636 15.3681 14.5479 17.2502 11.9905 17.2502C10.3464 17.2502 8.88484 16.4731 7.9529 15.2641C7.70002 14.936 7.22908 14.8751 6.90101 15.1279C6.57295 15.3808 6.512 15.8517 6.76487 16.1798C7.96886 17.7418 9.86205 18.7502 11.9905 18.7502C15.376 18.7502 18.1667 16.2004 18.5395 12.9169H19C19.3035 12.9169 19.577 12.7341 19.693 12.4537C19.8091 12.1733 19.7447 11.8506 19.53 11.6362L18.3617 10.4696Z"
                fill="#0373F3"
              />
            </svg>
            <span className="text-black">30 Ngày Đổi Trả</span>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
