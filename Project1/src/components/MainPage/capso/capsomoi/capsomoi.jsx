import React, { useState, useEffect } from "react";
import Avatar from "../../../../assets/img/img_infor.svg";
import ThongBao from "../../../../assets/img/thongbaosvg.svg";
import { Link } from "react-router-dom";
import "./capsomoi.css";
import axios from "axios";
import shortid from "shortid";

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * Math.pow(10, 8)); // tạo số ngẫu nhiên từ 0 đến 10^8
    const paddedNumber = randomNumber.toString().padStart(8, "0"); // thêm số 0 vào đầu nếu số ngẫu nhiên có ít hơn 8 chữ số
    return paddedNumber;
}
function Capsomoi() {
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

    const [TT, setTT] = useState(false);
    const [trangthai, settrangthai] = useState("Mất kết nối");
    const [tenDichVu, settenDichVu] = useState("");
    const [SoTT, setSoTT] = useState(getRandomNumber());

    const [tenKhachhang, settenKhachhang] = useState("Lê Huỳnh Ái Vân");
    const [thoigiancap, setthoigiancap] = useState("14:35 - 07/11/2021");
    const [hansudung, sethansudung] = useState("14:35 - 12/11/2021");
    const [nguoncap, setnguoncap] = useState("Kiosk");
    const [sdt, setsdt] = useState("0333394703");
    const [email, setemail] = useState("tangia@gmail.com");

    function handleSubmit(event) {
        event.preventDefault();
        const product = {
            id: shortid.generate(),
            tenKhachhang,
            thoigiancap,
            hansudung,
            TT,
            SoTT,
            tenDichVu,
            trangthai,
            nguoncap,
            sdt,
            email,
        };
        axios.post("http://localhost:3000/stt", product).then(() => {
            props.onAddProduct(product);
            settenKhachhang("");
            setthoigiancap("");
            sethansudung("");
            setnguoncap("");
            settenDichVu("");
            setSoTT("");
            setsdt(""), setemail(""), settrangthai("");
            setTT;
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

            <div className="dichvu detail ">
                <h3 className="desc">Quản lý cấp số</h3>
                <form onSubmit={handleSubmit} className="Create">
                    <div className="detail_thietbi create_capso">
                        <h2 className="title">CẤP SỐ MỚI</h2>
                        <p className="desc">Dịch vụ khách hàng lựa chọn</p>
                        <div className="dropdown">
                            <select
                                class="dropdown_box"
                                value={tenDichVu}
                                onChange={(e) => settenDichVu(e.target.value)}
                            >
                                <option selected>Chọn dịch vụ</option>
                                <option value="Khám tim mạch">
                                    Khám tim mạch
                                </option>
                                <option value="Khám sản - Phụ khoa">
                                    Khám sản - Phụ khoa
                                </option>
                                <option value="Khám răng hàm mặt">
                                    Khám răng hàm mặt
                                </option>
                                <option value="Khám tai mũi họng">
                                    Khám tai mũi họng
                                </option>
                            </select>
                        </div>
                        <div className="btn_box">
                            <button
                                type="submit"
                                className="btn_create"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                onClick={() => setSoTT(getRandomNumber())}
                            >
                                In số
                            </button>
                            <Link to="/capso" className="btn_create none">
                                Hủy Bỏ
                            </Link>
                            <div
                                class="modal fade"
                                id="exampleModalCenter"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalCenterTitle"
                                aria-hidden="true"
                            >
                                <div
                                    class="modal-dialog modal-dialog-centered"
                                    role="document"
                                >
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    &times;
                                                </span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p className="title_capso">
                                                Số thứ tự được cấp
                                            </p>
                                            <h2 className="stt">{SoTT}</h2>
                                            <p className="desc_capso">
                                                DV: {tenDichVu}{" "}
                                                <strong>(tại quầy số 1)</strong>
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <p>
                                                Thời gian cấp: 09:30 11/10/2021
                                            </p>
                                            <p>
                                                Thời gian cấp: 17:30 11/10/2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Capsomoi;
