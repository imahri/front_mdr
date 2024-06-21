"use client"
import style from "./base.module.css"
import { MdOutlineLock } from "react-icons/md";
import LooP from "../../picture/icons8-search-128.png"
import R1 from "../../picture/rank1.png"
import R2 from "../../picture/rank2.png"
import R3 from "../../picture/rank3.png"
import R4 from "../../picture/rank4.png"
import R5 from "../../picture/rank5.png"
import Pic from "../../picture/imahri.jpeg"
import Image from "next/image";

const FriendField = () => {
    return <div className={style.player_info}>
            <div className={style.player_info_data}>
                <div className={style.text_player}>
                    <p className={style.player_info_status_T}>#1</p>
                </div>
                <div className={style.player_pic}>
                    <Image
                        src={Pic}
                        height={100}
                        width={300}
                        alt="Profile random image"
                        className={`${style.imp}`}
                    />
                </div>

                <div className={style.text_player}>
                    <p className={style.player_username}>Fiddler</p>
                </div>
            </div>

            <div className={style.player_info_status_L}>
                <Image
                    src={R5}
                    height={100}
                    width={300}
                    alt="Profile random image"
                    className={`${style.imr}`}
                />
                <p className={style.player_info_status_P}>14558XP</p>
            </div>
        </div>

}

export default FriendField;