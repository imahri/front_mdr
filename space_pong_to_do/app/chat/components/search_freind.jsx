"use client"
import style from "./serachF.module.css"
import LooP from "../../picture/icons8-search-128.png"
import Image from "next/image"
import { Search } from "lucide-react"


const Searcher = () => {
    return <div className={style.makeit}>
                <div className={style.search_section}>
                    <Search className={style.sicon} size={25} color="#48433E"/>
                    
                    <input className={style.email} placeholder="Search for friends..." type="text" />
                </div>
    </div>;
}

export default Searcher;