import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

import "./createDichVu.css";

function createdichvu(props) {
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

    const [maDichVu, setmaDichVu] = useState("");
    const [tenDichVu, settenDichVu] = useState("");
    const [Mota, setMota] = useState("");
    const [TT, setTT] = useState(false);
    const [trangthai, settrangthai] = useState("Mất kết nối");
    const [tangtudong, settangtudong] = useState(false);
    const [Prefix, setPrefix] = useState(false);
    const [Surfix, setSurfix] = useState(false);
    const [Reset, setReset] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const product = {
            id: shortid.generate(),
            tenDichVu,
            maDichVu,
            Mota,
            TT,
            trangthai,
            tangtudong,
            Prefix,
            Surfix,
            Reset,
        };
        axios.post("http://localhost:3000/dichvu", product).then(() => {
            props.onAddProduct(product);
            setmaDichVu("");
            settenDichVu("");
            setMota("");
            settrangthai("");
            setTT;
            settangtudong;
            setPrefix;
            setSurfix;
            setReset;
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
                    <div className="detail_thietbi create">
                        <h2 className="desc">Thông tin dịch vụ</h2>
                        <div className="box_create">
                            <div className="box_create_top">
                                <div className="box_left">
                                    <div className="create_item">
                                        <p className="title">Mã dịch vụ:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={maDichVu}
                                                onChange={(e) =>
                                                    setmaDichVu(e.target.value)
                                                }
                                                placeholder="Nhập mã dịch vụ"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="create_item">
                                        <p className="title">Tên dịch vụ:</p>
                                        <div className="input_box">
                                            <input
                                                type="text"
                                                value={tenDichVu}
                                                onChange={(e) =>
                                                    settenDichVu(e.target.value)
                                                }
                                                placeholder="Nhập tên dịch vụ"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="box_right">
                                    <div className="create_item">
                                        <p className="title">Mô Tả :</p>
                                        <div className="input_box input_mota">
                                            <textarea
                                                className="input_mota"
                                                type="text"
                                                value={Mota}
                                                onChange={(e) =>
                                                    setMota(e.target.value)
                                                }
                                                placeholder="Mô tả dịch vụ "
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create_item item_bottom_create">
                                <div className="bottom_detail box_create">
                                    <h2 className="desc_dichvu">
                                        Quy tắc cấp số
                                    </h2>
                                    <div className="detail_box">
                                        <div className="box-capso box_create">
                                            <input
                                                type="checkbox"
                                                value={tangtudong}
                                                onChange={(e) =>
                                                    settangtudong(
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <p className="title_capso">
                                                Tăng tự động:{" "}
                                            </p>
                                            <button className="capso">
                                                0001
                                            </button>
                                            <p className="title_capso">đến</p>
                                            <button className="capso">
                                                9999
                                            </button>
                                        </div>
                                        <div className="box-capso box_create">
                                            <input
                                                type="checkbox"
                                                value={Prefix}
                                                onChange={(e) =>
                                                    setPrefix(e.target.checked)
                                                }
                                            />
                                            <p className="title_capso">
                                                Prefix:
                                            </p>
                                            <button className="capso">
                                                0001
                                            </button>
                                        </div>
                                        <div className="box-capso box_create">
                                            <input
                                                type="checkbox"
                                                value={Surfix}
                                                onChange={(e) =>
                                                    setPrefix(e.target.checked)
                                                }
                                            />
                                            <p className="title_capso">
                                                Surfix:
                                            </p>
                                            <button className="capso">
                                                0001
                                            </button>
                                        </div>
                                        <div className="box-capso box_create">
                                            <input
                                                type="checkbox"
                                                value={Reset}
                                                onChange={(e) =>
                                                    setReset(e.target.checked)
                                                }
                                            />
                                            <p className="title_capso">
                                                Reset mỗi ngày
                                            </p>
                                        </div>
                                    </div>
                                </div>
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

export default createdichvu;
