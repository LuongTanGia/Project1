import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import "./detailDichVu.css";
import Stt from "../stt/stt";
import axios from "axios";
import shortid from "shortid";

function detailDichvu() {
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
    const [data, setData] = useState();
    const { id } = useParams();
    useEffect(() => {
        // Make an API call when the component mounts
        fetch(`http://localhost:3000/dichvu/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, [id]);
    console.log(data);

    return (
        <>
            {data && (
                <div>
                    <div className="header">
                        <div className="header_left">
                            <h3> Thiết bị</h3>
                            <span>{">"}</span>
                            <h3 className="desc">Danh sách thiết bị</h3>
                        </div>
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
                                                Người dùng: Nguyễn Thị Thùy Dung
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Nguyễn Thiên Chinh
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Võ Thị Kim Liên
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Hoàng Nguyễn Quốc
                                                Huy
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Võ Ngọc Lan Anh
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Nguyễn Thị Trúc Anh
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Nguyễn Thị Thùy Dung
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Nguyễn Thiên Chinh
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                    <li className="li_item">
                                        <div className="ul_item">
                                            <p className="name">
                                                Người dùng: Võ Thị Kim Liên
                                            </p>
                                            <p className="time">
                                                Thời gian nhận số: 12h20 ngày
                                                30/11/2021
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="right_box">
                                <img
                                    src={Avatar}
                                    alt="avatar"
                                    className="avatar"
                                />
                                <div className="content">
                                    <p className="title">Xin chào</p>
                                    <h4 className="name_user">
                                        Lê Quỳnh Ái Vân
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dichvu detail">
                        <h3 className="desc">Quản lý thiết bị</h3>
                        <div className="content_detail">
                            <div className="detail_thietbi left_detail">
                                <h2 className="desc">Thông tin thiết bị</h2>
                                <>
                                    <div className="left_detail">
                                        <div className="">
                                            <div className="detail_box">
                                                <div className="detail_item detail_dichvu">
                                                    <p className="title_dichvu">
                                                        Mã dịch vụ :
                                                    </p>
                                                    <p className="desc_dichvu">
                                                        {data.maDichVu}
                                                    </p>
                                                </div>
                                                <div className="detail_item detail_dichvu">
                                                    <p className="title_dichvu">
                                                        Tên dịch vụ:
                                                    </p>
                                                    <p className="desc_dichvu">
                                                        {data.tenDichVu}
                                                    </p>
                                                </div>
                                                <div className="detail_item detail_dichvu">
                                                    <p className="title_dichvu">
                                                        Mô Tả:
                                                    </p>
                                                    <p className="desc_dichvu">
                                                        {data.Mota}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom_detail">
                                            <h2 className="desc_dichvu">
                                                Quy tắc cấp số
                                            </h2>
                                            <div className="detail_box">
                                                <div className="box-capso">
                                                    <p className="title_capso">
                                                        Tăng tự động:{" "}
                                                    </p>
                                                    <button className="capso">
                                                        0001
                                                    </button>
                                                    <p className="title_capso">
                                                        đến
                                                    </p>
                                                    <button className="capso">
                                                        9999
                                                    </button>
                                                </div>
                                                <div className="box-capso">
                                                    <p className="title_capso">
                                                        Prefix:
                                                    </p>
                                                    <button className="capso">
                                                        0001
                                                    </button>
                                                </div>
                                                <div className="box-capso">
                                                    <p className="title_capso">
                                                        Reset mỗi ngày
                                                    </p>
                                                    <p>Ví dụ: 201-2001</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div className="right_detail">
                                <Stt />
                            </div>
                        </div>
                    </div>
                    <div className="create_thietbi">
                        <p className="cong">{"{...}"}</p>
                        <Link to={`/update/${data.id}`} className="title">
                            Cập nhật thiết bị
                        </Link>
                    </div>
                    <div className="create_thietbi back">
                        <p className="cong">{"<-"}</p>
                        <Link to="/dichvu" className="title">
                            Quay lại
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default detailDichvu;
