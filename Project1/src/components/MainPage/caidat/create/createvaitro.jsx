import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";
import "./createvaitro.css";

function createvaitro(props) {
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

    const [tenvaitro, settenvaitro] = useState("");
    const [mota, setmota] = useState("");
    const [songuoidung, setsonguoidung] = useState(0);
    const [checkedValues, setCheckedValues] = useState([]);
    const [chucnang, setchucnang] = useState([]);
    function handleCheckboxChange(event) {
        const target = event.target;
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const value = target.value;
        const isChecked = target.checked;
        const name = target.name;

        if (target.value === "all") {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = target.checked;
            });
        }

        if (isChecked) {
            setCheckedValues((prevCheckedValues) => ({
                ...prevCheckedValues,
                [name]: [...(prevCheckedValues[name] || []), value],
            }));
        } else {
            setCheckedValues((prevCheckedValues) => ({
                ...prevCheckedValues,
                [name]:
                    prevCheckedValues[name]?.filter((val) => val !== value) ||
                    [],
            }));
        }

        setchucnang((prevCheckedValues) => ({
            ...prevCheckedValues,
            [name]: [...(prevCheckedValues[name] || []), value],
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const product = {
            id: shortid.generate(),
            tenvaitro,
            mota,
            songuoidung,
            chucnang,
        };
        axios.post("http://localhost:3000/vaitro", product).then(() => {
            props.onAddProduct(product);
            settenvaitro("");
            setmota("");
            setsonguoidung;
            setchucnang;
        });
    }

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
                <h3 className="desc">Quản lý dịch vụ</h3>
                <form onSubmit={handleSubmit} className="Create">
                    <div className="detail_thietbi create_vaitro">
                        <h2 className="desc">Thông tin vai trò</h2>
                        <div className="box_create">
                            <div className="box_create_top">
                                <div className="box_left">
                                    <div className="create_item">
                                        <p className="title">Tên vai trò</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={tenvaitro}
                                                onChange={(e) =>
                                                    settenvaitro(e.target.value)
                                                }
                                                placeholder="Nhập mã dịch vụ"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Mô Tả :</p>
                                        <div className="input_box input_mota">
                                            <textarea
                                                className="input_mota"
                                                type="text"
                                                value={mota}
                                                onChange={(e) =>
                                                    setmota(e.target.value)
                                                }
                                                placeholder="Mô tả dịch vụ "
                                                required
                                            />
                                        </div>
                                    </div>
                                    <p className="note">
                                        Là trường thông tin bắt buộc
                                    </p>
                                </div>
                                <div className="box_right">
                                    <div className="create_item">
                                        <p className="title">
                                            Phân quyền chức năng
                                        </p>
                                        <div className="phanquyen_box">
                                            <div className="group_check">
                                                <h1 className="title">
                                                    Nhóm chức năng A
                                                </h1>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRA"
                                                        value="all"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Tất cả
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRA"
                                                        value="Chức năng x"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng x
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRA"
                                                        value="Chức năng y"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng y
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRA"
                                                        value="Chức năng z"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng z
                                                </label>
                                            </div>
                                            {/* <div className="group_check">
                                                <h1 className="title">
                                                    Nhóm chức năng B
                                                </h1>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRB"
                                                        value="all"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Tất cả
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRB"
                                                        value="Chức năng x"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng x
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRB"
                                                        value="Chức năng y"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng y
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRB"
                                                        value="Chức năng z"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng z
                                                </label>
                                            </div>
                                            <div className="group_check">
                                                <h1 className="title">
                                                    Nhóm chức năng C
                                                </h1>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRC"
                                                        value="all"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Tất cả
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRC"
                                                        value="Chức năng x"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng x
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRC"
                                                        value="Chức năng y"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng y
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="GRC"
                                                        value="Chức năng z"
                                                        onChange={
                                                            handleCheckboxChange
                                                        }
                                                    />{" "}
                                                    Chức năng z
                                                </label>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default createvaitro;
