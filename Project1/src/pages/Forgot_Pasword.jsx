import React, { useState } from "react";
import altaLogo from "../assets/img/Group.svg";
import forgotImg from "../assets/img/Frame.svg";

import "../assets/css/login.css";

function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <div className="login">
            <div className="login_left">
                <div className="login_left_content">
                    <img src={altaLogo} alt="altaLogo" className="altaLogo" />
                    <div className="Login_From">
                        <label htmlFor="password">Mật khẩu </label>
                        <div className="group">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <span id="showPassword">
                                <ion-icon
                                    name={
                                        isPasswordVisible
                                            ? "eye-outline"
                                            : "eye-off-outline"
                                    }
                                    onClick={togglePasswordVisibility}
                                ></ion-icon>
                                {/* <ion-icon name="eye-outline"></ion-icon> */}
                            </span>
                        </div>
                        <label htmlFor="password">Nhập lại mật khẩu </label>
                        <div className="group">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            <span id="showPassword">
                                <ion-icon
                                    name={
                                        isPasswordVisible
                                            ? "eye-outline"
                                            : "eye-off-outline"
                                    }
                                    onClick={togglePasswordVisibility}
                                ></ion-icon>
                                {/* <ion-icon name="eye-outline"></ion-icon> */}
                            </span>
                        </div>
                        <a href="http://localhost:5173/forgot">
                            Quên mật khẩu?
                        </a>
                        <div className="btnBox">
                            {/* <button className="btn_Huy btn">Huy</button> */}
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
