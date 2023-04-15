import React, { useState } from "react";
import altaLogo from "../assets/img/Group.svg";
import loginImg from "../assets/img/Login.svg";
import "../assets/css/login.css";

function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [err, setErr] = useState(false);

    // const [text2, setText2] = useState("");

    const handleClick = () => {
        setText("Quên mật khẩu?");
        setText2(`Sai mật khẩu hoặc tên đăng nhập`);
        setErr(!err);
    };
    const myStyle = {
        border: "1.5px solid #E73F3F",
    };
    const myStyle2 = {
        border: "none",
    };

    return (
        <div className="login">
            <div className="login_left">
                <div className="login_left_content">
                    <img src={altaLogo} alt="altaLogo" className="altaLogo" />
                    <div className="Login_From">
                        <label htmlFor="userName">Tên đăng nhập *</label>
                        <div className="group" style={err ? myStyle : myStyle2}>
                            <input
                                type="text"
                                id="userName"
                                placeholder="UserName"
                            />
                        </div>
                        <label htmlFor="password">Mật khẩu *</label>
                        <div className="group" style={err ? myStyle : myStyle2}>
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
                            {text2
                                ? " ! Sai mật khẩu hoặc tên đăng nhập"
                                : "Quên mật khẩu?"}
                        </a>
                        <div className="btnBox">
                            {/* <button className="btn_Huy btn">Huy</button> */}
                            <button
                                className="btn_login btn"
                                onClick={handleClick}
                            >
                                Đăng Nhập
                            </button>
                            <a href="http://localhost:5173/forgot">{text}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login_right">
                <div className="Img_right">
                    <img src={loginImg} alt="LoginImg" className="LoginImg" />
                    <div className="Right_content">
                        <p>Hệ thống</p>
                        <h1>QUẢN LÝ XẾP HÀNG</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
