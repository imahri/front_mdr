"use client"
import style from "./base.module.css"
import LooP from "../../picture/icons8-search-128.png"
import Image from "next/image"
import Search from "./search_freind"
import Freind from "./freind_label"



const BaseExec = () => {
    return <div className={style.container}>
        <div className={style.holder}>
            <div className={`${style.part_one}`}>
                
                <div className={`${style.friend}`}>
                    <div className={`${style.friend_search}`}>
                        <Search />
                    </div>
                    <div className={`${style.friend_list}`}>
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                        <Freind />
                    </div>
                </div>




                <div className={`${style.chat}`}>
                    chat
                </div>

            </div>
            <div className={`${style.part_two}`}>
                dlasgfklafglkdlaglk
            </div>
            
        </div>
    </div>;
}

export default BaseExec;