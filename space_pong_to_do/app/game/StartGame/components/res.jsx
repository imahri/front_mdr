"use client"
import style from "./start_game.module.css"
import Image from "next/image";
import PausePic from "../../../picture/pause.png"


const Res = ({PauseIt}) => {


    return <div className={style.res}>
        <div className={style.res_holder}>
            <p>1</p>
            <p>-</p>
            <p>3</p>
        </div>
        <div className={style.Pause}
            onClick={()=> {
                PauseIt()
            }}
        >
            <Image
                src={PausePic}
                width={100}
                height={100}
                alt="boad Main"
                className={style.Pause_icon}
            />
            <p>PAUSE</p>
        </div>
    </div>;
}

export default Res;