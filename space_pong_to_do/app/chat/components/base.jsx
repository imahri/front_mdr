"use client"
import style from "./base.module.css"
import {XAxis, LineChart, AreaChart, Line, Area, ResponsiveContainer,CartesianGrid, defs, linearGradient ,Tooltip} from "recharts";

const productSales = [
    {
        name: 'imad',
        product1: 15,
        product2: 1500,
    },
    {
        name: 'fiddler',
        product1: 30,
        product2: 700,
    },
    {
        name: 'glitch',
        product1: 20,
        product2: 999,
    },
    {
        name: 'fiddler',
        product1: 30,
        product2: 700,
    },
    {
        name: 'imad',
        product1: 35,
        product2: 1500,
    },
    {
        name: 'fiddler',
        product1: 50,
        product2: 700,
    },
    {
        name: 'glitch',
        product1: 45,
        product2: 999,
    },
]


const BaseExec = () => {
    return <div className={style.container}>
        <div className={style.des}>
            <p>Weekly User Engagement: Time Spent on Platform</p>
        </div>
        <div className={style.days}>
            <p>monday</p>
            <p>Tuesday</p>
            <p>Wendensday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
        </div>
        <ResponsiveContainer width="95%" height="95%">
            
            <AreaChart width={1000} height={800} data={productSales}>
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFCE9D" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#FFCE9D" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Area 
                    type="monotone"
                    stroke="#FFCE9D"
                    dataKey="product1"
                    fill="url(#colorPv)"
                    strokeWidth={2.5}
                    dot={{ stroke: '#79624C',fill:'#FFCE9D', strokeWidth: 2.5, r: 4 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>;
}

export default BaseExec;