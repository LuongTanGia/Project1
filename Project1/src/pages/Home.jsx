import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "../components/MenuBar/MenuBar";
import Header from "../components/Header/header";
import MainPage from "../components/MainPage/Pages";
import "../assets/css/home.css";
function Home() {
    return (
        <>
            <div className="Home">
                <div className="Home_left">
                    <MenuBar />
                </div>
                <div className="Home_right">
                    <div className="Home_right-mainPage">
                        <MainPage />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
