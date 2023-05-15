import React, { useEffect, useState } from "react";
import Avatar from "../../../assets/img/img_infor.svg";
import ThongBao from "../../../assets/img/thongbaosvg.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";
import vector from "../../../assets/img/arrow-right.svg";

import "./baocao.css";
function baocao() {
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
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     // Make an API call when the component mounts
    //     fetch("http://localhost:3000/products")
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch((error) => console.log(error));
    // }, []);
    useEffect(() => {
        async function fetchData() {
            const result = await axios("http://localhost:3000/stt");
            setData(result.data);
        }
        fetchData();
    }, []);

    // console.log(data);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    // Tính toán tổng số trang
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Lấy danh sách các mục cần hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    // Cập nhật trang hiện tại khi người dùng chuyển đổi trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // const now = new Date();
    // const year = now.getFullYear();
    // const month = now.getMonth() + 1;
    // const day = now.getDate();
    // const formattedDateTime = `${year}-${month
    //     .toString()
    //     .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
    const uniqueItems = [];
    const filteredItems = currentItems.filter((dv) => {
        if (!uniqueItems.includes(dv.tenDichVu)) {
            uniqueItems.push(dv.tenDichVu);
            return true;
        }
        return false;
    });

    const uniqueItemsTT = [];
    const filteredItemsTT = currentItems.filter((dv) => {
        if (!uniqueItemsTT.includes(dv.trangthai)) {
            uniqueItemsTT.push(dv.trangthai);
            return true;
        }
        return false;
    });

    const uniqueItemsNC = [];
    const filteredItemsNC = currentItems.filter((dv) => {
        if (!uniqueItemsNC.includes(dv.nguoncap)) {
            uniqueItemsNC.push(dv.nguoncap);
            return true;
        }
        return false;
    });
    console.log(uniqueItemsTT);
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
                <h3 className="desc">Danh sách thiết bị</h3>
                <div className="dichvu_center">
                    <div className="Dichvu_item capso">
                        <p className="desc">Chọn thời gian</p>
                        <div className="datePicker">
                            <input type="date" className="dateInput" />
                            <span>&#8250;</span>
                            <input type="date" className="dateInput" />
                        </div>
                    </div>
                </div>
                <div className="dichvu_table">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    <div className="dropdown baocao_drop">
                                        <p
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Số thứ tự
                                            <img src={vector} />
                                        </p>
                                        <ul className="dropdown-menu">
                                            {currentItems.map((dv) => (
                                                <li
                                                    value={dv.id}
                                                    key={dv.id}
                                                    className="li_item"
                                                >
                                                    <a href="">{dv.SoTT}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </th>
                                <th>
                                    <div className="dropdown baocao_drop">
                                        <p
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Tên dịch vụ
                                            <img src={vector} />
                                        </p>
                                        <ul className="dropdown-menu">
                                            {filteredItems.map((dv) => (
                                                <li
                                                    value={dv.id}
                                                    key={dv.id}
                                                    className="li_item"
                                                >
                                                    <a href="">
                                                        {dv.tenDichVu}
                                                    </a>
                                                    <input type="checkBox" />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </th>
                                <th>
                                    <div className="dropdown baocao_drop">
                                        <p
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Thời gian cấp
                                            <img src={vector} />
                                        </p>
                                        <ul className="dropdown-menu">
                                            {currentItems.map((dv) => (
                                                <li
                                                    value={dv.id}
                                                    key={dv.id}
                                                    className="li_item"
                                                >
                                                    <a href="">
                                                        {dv.thoigiancap}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </th>
                                <th>
                                    <div className="dropdown baocao_drop">
                                        <p
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Tình trạng
                                            <img src={vector} />
                                        </p>
                                        <ul className="dropdown-menu trangthai">
                                            {filteredItemsTT.map((dv) => (
                                                <li
                                                    value={dv.id}
                                                    key={dv.id}
                                                    className="li_item"
                                                >
                                                    <a href="">
                                                        {dv.trangthai}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </th>
                                <th>
                                    <div className="dropdown baocao_drop">
                                        <p
                                            href="#"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Nguồn cấp
                                            <img src={vector} />
                                        </p>
                                        <ul className="dropdown-menu Nguoncap">
                                            {filteredItemsNC.map((dv) => (
                                                <li
                                                    value={dv.id}
                                                    key={dv.id}
                                                    className="li_item"
                                                >
                                                    <a href="">{dv.nguoncap}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((data) => (
                                <tr className="tb_item">
                                    <td className="td_item">
                                        <p>{data.SoTT}</p>
                                    </td>

                                    <td className="td_item">
                                        <p>{data.tenDichVu}</p>
                                    </td>
                                    <td className="td_item">
                                        <p>{data.thoigiancap}</p>
                                    </td>

                                    <td
                                        className={`td_item ${
                                            data.tt ? "success" : "err"
                                        }`}
                                    >
                                        <p>{data.trangthai}</p>
                                    </td>
                                    <td className="td_item">
                                        <p>{data.nguoncap}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="Pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div className="create_thietbi">
                    <p className="cong">&#8645;</p>
                    <Link to="/capso/create" className="title">
                        Tải về
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default baocao;
