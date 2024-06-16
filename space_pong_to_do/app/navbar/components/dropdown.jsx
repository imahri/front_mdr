"use client"
import style from "./navbar.module.css"
import Image from "next/image";
import ProfPic from "../../picture/imahri.jpeg"
import { CiUser } from "react-icons/ci";
import { RiHomeLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const DropDown = () => {
    return <div className={`${style.dropdown_item}`}>
            <div className={`${style.user_info} ${style.spsp}`}>

                {/* picture */}
                <div className={`${style.box} ${style.profil_pic}`}>
                    <div className={`${style.profil_pic}`}>
                        <Image
                            src={ProfPic}
                            height={100}
                            width={200}
                            className={`${style.profil_pic}`}
                            alt="logo"
                            />
                    </div>
                </div>
                {/* picture */}
                <div className={`${style.info_p}`}>
                    <p className={`${style.user_full_name}`}>Imad Eddine Mahri</p>
                    <p className={`${style.user_login}`}>imahri</p>
                </div>
            </div>

            <div className={`${style.spsp}`}>
                <div className={`${style.line_sp}`}></div>
            </div>
            
            <div className={`${style.fix_but} ${style.spsp}`}>
                <CiUser size={25} color="rgb(109, 77, 45)"/>
                <p>Profile</p>
            </div>
            
            <div className={`${style.fix_but} ${style.spsp}`}> 
                <RiHomeLine size={25} color="rgb(109, 77, 45)"/>
                <p>Dashboard</p>
            </div>
            
            <div className={`${style.fix_but} ${style.spsp}`}> 
                <IoSettingsOutline size={25} color="rgb(109, 77, 45)"/>
                <p>Settings</p>
                </div>
            <div className={`${style.spsp}`}>
            <div className={`${style.line_sp}`}></div>
            </div>

            <div className={`${style.fix_but} ${style.spsp}`}>
                <IoLogOutOutline size={25} color="rgb(109, 77, 45)"/>
                <p>Log Out</p>
            </div>
    </div>
}

export default DropDown;