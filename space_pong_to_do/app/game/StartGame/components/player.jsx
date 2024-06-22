"use client"
import style from "./start_game.module.css"
import Image from "next/image";
import Profile_pic from "../../../picture/imahri.jpeg"
import RankPic from "../../../picture/rank5.png"


const Player_info = () => 
{
    return <div className={style.profile_info}>
                <div className={style.picture_img}>
                    <Image 
                        src={Profile_pic}
                        alt="profile picture"
                        />
                </div>
                <p className={style.player_usename}>Fiddler</p>
                <div className={style.picture_rank}>
                    <Image 
                        src={RankPic}
                        alt="profile picture"
                        />
                </div>
                <p className={style.profile_title}>Celestial Master</p>
    </div>;
}

export default Player_info;