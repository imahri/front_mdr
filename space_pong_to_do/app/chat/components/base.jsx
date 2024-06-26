"use client"
import style from "./base.module.css"
import Search from "./search_freind"
import Freind from "./freind_label"
import FreindV2 from "./freind_label_second"
import ProfileChat from "./profile_chat"
import MessageLabel_in from "./chatin"
import MessageLabel_out from "./chatout"
import Sender from "./sender"
import Image from "next/image"
import Ach from "../../picture/rank5.png"
import ProfilePic from "../../picture/imahri.jpeg"
import React, { useRef } from "react"




const BaseExec = () => {
    const friendListRef = useRef(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - friendListRef.current.offsetLeft);
      setScrollLeft(friendListRef.current.scrollLeft);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - friendListRef.current.offsetLeft;
      const walk = (x - startX); 
      friendListRef.current.scrollLeft = scrollLeft - walk;
    };

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

                <div className={`${style.friend_v2}`}>
                    <div className={`${style.friend_search}`}>
                        <Search />
                    </div>
                    <div className={`${style.friend_list_V2} scrollbar-hide`}
                        ref={friendListRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}>

                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
                        <FreindV2 />
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
                <div className={`${style.part_two_holder}`}>
                    <div className={`${style.holder_picture}`}>
                        <Image
                            src={ProfilePic}
                            height={100}
                            width={300}
                            alt="Profile image"
                            className={style.picprofile}
                        />
                    </div>
                    <div className={`${style.information}`}>
                        <div className={style.user_info}>
                            <p className={style.userfull}>mahri imad-eddine</p>
                            <p className={style.user_login}>@imahri</p>
                        </div>
                        <div className={style.user_bio}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae necessitatibus animi, eum illo, sapiente perspiciatis quasi sit labore tempore ipsam commodi magni voluptas quia totam omnis, iure culpa fuga.</p>
                        </div>
                    </div>
                    
                    <div className={`${style.achivement}`}>
                        <div className={`${style.holder_achivement}`}>
                            <Image
                                src={Ach}
                                height={100}
                                width={300}
                                alt="Profile image"
                            />
                        </div>
                        <div className={`${style.holder_achiv}`}>
                            <p className={`${style.achiv_para}`}>Celestial Master</p>
                            <p className={`${style.achiv_exp}`}>10231xp</p>
                        </div>
                    </div>
                </div>
            </div>

.
        </div>
    </div>;
}

export default BaseExec;