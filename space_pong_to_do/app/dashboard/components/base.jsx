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
import ContFriend from "./container_friend"
import Field from "./Friend_Field"
import SearchPlayer from "./Search"

const BaseExec = () => {
    return <div>
        <SearchPlayer />
        <Field />
    </div>;

}

export default BaseExec;