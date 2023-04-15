import React from "react";
import altaLogo from "../assets/img/Group.svg";
import forgotImg from "../assets/img/Frame.svg";

import "../assets/css/login.css";

function Login() {
    return (
        <div className="login">
            <div className="login_left">
                <div className="login_left_content">
                    <img src={altaLogo} alt="altaLogo" className="altaLogo" />
                    <div className="Login_From">
                        <p className="title">Đặt lại mật khẩu</p>
                        <label htmlFor="Email">
                            Vui lòng nhập email để đặt lại mật khẩu của bạn *
                        </label>
                        <div className="group">
                            <input
                                type="email"
                                id="Email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="btnBox_forgot">
                            <button className="btn_Huy btn">Huy</button>
                            <button className="btn_login btn">Đăng Nhập</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login_right">
                <div className="Img_right">
                    <img
                        src={forgotImg}
                        alt="ForgotImg"
                        className="ForgotImg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
