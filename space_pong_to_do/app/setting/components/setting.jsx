"use client"
import style from "./setting.module.css"
import Image from "next/image";
import ProfPic from "../../picture/imahri.jpeg"
import PartO from "./first_part"
import PartT from "./second_part"
import LPartT from "./third_part"

const CSetting = () =>{
  return <div className={style.container}>
        
        <div className={style.title}>SETTINGS</div>

        <div className={style.sep}></div>
        <PartO />

        <div className={style.sep}></div>
        <PartT />

        <div className={style.sep}></div>
        <LPartT />

  </div>;
}

export default CSetting;