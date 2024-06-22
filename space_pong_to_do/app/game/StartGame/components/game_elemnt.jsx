"use client"
import style from "./start_game.module.css"
import Image from "next/image";
import BoardMain from "../../../picture/pic1.jpeg"
import Profile_pic from "../../../picture/imahri.jpeg"
import RankPic from "../../../picture/rank5.png"
import Player_info from "./player"

const GameEl = () => 
{
    return <div className={style.holder}>

        <div className={`${style.box} ${style.first}`}>
            <Player_info />
        </div>
        
        <div className={`${style.box} ${style.second}`}>
            <div className={style.overlay}></div>
            <Image
                src={BoardMain}
                width={3000}
                height={3000}
                alt="boad Main"
                className={style.Board_Main}
            />
        </div>

        <div className={`${style.box} ${style.third}`}>
        <Player_info />
        </div>
        <div className={style.second_time}>

            <div className={`${style.box} ${style.fourth}`}>
                <Player_info />
            </div>
            <div className={`${style.box} ${style.fithe}`}>
                <Player_info />
            </div>
            
        </div>

    </div>;
}

export default GameEl;