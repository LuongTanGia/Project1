import React, { useState } from "react";
import Avatar from "../../assets/img/img_infor.svg";
import ThongBao from "../../assets/img/thongbaosvg.svg";
import "./header.css";

function header() {
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
        <div className="header">
            <h3 className="desc">Thông tin cá nhân</h3>
            <div className="header_right">
                <img
                    src={ThongBao}
                    alt="thongbao"
                    className="thongbao"
                    onClick={handleClick}
                />

                <div className="Menu_thongbao" style={err ? myStyle : myStyle2}>
                    <div className="top">
                        <h3 className="title">Thông báo</h3>
                    </div>
                    <ul className="list_menu">
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Nguyễn Thiên Chinh
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Võ Thị Kim Liên
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Hoàng Nguyễn Quốc Huy
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Võ Ngọc Lan Anh
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Nguyễn Thị Trúc Anh
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Nguyễn Thị Thùy Dung
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Nguyễn Thiên Chinh
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                        <li className="li_item">
                            <div className="ul_item">
                                <p className="name">
                                    Người dùng: Võ Thị Kim Liên
                                </p>
                                <p className="time">
                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="right_box">
                    <img src={Avatar} alt="avatar" className="avatar" />
                    <div className="content">
                        <p className="title">Xin chào</p>
                        <h4 className="name_user">Lê Quỳnh Ái Vân</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;
