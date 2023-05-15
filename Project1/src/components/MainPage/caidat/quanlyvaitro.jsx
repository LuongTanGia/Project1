import React, { useEffect, useState } from "react";
import Avatar from "../../../assets/img/img_infor.svg";
import ThongBao from "../../../assets/img/thongbaosvg.svg";
import { Link } from "react-router-dom";
import "./caidat.css";
import axios from "axios";
import shortid from "shortid";
function quanlyvaitro() {
    const [err, setErr] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
            const result = await axios("http://localhost:3000/vaitro");
            setData(result.data);
        }
        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = data.filter((product) =>
        Object.values(product).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Tính toán tổng số trang
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    // Lấy danh sách các mục cần hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredUsers.slice(startIndex, endIndex);

    // Cập nhật trang hiện tại khi người dùng chuyển đổi trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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
                <h3 className="desc">Danh sách thiết bị</h3>
                <div className="dichvu_center caidat">
                    <div className="Dichvu_item">
                        <p className="desc">Từ khoá</p>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Nhập từ khóa"
                                className="input_box caidat_input"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>
                <div className="dichvu_table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Tên vai trò</th>
                                <th>Số người dùng</th>
                                <th>Mô tả</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((data) => (
                                <tr className="tb_item">
                                    <td className="td_item">
                                        <p>{data.tenvaitro}</p>
                                    </td>
                                    <td className="td_item">
                                        <p>{data.songuoidung}</p>
                                    </td>
                                    <td className="td_item">
                                        <p>{data.mota}</p>
                                    </td>

                                    <td className="td_item">
                                        <Link
                                            to={`/caidat/quanly/vaitro/${data.id}`}
                                        >
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
                    <Link to="/caidat/quanly/create/vaitro" className="title">
                        Thêm Thiết Bị
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default quanlyvaitro;
