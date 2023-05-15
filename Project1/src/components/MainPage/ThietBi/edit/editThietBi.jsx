import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";
import TagsInput from "../inputTags/inputTags";
import "./editThietBi.css";

function editThietBi() {
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

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:3000/products/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleEdit = () => {
        axios
            .put(`http://localhost:3000/products/${id}`, product)
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
            <div className="dichvu ">
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
                                <div className="create_item">
                                    <p className="title">Mã thiết bị:</p>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            value={product.maThietBi}
                                            onChange={(e) =>
                                                setProduct({
                                                    ...product,
                                                    maThietBi: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="create_item">
                                    <p className="title">Tên thiết bị:</p>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            value={product.tenThietBi}
                                            onChange={(e) =>
                                                setProduct({
                                                    ...product,
                                                    tenThietBi: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="create_item">
                                    <p className="title">Địa chỉ IP:</p>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            value={product.DiaChi}
                                            onChange={(e) =>
                                                setProduct({
                                                    ...product,
                                                    DiaChi: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="create_item">
                                    <p className="title">Loại thiết bị:</p>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            value={product.loai}
                                            onChange={(e) =>
                                                setProduct({
                                                    ...product,
                                                    loai: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="create_item">
                                    <p className="title">Tên đăng nhập:</p>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            value={product.tenDangNhap}
                                            onChange={(e) =>
                                                setProduct({
                                                    ...product,
                                                    tenDangNhap: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="create_item">
                                    <p className="title">Mật khẩu:</p>
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            value={[product.MatKhau]}
                                            onChange={(e) =>
                                                setProduct({
                                                    ...product,
                                                    MatKhau: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="create_item item_bottom_create">
                                <p className="title">Dịch vụ sử dụng:</p>

                                <TagsInput
                                    color="orange"
                                    values={[
                                        "Khám tim mạch",
                                        " Khám Sản - Phụ khoa",
                                        " Khám răng hàm mặt",
                                        "Khám tai mũi họng",
                                        "Khám hô hấp, Khám tổng quát",
                                    ]}
                                    onChange={(tags) =>
                                        setProduct({
                                            ...product,
                                            DichVu: tags,
                                        })
                                    }
                                />
                            </div>
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

export default editThietBi;
