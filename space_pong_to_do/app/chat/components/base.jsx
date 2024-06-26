"use client"
import style from "./base.module.css"
import Search from "./search_freind"
import Freind from "./freind_label"
import ProfileChat from "./profile_chat"
import MessageLabel_in from "./chatin"
import MessageLabel_out from "./chatout"
import Sender from "./sender"




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
                        <div className={`${style.msg}`}>
                            <MessageLabel_in/>
                            <MessageLabel_out/>
                            <MessageLabel_in/>
                            <MessageLabel_in/>
                            <MessageLabel_out/>
                            <MessageLabel_out/>
                            <MessageLabel_out/>
                            <MessageLabel_in/>
                            <MessageLabel_in/>
                            <MessageLabel_out/>      
                            <MessageLabel_in/>
                        </div>
                        <div className={`${style.chat_sender}`}>
                            <Sender />
                        </div>
                    </div>
                </div>

            </div>

            
            <div className={`${style.part_two}`}>

            </div>
            
        </div>
    </div>;
}

export default BaseExec;