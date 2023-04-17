import React, { useState } from "react";
import "./dashBoard.css";
import Header from "../../Header/header";
import stt from "../../../assets/img/stt.svg";
import sttCheck from "../../../assets/img/sttcheck.svg";
import sttCho from "../../../assets/img/sttcho.svg";
import sttBoQua from "../../../assets/img/sttboqua.svg";
import up from "../../../assets/img/VectorUp.svg";
import down from "../../../assets/img/Vectordown.svg";
import Charts from "./Chart/charts";
import Avatar from "../../../assets/img/img_infor.svg";
import ThongBao from "../../../assets/img/thongbaosvg.svg";
import Tb from "../../../assets/img/monitor.svg";
import { Link } from "react-router-dom";

// import "../../../assets/js/app";
import Date from "./Date/date";
function dashBoard() {
    const [err, setErr] = useState(false);

    // const [text2, setText2] = useState("");

    const handleClick = () => {
        setErr(!err);
    };
    const myStyle = {
        display: "block",
    };
    const myStyle2 = {
        display: "none",
    };
    return (
        <>
            <div className="header">
                <h3 className="desc">Dashboard</h3>
            </div>
            <div className="dashBoard">
                <div className="dashBoard_left">
                    <h3 className="title">Biểu đồ cấp số</h3>
                    <div className="dashBoard_center">
                        <div className="center_item">
                            <div className="item_top">
                                <img src={stt} alt="" />
                                <p>Số thứ tự đã cấp</p>
                            </div>
                            <div className="item_bottom">
                                <p>4.221 </p>
                                <span>
                                    <img src={up} alt="" /> 32,41%
                                </span>
                            </div>
                        </div>
                        <div className="center_item">
                            <div className="item_top">
                                <img src={sttCheck} alt="" />
                                <p>Số thứ tự đã sử dụng</p>
                            </div>
                            <div className="item_bottom">
                                <p>3.721</p>
                                <span>
                                    <img src={down} alt="" /> 32,41%
                                </span>
                            </div>
                        </div>
                        <div className="center_item">
                            <div className="item_top">
                                <img src={sttCho} alt="" />
                                <p>Số thứ tự đang chờ</p>
                            </div>
                            <div className="item_bottom">
                                <p>468</p>
                                <span>
                                    {" "}
                                    <img src={up} alt="" />
                                    56,41%
                                </span>
                            </div>
                        </div>
                        <div className="center_item">
                            <div className="item_top">
                                <img src={sttBoQua} alt="" />
                                <p>Số thứ tự đã bỏ qua</p>
                            </div>
                            <div className="item_bottom">
                                <p>32</p>
                                <span>
                                    {" "}
                                    <img src={down} alt="" />
                                    22,41%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="dashBoard_bottom">
                        <Charts />{" "}
                    </div>
                </div>
                <div className="dashBoard_right">
                    <div className="ellipse">
                        <div className="ellipse_item">
                            <div className="header">
                                <div className="header_right">
                                    <img
                                        src={ThongBao}
                                        alt="thongbao"
                                        className="thongbao"
                                        onClick={handleClick}
                                    />

                                    <div
                                        className="Menu_thongbao"
                                        style={err ? myStyle : myStyle2}
                                    >
                                        <div className="top">
                                            <h3 className="title">Thông báo</h3>
                                        </div>
                                        <ul className="list_menu">
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Nguyễn Thị
                                                        Thùy Dung
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Nguyễn Thiên
                                                        Chinh
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Võ Thị Kim
                                                        Liên
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Hoàng Nguyễn
                                                        Quốc Huy
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Võ Ngọc Lan
                                                        Anh
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Nguyễn Thị
                                                        Trúc Anh
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Nguyễn Thị
                                                        Thùy Dung
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Nguyễn Thiên
                                                        Chinh
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="li_item">
                                                <div className="ul_item">
                                                    <p className="name">
                                                        Người dùng: Võ Thị Kim
                                                        Liên
                                                    </p>
                                                    <p className="time">
                                                        Thời gian nhận số: 12h20
                                                        ngày 30/11/2021
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="right_box">
                                        <Link to="/">
                                            <img
                                                src={Avatar}
                                                alt="avatar"
                                                className="avatar"
                                            />
                                        </Link>
                                        <div className="content">
                                            <p className="title">Xin chào</p>
                                            <h4 className="name_user">
                                                Lê Quỳnh Ái Vân
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <h4 className="title">Tổng quan</h4>
                                <div className="body_item">
                                    <div className="body_item_left">
                                        <div className="skill">
                                            <div className="outer">
                                                <div className="inner">
                                                    <div class="skill2">
                                                        <div class="outer2">
                                                            <div class="inner2">
                                                                <div class="number">
                                                                    90%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1"
                                                            width="60px"
                                                            height="60px"
                                                            class="svg2"
                                                        >
                                                            <defs>
                                                                <linearGradient id="GradientColor">
                                                                    <stop
                                                                        offset="0%"
                                                                        stop-color="#e91e63"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stop-color="#673ab7"
                                                                    />
                                                                </linearGradient>
                                                            </defs>
                                                            <circle
                                                                cx="29"
                                                                cy="29"
                                                                r="24"
                                                                stroke-linecap="round"
                                                                class="circle2"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                width="65px"
                                                height="65px"
                                            >
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                        <stop
                                                            offset="0%"
                                                            stop-color="#e91e63"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stop-color="#673ab7"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <circle
                                                    cx="34"
                                                    cy="34"
                                                    r="30"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </div>

                                        <div className="content">
                                            <p className="desc">4.221</p>
                                            <div className="content_desc">
                                                <img src={Tb} alt="" />
                                                <p>Thiết bị</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body_item_right">
                                        <div className="right_desc_box">
                                            <p className="right_desc">
                                                Đang hoạt động
                                            </p>
                                            <p className="right_desc">
                                                Ngưng hoạt động
                                            </p>
                                        </div>
                                        <div className="right_desc_number">
                                            <p className="right_number">
                                                3.799
                                            </p>
                                            <p className="right_number">422</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="body_item">
                                    <div className="body_item_left">
                                        <div className="skill item2">
                                            <div className="outer item2">
                                                <div className="inner item2">
                                                    <div class="skill2 item2">
                                                        <div class="outer2 item2">
                                                            <div class="inner2 item2">
                                                                <div class="number item2">
                                                                    76%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1"
                                                            width="60px"
                                                            height="60px"
                                                            class="svg2 item2"
                                                        >
                                                            <defs>
                                                                <linearGradient id="GradientColor">
                                                                    <stop
                                                                        offset="0%"
                                                                        stop-color="#e91e63"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stop-color="#673ab7"
                                                                    />
                                                                </linearGradient>
                                                            </defs>
                                                            <circle
                                                                cx="29"
                                                                cy="29"
                                                                r="24"
                                                                stroke-linecap="round"
                                                                class="circle2 item2"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                width="65px"
                                                height="65px"
                                                class="item2"
                                            >
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                        <stop
                                                            offset="0%"
                                                            stop-color="#e91e63"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stop-color="#673ab7"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <circle
                                                    cx="34"
                                                    cy="34"
                                                    r="30"
                                                    stroke-linecap="round"
                                                    class="item2"
                                                />
                                            </svg>
                                        </div>

                                        <div className="content">
                                            <p className="desc">4.221</p>
                                            <div className="content_desc">
                                                <img src={Tb} alt="" />
                                                <p>Thiết bị</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body_item_right">
                                        <div className="right_desc_box">
                                            <p className="right_desc">
                                                Đang hoạt động
                                            </p>
                                            <p className="right_desc">
                                                Ngưng hoạt động
                                            </p>
                                        </div>
                                        <div className="right_desc_number">
                                            <p className="right_number">
                                                3.799
                                            </p>
                                            <p className="right_number">422</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="body_item">
                                    <div className="body_item_left">
                                        <div className="skill">
                                            <div className="outer">
                                                <div className="inner">
                                                    <div class="skill2">
                                                        <div class="outer2">
                                                            <div class="inner2">
                                                                <div class="number">
                                                                    90%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1"
                                                            width="60px"
                                                            height="60px"
                                                            class="svg2"
                                                        >
                                                            <defs>
                                                                <linearGradient id="GradientColor">
                                                                    <stop
                                                                        offset="0%"
                                                                        stop-color="#e91e63"
                                                                    />
                                                                    <stop
                                                                        offset="100%"
                                                                        stop-color="#673ab7"
                                                                    />
                                                                </linearGradient>
                                                            </defs>
                                                            <circle
                                                                cx="29"
                                                                cy="29"
                                                                r="24"
                                                                stroke-linecap="round"
                                                                class="circle2"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                width="65px"
                                                height="65px"
                                            >
                                                <defs>
                                                    <linearGradient id="GradientColor">
                                                        <stop
                                                            offset="0%"
                                                            stop-color="#e91e63"
                                                        />
                                                        <stop
                                                            offset="100%"
                                                            stop-color="#673ab7"
                                                        />
                                                    </linearGradient>
                                                </defs>
                                                <circle
                                                    cx="34"
                                                    cy="34"
                                                    r="30"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </div>

                                        <div className="content">
                                            <p className="desc">4.221</p>
                                            <div className="content_desc">
                                                <img src={Tb} alt="" />
                                                <p>Thiết bị</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body_item_right">
                                        <div className="right_desc_box">
                                            <p className="right_desc">
                                                Đang hoạt động
                                            </p>
                                            <p className="right_desc">
                                                Ngưng hoạt động
                                            </p>
                                        </div>
                                        <div className="right_desc_number">
                                            <p className="right_number">
                                                3.799
                                            </p>
                                            <p className="right_number">422</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Date />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default dashBoard;
