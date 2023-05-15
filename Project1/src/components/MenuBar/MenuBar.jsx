import React, { useState } from "react";
import Logo from "../../assets/img/Group.svg";
import Dashboard from "../../assets/img/element-4.svg";
import ThietBi from "../../assets/img/monitor.svg";
import DichVu from "../../assets/img/DichVu.svg";
import CapSo from "../../assets/img/CapSo.svg";
import BaoCao from "../../assets/img/BaoCao.svg";
import Setting from "../../assets/img/setting.svg";
import Setting_b from "../../assets/img/setting_bottom.svg";
import Logout from "../../assets/img/fi_log-out.svg";
import "./menuBar.css";
import { Link } from "react-router-dom";

function nav() {
    const [dropdown, setDropdown] = useState(false);

    // const [text2, setText2] = useState("");

    const handleClick = () => {
        setDropdown(!dropdown);
    };

    const [activeButton, setActiveButton] = useState(2);

    const handleClickLink = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };
    return (
        <div className="MenuBar">
            <img src={Logo} alt="Alta" className="logo" />
            <ul className="Menu">
                <li
                    className={`${activeButton === 1 ? "active " : ""}`}
                    onClick={() => handleClickLink(1)}
                >
                    <Link to="/dash" className="menu_item">
                        <img
                            src={Dashboard}
                            alt="menu_icon"
                            className="img_item"
                        />
                        Dashboard
                    </Link>
                </li>
                <li
                    className={`${activeButton === 2 ? "active " : ""}`}
                    onClick={() => handleClickLink(2)}
                >
                    <Link to="/thietbi" className="menu_item">
                        <img src={ThietBi} alt="menu_icon" />
                        Thiết bị
                    </Link>
                </li>
                <li
                    className={`${activeButton === 3 ? "active " : ""}`}
                    onClick={() => handleClickLink(3)}
                >
                    <Link to="/dichvu" className="menu_item">
                        <img src={DichVu} alt="menu_icon" />
                        Dịch vụ
                    </Link>
                </li>
                <li
                    className={`${activeButton === 4 ? "active " : ""}`}
                    onClick={() => handleClickLink(4)}
                >
                    <Link to="/capso" className="menu_item">
                        <img src={CapSo} alt="menu_icon" />
                        Cấp số
                    </Link>
                </li>
                <li
                    className={`${activeButton === 5 ? "active " : ""}`}
                    onClick={() => handleClickLink(5)}
                >
                    <Link to="/baocao" className="menu_item">
                        <img src={BaoCao} alt="menu_icon" />
                        Báo cáo
                    </Link>
                </li>
                <li onClick={handleClick}>
                    <div
                        className={`menu_item li_dropdown ${
                            activeButton === 6 ? "active" : ""
                        }`}
                        onClick={() => handleClickLink(6)}
                    >
                        <img src={Setting} alt="menu_icon" />
                        Cài đặt hệ thống
                        <img src={Setting_b} alt="menu_icon" />
                        <div
                            className={
                                dropdown ? "dropdown_menu" : "dropdown-menu"
                            }
                        >
                            <Link to="/caidat/quanly" className="drop_link">
                                Quản lý vai trò
                            </Link>
                            <Link to="/caidat/taikhoan" className="drop_link">
                                Quản lý tài khoản
                            </Link>
                            <Link to="/caidat/nhatky" className="drop_link">
                                Nhật ký người dùng
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
            <Link to="/login" className="btn_logout">
                <img src={Logout} alt="Logout" />
                Đăng xuất
            </Link>
        </div>
    );
}

export default nav;
