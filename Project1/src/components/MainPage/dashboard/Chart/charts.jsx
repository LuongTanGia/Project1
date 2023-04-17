import React, { useState } from "react";
import "./charts.css";
import NgayChart from "./NgayChart";
import ThangChart from "./ThangChart";
import TuanChart from "./TuanChart";

function charts() {
    const [gender, setGender] = useState(""); // initialize gender state to an empty string

    const handleChange = (event) => {
        const value = event.target.value; // get the value of the selected option
        setGender(value); // update gender state with the selected option value
    };

    return (
        <div className="lineChart">
            <div className="lineChart_top">
                <div className="left">
                    <h4>Bảng thống kê theo ngày</h4>
                    <p>Tháng 11/2021</p>
                </div>
                <div className="right">
                    <p>Xem theo</p>
                    <div>
                        <select
                            id="gender"
                            onChange={handleChange}
                            value={gender}
                        >
                            <option value="Ngay">Ngày</option>
                            <option value="Tuan">Tuần</option>
                            <option value="Thang">Tháng</option>
                        </select>
                    </div>
                </div>
            </div>
            {gender === "Ngay" ? (
                <NgayChart />
            ) : gender === "Tuan" ? (
                <TuanChart />
            ) : (
                <ThangChart />
            )}
        </div>
    );
}

export default charts;
