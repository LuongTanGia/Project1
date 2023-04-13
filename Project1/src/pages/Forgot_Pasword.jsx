import React from "react";
import { useState } from "react";
import LoginInput from "../components/Login/LoginInput";
import altaLogo from "../assets/img/Group.svg";
import loginImg from "../assets/img/Login.svg";
import forgotImg from "../assets/img/Frame.svg";

import "../assets/css/login.css";

function Login() {
    const [values, setValues] = useState({
        password: "",
    });

    const inputs = [
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Mật khẩu ",
            // errorMessage:
            //     "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Mật khẩu ",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Nhập lại mật khẩu ",
            errorMessage: "Passwords don't match!",
            label: "Nhập lại mật khẩu ",
            pattern: values.password,
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
                            {/* <button className="btn_Huy btn">Huy</button> */}
                            <button className="btn_login btn">Xác nhận</button>
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
