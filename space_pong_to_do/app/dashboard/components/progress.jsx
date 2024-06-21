"use client"
import style from "./progress.module.css"
import { Line, Circle } from 'rc-progress';

const Prog = () =>{
  return <div>
    <div className={style.progresse}>
            <div className={style.exp}>
                <p>0xp</p>
                <p>2000xp</p>
                <p>4000xp</p>
                <p>6000xp</p>
                <p>8000xp</p>
                <p>10000xp</p>
            </div>
            <div className={style.hopl}>
                <Line percent={50}  trailColor="#62605A" strokeColor='#FFCE9D' />
            </div>
        </div>
  </div>;
}

export default Prog;