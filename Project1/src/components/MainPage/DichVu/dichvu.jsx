import React, { useEffect, useState } from "react";
import Avatar from "../../../assets/img/img_infor.svg";
import ThongBao from "../../../assets/img/thongbaosvg.svg";
import { Link } from "react-router-dom";
import "./dichvu.css";
import axios from "axios";
import shortid from "shortid";
function DichVu() {
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
            const result = await axios("http://localhost:3000/dichvu");
            setData(result.data);
        }
        fetchData();
    }, []);

    console.log(data);

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
                    <div className="Dichvu_item">
                        <p className="desc">Trạng thái hoạt động</p>
                        <div className="dropdown">
                            <select class="dropdown_box">
                                <option selected>Tất cả</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="Dichvu_item">
                        <p className="desc">Trạng thái hoạt động</p>
                        <div className="datePicker">
                            <input type="date" className="dateInput" />
                            <span>&#8250;</span>
                            <input type="date" className="dateInput" />
                        </div>
                    </div>
                    <div className="Dichvu_item">
                        <p className="desc">Từ khoá</p>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Nhập từ khóa"
                                className="input_box"
                            />
                        </div>
                    </div>
                </div>
                <div className="dichvu_table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Mã thiết bị</th>
                                <th>Tên thiết bị</th>
                                <th>Địa chỉ IP</th>
                                <th>Trạng thái hoạt động</th>

                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((data) => (
                                <tr className="tb_item">
                                    <td className="td_item">
                                        <p>{data.maDichVu}</p>
                                    </td>
                                    <td className="td_item">
                                        <p>{data.tenDichVu}</p>
                                    </td>
                                    <td className="td_item">
                                        <p>{data.Mota}</p>
                                    </td>
                                    <td
                                        className={`td_item ${
                                            data.TT ? "success" : "err"
                                        }`}
                                    >
                                        <p>{data.trangthai}</p>
                                    </td>
                                    <td className="td_item">
                                        <Link to={`/dichvu/${data.id}`}>
                                            Chi Tiết
                                        </Link>
                                    </td>
                                    <td className="td_item">
                                        <Link to={`/update/dichvu/${data.id}`}>
                                            Cập Nhật
                                        </Link>
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
                    <p className="cong">+</p>
                    <Link to="/create_dichvu" className="title">
                        Thêm Thiết Bị
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DichVu;
