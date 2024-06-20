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

const SearchPlayer = () => {
    return <div className={style.search_section}>
        <p className={style.friend_title}>LEADERBOARD</p>
        {/* <div className={style.holders}>
            <Image
                src={LooP}
                height={100}
                width={300}
                className={`${style.im}`}
                alt="Profile random image"
            />
            <input className={style.email} placeholder="Search for friends..." type="text" />
        </div> */}
    </div>
}

export default SearchPlayer;