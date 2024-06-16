"use client"
import style from "./setting.module.css"
import Image from "next/image";
import ProfPic from "../../picture/imahri.jpeg"

const PartO = () =>{
  return <div className={style.picture_change}>

            <div className={`${style.description}`}>
                <p className={`${style.description_p}`}>Profile picture</p>
                <p className={`${style.description_p} ${style.description_pc}`}>Must be JPEG, PNG, or GIF and cannot exceed 5MB.</p>
            </div>

            <div className={`${style.profil_pic}`}>
                <Image
                    src={ProfPic}
                    height={100}
                    width={200}
                    className={`${style.profil_pic}`}
                    alt="logo"
                />
            </div>

            <div className={`${style.submitter}`}>
                <button className={`${style.btbt} ${style.update}`}>Update Profile Picture</button>
                <button className={`${style.btbt} ${style.remove}`}>Remove</button>
            </div>

        </div>


}

export default PartO;