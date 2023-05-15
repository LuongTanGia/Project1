import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";
import InputTags from "../inputTags/inputTags";
import "./createThietBi.css";
import TagsInput from "../inputTags/inputTags";

function createThietbi(props) {
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

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const [tenThietBi, setTenTB] = useState("");
    const [maThietBi, setMaTB] = useState("");
    const [DiaChi, setDC] = useState("");
    const [loai, setLoai] = useState("");
    const [tenDangNhap, setTenDN] = useState("");
    const [MatKhau, setMK] = useState("");
    const [DichVu, setDV] = useState("");

    const [HD, setHD] = useState(false);
    const [KN, setKN] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const product = {
            id: shortid.generate(),
            tenThietBi,
            maThietBi,
            DiaChi,
            loai,
            tenDangNhap,
            MatKhau,
            DichVu,

            HD,
            KN,
        };
        axios.post("http://localhost:3000/products", product).then(() => {
            props.onAddProduct(product);
            setTenTB("");
            setMaTB("");
            setDC("");
            setLoai("");
            setTenDN("");
            setMK("");
            setDV("");
            setHD;
            setKN;
        });
    }
    const arr = ["a", "b", "c"];
    return (
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
            <div className="dichvu">
                <h3 className="desc">Quản lý thiết bị</h3>
                <form onSubmit={handleSubmit} className="Create">
                    <div className="detail_thietbi create">
                        <h2 className="desc">Thông tin thiết bị</h2>
                        <div className="box_create">
                            <div className="box_create_top">
                                <div className="box_left">
                                    <div className="create_item">
                                        <p className="title">Mã thiết bị:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={maThietBi}
                                                onChange={(e) =>
                                                    setMaTB(e.target.value)
                                                }
                                                placeholder="Nhập mã thiết bị"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Tên thiết bị:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={tenThietBi}
                                                onChange={(e) =>
                                                    setTenTB(e.target.value)
                                                }
                                                placeholder="Nhập tên thiết bị"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Địa chỉ IP:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={DiaChi}
                                                onChange={(e) =>
                                                    setDC(e.target.value)
                                                }
                                                placeholder="Nhập địa chỉ IP"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="box_right">
                                    <div className="create_item">
                                        <p className="title">Loại thiết bị:</p>
                                        <div className="input_box">
                                            <select
                                                className="category"
                                                name="category"
                                                value={loai}
                                                onChange={(e) =>
                                                    setLoai(e.target.value)
                                                }
                                            >
                                                <option value="Kiosk">
                                                    Kiosk
                                                </option>

                                                <option value="Display counter">
                                                    Display counter
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Tên đăng nhập:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={tenDangNhap}
                                                onChange={(e) =>
                                                    setTenDN(e.target.value)
                                                }
                                                placeholder="Nhập tài khoản"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Mật khẩu:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={MatKhau}
                                                onChange={(e) =>
                                                    setMK(e.target.value)
                                                }
                                                placeholder="Nhập mật khẩu"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create_item item_bottom_create">
                                <p className="title">Dịch vụ sử dụng:</p>

                                {/* <input
                                        type="text"
                                        value={DichVu}
                                        onChange={(e) => setDV(e.target.value)}
                                        placeholder="Nhập dịch vụ sử dụng"
                                    /> */}
                                {/* <TagsInput
                                        type="text"
                                        value={DichVu}
                                        values={["Kham Benh"]}
                                        onChange={(e) => setDV(e.target.value)}
                                    /> */}
                                <TagsInput
                                    color="orange"
                                    values={[arr]}
                                    onChange={(tags) => setDV(tags)}
                                />
                            </div>
                            <p className="note">Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                    <div className="btn_box">
                        <button type="submit" className="btn_create">
                            Thêm Thiết Bị
                        </button>
                        <Link to="/thietbi" className="btn_create none">
                            Hủy Bỏ
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default createThietbi;
