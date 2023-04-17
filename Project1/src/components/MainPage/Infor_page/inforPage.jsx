import React from "react";
import Avatar from "../../../assets/img/img_infor.svg";
import Header from "../../Header/header";

import Camera from "../../../assets/img/camera.svg";
import "../Infor_page/infor.css";

function inforPage() {
    return (
        <>
            <div className="Home_right-infor">
                <Header />
            </div>
            <div className="Information">
                <div className="img_infor">
                    <img src={Avatar} alt="avatar" className="avatar" />
                    <img src={Camera} alt="camera" className="camera" />
                    <h4 className="desc">Lê Quỳnh Ái Vân</h4>
                </div>

                <div className="desc_infor_left">
                    <label htmlFor="userName">Tên người dùng</label>
                    <div className="group">
                        <input
                            type="text"
                            id="userName"
                            placeholder="Lê Quỳnh Ái Vân"
                            disabled
                        />
                    </div>
                    <label htmlFor="userName">Số điện thoại </label>
                    <div className="group">
                        <input
                            type="text"
                            id="userName"
                            placeholder="0767375921"
                            disabled
                        />
                    </div>
                    <label htmlFor="userName">Email:</label>
                    <div className="group">
                        <input
                            type="text"
                            id="userName"
                            placeholder="adminSSO1@domain.com"
                            disabled
                        />
                    </div>
                </div>
                <div className="desc_infor_right">
                    <label htmlFor="userName">Tên đăng nhập </label>
                    <div className="group">
                        <input
                            type="text"
                            id="userName"
                            placeholder="lequynhaivan01"
                            disabled
                        />
                    </div>
                    <label htmlFor="userName">Mật khẩu </label>
                    <div className="group">
                        <input
                            type="text"
                            id="userName"
                            placeholder="311940211"
                            disabled
                        />
                    </div>
                    <label htmlFor="userName">Vai trò:</label>
                    <div className="group">
                        <input
                            type="text"
                            id="userName"
                            placeholder="Kế toán"
                            disabled
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default inforPage;
