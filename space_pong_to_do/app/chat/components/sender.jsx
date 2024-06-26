"use client"
import style from "./sender.module.css"
import LooP from "../../picture/icons8-search-128.png"
import Image from "next/image"
import { Paperclip, Smile, Send } from "lucide-react"


const Searcher = () => {
    return <div className={style.makeit}>
                <div className={style.search_section}>
                    <div className={style.first_part}>
                        <Paperclip size={25} color="#B7AA9C"/>
                        <input className={style.email} placeholder="Search for friends..." type="text" />
                    </div>
                    <div className={style.first_two}>
                        <Smile size={20} color="#B7AA9C"/>
                        <Send size={25} color="#B7AA9C"/>
                    </div>
                </div>
    </div>;
}

export default Searcher;