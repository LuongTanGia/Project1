import React from "react";
import "./charts.css";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
);
function ThangChart() {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "",
                data: [
                    2500, 4000, 3300, 3000, 4200, 4500, 3700, 5000, 6000, 2000,
                    4500, 3700, 1000,
                ],
                backgroundColor: "transparent",
                borderColor: "#5185F7",
                pointBorderColor: "transparent",
                pointBorderWidth: 4,
                // borderWidth: 1,
                tension: 0.5,
                // fill: true,
                fill: {
                    target: "origin", // 3. Set the fill options
                    above: "rgba(206, 221, 255, 0.7)",
                },
            },
        ],
    };
    const options = {
        legend: {
            position: "bottom",
        },
        scales: {
            // x: {
            //     display: true,
            //     title: {
            //         display: true,
            //         text: "Month",
            //     },
            // },
            // y: {
            //     beginAtZero: true,
            //     display: true,
            //     title: {
            //         display: true,
            //         text: "Value",
            //         position: "bottom",
            //     },
            // },
        },
        plugins: {
            // filler: {
            //     propagate: false,
            // },
            // "samples-filler-analyser": {
            //     target: "chart-analyser",
            // },
            // legend: true,
            tooltip: {
                backgroundColor: "#5185F7",
            },
        },
        // interaction: {
        //     intersect: false,
        // },
    };
    return <Line data={data} options={options} className="ChartBox"></Line>;
}
export default ThangChart;
