"use client"
import style from "./navbar.module.css"
import Image from "next/image";
import logo from "../../picture/logo.png"
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import ProfPic from "../../picture/imahri.jpeg"
import DropDown from "./dropdown";

const NavBar = () => {
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
            <div className={`${style.box}`}>
                <IoChatbubblesOutline size={25}/>
            </div>
            <div className={`${style.box}`}>
                <IoNotificationsOutline size={25}/>
            </div>

            <div className={`${style.dropdown}`}>
                <div className={`${style.box} ${style.profil_pic}`}>
                    <div className={`${style.profil_pic}`}>
                        <Image
                            src={ProfPic}
                            height={100}
                            width={200}
                            className={`${style.profile_pic}`}
                            alt="logo"
                        />
                    </div>
                </div>

                {/* <DropDown /> */}

            </div>
        </div>
    </div>;
}

export default NavBar;