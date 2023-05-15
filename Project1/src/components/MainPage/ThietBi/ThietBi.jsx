import React, { useEffect, useState } from "react";
import Avatar from "../../../assets/img/img_infor.svg";
import ThongBao from "../../../assets/img/thongbaosvg.svg";
import { Link } from "react-router-dom";
import "./thietBi.css";
import axios from "axios";
import shortid from "shortid";
function ThietBi() {
    const [err, setErr] = useState(false);

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

    useEffect(() => {
        async function fetchData() {
            const result = await axios("http://localhost:3000/products");
            setData(result.data);
        }
        fetchData();
    }, []);

    const [isKNActive, setIsKNActive] = useState(null);
    const [isActive, setIsActive] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    function handleInputChange(event) {
        const value = event.target.value;
        setSearchTerm(value);
        filterData(isActive, value, isKNActive);
    }

    function handleHDToggle(event) {
        const value = event.target.value;
        let newIsActive;

        if (value === "true") {
            newIsActive = true;
            setIsKNActive(null);
        } else if (value === "false") {
            newIsActive = false;
            setIsKNActive(null);
        } else {
            newIsActive = null;
        }

        setIsActive(newIsActive);
        filterData(newIsActive, searchTerm, isKNActive);
    }

    function handleKNToggle(event) {
        const value = event.target.value;
        let newIsKNActive;

        if (value === "true") {
            newIsKNActive = true;
        } else if (value === "false") {
            newIsKNActive = false;
        } else {
            newIsKNActive = null;
        }

        setIsKNActive(newIsKNActive);
        filterData(isActive, searchTerm, newIsKNActive);
    }

    function filterData(isActive, searchTerm, isKNActive) {
        const newFilteredData = data.filter(
            (product) =>
                (isActive === null &&
                    searchTerm === "" &&
                    isKNActive === null) ||
                (isActive === null &&
                    product.maThietBi
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) &&
                    product.KN === isKNActive) ||
                (product.HD === isActive &&
                    searchTerm === "" &&
                    isKNActive === null) ||
                (product.HD === isActive &&
                    product.maThietBi
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) &&
                    product.KN === isKNActive)
        );

        setFilteredData(newFilteredData);
    }

    function ShowMore({ text }) {
        const [showAll, setShowAll] = useState(false);

        return (
            <>
                {showAll ? (
                    <>
                        <p style={{ width: "358px" }}>{text}</p>
                        <a onClick={() => setShowAll(false)}></a>
                    </>
                ) : (
                    <>
                        <p>{text.substr(0, 23)}...</p>
                        <a onClick={() => setShowAll(true)}>Xem Thêm</a>
                    </>
                )}
            </>
        );
    }

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    // Tính toán tổng số trang
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    // Lấy danh sách các mục cần hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredData.slice(startIndex, endIndex);

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
                <div className="dichvu_center">
                    <div className="Dichvu_item">
                        <p className="desc">Trạng thái hoạt động</p>
                        <div className="dropdown">
                            <select
                                class="dropdown_box"
                                value={isActive}
                                onChange={handleHDToggle}
                            >
                                <option selected value="">
                                    Tất cả
                                </option>
                                <option value={true}>Hoạt Động</option>
                                <option value={false}>Ngưng Hoạt Động</option>
                            </select>
                        </div>
                    </div>
                    <div className="Dichvu_item">
                        <p className="desc">Trạng thái hoạt động</p>
                        <div className="dropdown">
                            <select
                                class="dropdown_box"
                                value={isKNActive}
                                onChange={handleKNToggle}
                            >
                                <option selected value="">
                                    Tất cả
                                </option>
                                <option value="true">Kết Nối</option>
                                <option value="false">Mất Kết Nối</option>
                            </select>
                        </div>
                    </div>

                    <div className="Dichvu_item">
                        <p className="desc">Từ khoá</p>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Nhập từ khóa"
                                className="input_box"
                                value={searchTerm}
                                onChange={handleInputChange}
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
                                <th>Trạng thái kết nối</th>
                                <th>Dịch vụ sử dụng</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        {currentItems.length > 0 ? (
                            <tbody>
                                {currentItems.map((data) => (
                                    <tr className="tb_item">
                                        <td className="td_item">
                                            <p>{data.maThietBi}</p>
                                        </td>
                                        <td className="td_item">
                                            <p>{data.tenThietBi}</p>
                                        </td>
                                        <td className="td_item">
                                            <p>{data.DiaChi}</p>
                                        </td>
                                        <td
                                            className={`td_item ${
                                                data.HD ? "success" : "err"
                                            }`}
                                        >
                                            <p>
                                                {data.HD
                                                    ? "Hoạt Động"
                                                    : "Ngưng Hoạt Động"}
                                            </p>
                                        </td>
                                        <td
                                            className={`td_item ${
                                                data.KN ? "success" : "err"
                                            }`}
                                        >
                                            <p>
                                                {data.KN
                                                    ? "Kết Nối"
                                                    : "Mất Kết Nối"}
                                            </p>
                                        </td>
                                        <td className="td_item">
                                            <p>
                                                <ShowMore
                                                    text={String(data.DichVu)}
                                                />
                                            </p>
                                        </td>
                                        <td className="td_item">
                                            <Link to={`/thietbi/${data.id}`}>
                                                Chi Tiết
                                            </Link>
                                        </td>
                                        <td className="td_item">
                                            <Link to={`/update/${data.id}`}>
                                                Cập Nhật
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                {data.map((data) => (
                                    <tr className="tb_item">
                                        <td className="td_item">
                                            <p>{data.maThietBi}</p>
                                        </td>
                                        <td className="td_item">
                                            <p>{data.tenThietBi}</p>
                                        </td>
                                        <td className="td_item">
                                            <p>{data.DiaChi}</p>
                                        </td>
                                        <td
                                            className={`td_item ${
                                                data.HD ? "success" : "err"
                                            }`}
                                        >
                                            <p>
                                                {data.HD
                                                    ? "Hoạt Động"
                                                    : "Ngưng Hoạt Động"}
                                            </p>
                                        </td>
                                        <td
                                            className={`td_item ${
                                                data.KN ? "success" : "err"
                                            }`}
                                        >
                                            <p>
                                                {data.KN
                                                    ? "Kết Nối"
                                                    : "Mất Kết Nối"}
                                            </p>
                                        </td>
                                        <td className="td_item">
                                            <p>
                                                <ShowMore
                                                    text={String(data.DichVu)}
                                                />
                                            </p>
                                        </td>
                                        <td className="td_item">
                                            <Link to={`/thietbi/${data.id}`}>
                                                Chi Tiết
                                            </Link>
                                        </td>
                                        <td className="td_item">
                                            <Link to={`/update/${data.id}`}>
                                                Cập Nhật
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
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
                    <Link to="/create_thietbi" className="title">
                        Thêm Thiết Bị
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThietBi;
