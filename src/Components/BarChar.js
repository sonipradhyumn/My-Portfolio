// import "./styles.css";
import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
// https://www.chartjs.org/docs/latest/getting-started/v3-migration.html
export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            suggestedMin: 0,
            suggestedMax: 10,
            grid: {
                display: false
            }

        }
    },
    plugins: {

        legend: {
            display: false
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['React Js', 'Node Js', 'JavaScript', 'Strapi.io', 'PostgreSQL', 'Mongo DB'];

export const data = {
    labels: labels,
    datasets: [{
        label: '',
        data: [8.5, 8.5, 9, 7, 8, 6],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
        ],
        borderWidth: 1
    }]
};

// ChartJS.register(LineElement, PointElement, LinearScale, Title);
//https://codesandbox.io/s/color-each-bar-differently-devextreme-charts-forked-lewf7?file=/App.js

function BarChar() {
    return (

        <div className=" p-20  bar-chart-alignment">
            <Bar options={options} data={data} />
           
        </div>
    )
}

export default BarChar
