import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import "./detailCapSo.css";
import axios from "axios";
import shortid from "shortid";

function detailCapSo() {
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
        fetch(`http://localhost:3000/stt/${id}`)
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
                        <div className="detail_thietbi">
                            <h2 className="desc">Thông tin thiết bị</h2>
                            <>
                                <div className="top_detail">
                                    <div className="detail_box">
                                        <div className="detail_item capso">
                                            <p className="title">Họ tên:</p>
                                            <p className="desc">
                                                {data.tenKhachhang}
                                            </p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">
                                                Tên dịch vụ:
                                            </p>
                                            <p className="desc">
                                                {data.tenDichVu}
                                            </p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">Số thứ tự:</p>
                                            <p className="desc">{data.SoTT}</p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">
                                                Thời gian cấp:
                                            </p>
                                            <p className="desc">
                                                {data.thoigiancap}
                                            </p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">
                                                Hạn sử dụng:
                                            </p>
                                            <p className="desc">
                                                {data.hansudung}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="detail_box">
                                        <div className="detail_item capso">
                                            <p className="title">Nguồn cấp:</p>
                                            <p className="desc">
                                                {data.nguoncap}
                                            </p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">Trạng thái:</p>
                                            <p className="desc">
                                                {data.trangthai}
                                            </p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">
                                                Số điện thoại:
                                            </p>
                                            <p className="desc">{data.sdt}</p>
                                        </div>
                                        <div className="detail_item capso">
                                            <p className="title">
                                                Địa chỉ Email:
                                            </p>
                                            <p className="desc">{data.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                    <div className="create_thietbi">
                        <p className="cong">{"{...}"}</p>
                        <Link to={`/update/${data.id}`} className="title">
                            Cập nhật thiết bị
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default detailCapSo;
