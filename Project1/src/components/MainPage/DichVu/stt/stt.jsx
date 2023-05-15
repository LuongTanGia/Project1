import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./dichvu.css";
import axios from "axios";
import shortid from "shortid";
function stt() {
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
    return (
        <div>
            <div className="stt">
                <div className="dichvu_center dichvu_center">
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
                <div className="dichvu_table stt_table">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Số thứ tự</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((data) => (
                                <tr className="tb_item">
                                    <td className="td_item">
                                        <p>{data.SoTT}</p>
                                    </td>
                                    <td
                                        className={`td_item ${
                                            data.tt ? "success" : "err"
                                        }`}
                                    >
                                        <p>{data.trangthai}</p>
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

export default stt;
