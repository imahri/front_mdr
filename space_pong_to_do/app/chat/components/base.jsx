"use client"
import style from "./base.module.css"
import LooP from "../../picture/icons8-search-128.png"
import Image from "next/image"
import Search from "./search_freind"
import Freind from "./freind_label"
import ProfileChat from "./profile_chat"



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
                    <div className={`${style.profile_chat}`}>
                        <ProfileChat />
                    </div>
                    <div className={`${style.body_chat}`}>
                        {/* chat */}
                        <div className={`${style.msg}`}>
                            aalll
                        </div>
                        <div className={`${style.chat_sender}`}>
                            sender
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${style.part_two}`}>
                dlasgfklafglkdlaglk
            </div>
            
        </div>
    </div>;
}

export default BaseExec;