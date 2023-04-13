import React from "react";
import { useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import altaLogo from "../assets/img/Group.svg";
import loginImg from "../assets/img/Login.svg";
import forgotImg from "../assets/img/Frame.svg";
import "../assets/css/login.css";

function Login() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Tên đăng nhập *",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Sai mật khẩu hoặc tên đăng nhập",
            label: "Mật khẩu *",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div className="login">
            <div className="login_left">
                <div className="login_left_content">
                    <img src={altaLogo} alt="altaLogo" className="altaLogo" />
                    <div className="Login_From">
                        <form onSubmit={handleSubmit}>
                            {inputs.map((input) => (
                                <LoginInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                            <i class="bx bx-hide eye-icon"></i>
                        </form>
                        <div className="btnBox">
                            {/* <button className="btn_Huy btn">Huy</button> */}
                            <button className="btn_login btn">Đăng Nhập</button>
                        </div>
                        <a href="http://localhost:5173/forgot">
                            Quên mật khẩu?
                        </a>
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
