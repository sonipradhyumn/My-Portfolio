// import "./styles.css";
import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
//https://codesandbox.io/s/color-each-bar-differently-devextreme-charts-forked-lewf7?file=/App.js
const colors = [
    "#ffbb11",
    "#ecf0f1",
    "#50AF95",
    "#f3ba2f",
    "#2a71d0"
];

const data = [
    {
        name: "Java Script",
        uv: 7,
        pv: 2400,
        amt: 'good'
    },
    {
        name: "React Js",
        uv: 7,
        pv: 1398,
        amt: 'best'
    },
    {
        name: "Node Js",
        uv: 7,
        pv: 9800,
        amt: 'best'
    },
    {
        name: "PostgreSql",
        uv: 7,
        pv: 3908,
        amt: 'best'
    },
    {
        name: "MongoDB",
        uv: 7,
        pv: 4800,
        amt: 'best'
    },
    {
        name: "ES-6",
        uv: 7,
        pv: 3800,
        amt: 'best'
    },
    {
        name: "Strapi",
        uv: 7,
        pv: 4300,
        amt: 'best'
    },

];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 2},${y} ${x + width / 2.5},${y
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y} ${x + (2 * width) / 3},${y} ${x + width
        }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


function BarChar() {
    return (
        <div>
            <BarChart
                width={700}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                    dataKey='uv'
                    fill="#8884d8"

                    // shape={<TriangleBar />}
                    label={{ position: "top" }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>

            </BarChart>
        </div>
    )
}

export default BarChar
