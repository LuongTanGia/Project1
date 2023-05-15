import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function edittaikhoan() {
    const { id } = useParams();
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
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const [vaitrolis, setvaitrolis] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios("http://localhost:3000/vaitro");
            setvaitrolis(result.data);
        }
        fetchData();
    }, []);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleEdit = () => {
        axios
            .put(`http://localhost:3000/user/${id}`, product)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

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
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleEdit();
                    }}
                >
                    <div className="detail_thietbi create">
                        <h2 className="desc">Thông tin thiết bị</h2>
                        <div className="box_create">
                            <div className="box_create_top">
                                <div className="box_left">
                                    <div className="create_item">
                                        <p className="title">Họ tên</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={product.hoten}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        hoten: e.target.value,
                                                    })
                                                }
                                                placeholder="Nhập họ tên"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Số điện thoại</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={product.sdt}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        sdt: e.target.value,
                                                    })
                                                }
                                                placeholder="Nhập số điện thoại"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Email</p>
                                        <div className="input_box">
                                            <input
                                                type="email"
                                                value={product.email}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="Nhập email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Vai trò</p>
                                        <div className="input_box">
                                            <select
                                                className="category"
                                                name="category"
                                                value={product.vaitro}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        vaitro: e.target.value,
                                                    })
                                                }
                                            >
                                                {vaitrolis.map((item) => (
                                                    <option
                                                        value={item.tenvaitro}
                                                    >
                                                        {item.tenvaitro}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="box_right">
                                    <div className="create_item">
                                        <p className="title">Tên đăng nhập:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={product.tenDangNhap}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        tenDangNhap:
                                                            e.target.value,
                                                    })
                                                }
                                                placeholder="Nhập tên đăng nhập"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Mật khẩu:</p>
                                        <div className="input_box">
                                            <input
                                                type={
                                                    isPasswordVisible
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={product.password}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        password:
                                                            e.target.value,
                                                    })
                                                }
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <span id="showPassword_user">
                                                <ion-icon
                                                    name={
                                                        isPasswordVisible
                                                            ? "eye-outline"
                                                            : "eye-off-outline"
                                                    }
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                ></ion-icon>
                                                {/* <ion-icon name="eye-outline"></ion-icon> */}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">
                                            Nhập lại mật khẩu:
                                        </p>
                                        <div className="input_box">
                                            <input
                                                type={
                                                    isPasswordVisible
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={product.confirmPassword}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        confirmPassword:
                                                            e.target.value,
                                                    })
                                                }
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <span id="showPassword_user">
                                                <ion-icon
                                                    name={
                                                        isPasswordVisible
                                                            ? "eye-outline"
                                                            : "eye-off-outline"
                                                    }
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                ></ion-icon>
                                                {/* <ion-icon name="eye-outline"></ion-icon> */}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Tình trạng</p>
                                        <div className="input_box">
                                            <select
                                                className="category"
                                                name="category"
                                                value={product.trangthai}
                                                onChange={(e) =>
                                                    setProduct({
                                                        ...product,
                                                        trangthai:
                                                            e.target.value ===
                                                            "true"
                                                                ? true
                                                                : false,
                                                    })
                                                }
                                            >
                                                <option value="" selected>
                                                    Tất cả
                                                </option>
                                                <option value="true">
                                                    Hoạt động
                                                </option>
                                                <option value="false">
                                                    Ngưng hoạt động
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="note">Là trường thông tin bắt buộc</p>
                        </div>
                    </div>
                    <div className="btn_box">
                        <button type="submit" className="btn_create">
                            Cập Nhật
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

export default edittaikhoan;
