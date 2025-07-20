import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPhone, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import "./Topbar.css";
import '../../index.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-container container">
        <div>
          <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#b3e0ff", marginRight: 6 }} />
          Nhập mã <b className="text-react-yellow">NEWBIE</b> giảm ngay 10% cho lần đầu mua hàng
        </div>
        <div>
          <span className="topbar-hotline">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffffff", marginRight: 8 }} />
            Hotline: <b className="text-react-yellow">0828 750 787</b>
          </span>
          <FontAwesomeIcon icon={faMobileAlt} style={{ marginLeft: 16, marginRight: 8 }} />
          <button type="button" className="topbar-link">Tải ứng dụng</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;