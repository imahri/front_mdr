"use client"
import Link from "next/link";
import style from "./navbar.module.css"
import Image from "next/image";
import logo from "../../picture/logo-transparent.png"
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import ProfPic from "../../picture/imahri.jpeg"
import DropDown from "./dropdown";
import { useState } from "react";

const NavBar = () => {
    const [dropdown, setDropdown] =  useState(false);
    return <div className={style.containerS}>
        <div className={style.logo}>
                <Image
                    src={logo}
                    height={100}
                    width={200}
                    className={`${style.logo_im}`}
                    alt="logo"
                />
            </div>
        <p className={`${style.title}`}>STARSERVE</p>

        <div className={`${style.pack_header}`}>
            <Link href={"/chat"}>
                <div className={`${style.box}`}>
                    <IoChatbubblesOutline size={20}/>
                </div>
            </Link>
            <div className={`${style.box}`}>
                <IoNotificationsOutline size={20}/>
            </div>

            <div className={`${style.dropdown}`}>
                <div className={`${style.box} ${style.profil_pic}`}>
                    <div className={`${style.profil_pic}`}
                    onClick={()=> {
                        setDropdown(!dropdown)
                    }}
                    >
                        <Image
                            src={ProfPic}
                            height={100}
                            width={200}
                            className={`${style.profile_pic}`}
                            alt="logo"
                        />
                    </div>
                </div>

               
                {dropdown && <DropDown dropdown={dropdown} setDropdown={setDropdown}/>}

            </div>
        </div>
    </div>;
}

export default NavBar;