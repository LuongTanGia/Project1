import React from "react";
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
    return (
        <div className="MenuBar">
            <img src={Logo} alt="Alta" className="logo" />
            <ul className="Menu">
                <li>
                    <Link to="/dash" className="menu_item">
                        <img
                            src={Dashboard}
                            alt="menu_icon"
                            className="img_item"
                        />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/thietbi" className="menu_item">
                        <img src={ThietBi} alt="menu_icon" />
                        Thiết bị
                    </Link>
                </li>
                <li>
                    <Link to="/dichvu" className="menu_item">
                        <img src={DichVu} alt="menu_icon" />
                        Dịch vụ
                    </Link>
                </li>
                <li>
                    <Link to="/capso" className="menu_item">
                        <img src={CapSo} alt="menu_icon" />
                        Cấp số
                    </Link>
                </li>
                <li>
                    <Link to="/baocao" className="menu_item">
                        <img src={BaoCao} alt="menu_icon" />
                        Báo cáo
                    </Link>
                </li>
                <li>
                    <Link to="/caidat" className="menu_item">
                        <img src={Setting} alt="menu_icon" />
                        Cài đặt hệ thống
                        <img src={Setting_b} alt="menu_icon" />
                    </Link>
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
