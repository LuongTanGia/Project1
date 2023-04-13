import React from "react";
import { useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import altaLogo from "../assets/img/Group.svg";
import loginImg from "../assets/img/Login.svg";
import forgotImg from "../assets/img/Frame.svg";

import "../assets/css/login.css";

function Login() {
    const [values, setValues] = useState({
        email: "",
    });

    const inputs = [
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Vui lòng nhập email để đặt lại mật khẩu của bạn *",
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
                            {/* <i class="bx bx-hide eye-icon"></i> */}

                            {/* <a href="#!">Quên mật khẩu?</a> */}
                        </form>
                        <div className="btnBox">
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
