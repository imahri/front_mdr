"use client"
import style from "./serachF.module.css"
import LooP from "../../picture/icons8-search-128.png"
import Image from "next/image"


const Search = () => {
    return <div>
                <div className={style.search_section}>
                    <div className={style.holders}>
                        <Image
                            src={LooP}
                            height={100}
                            width={300}
                            className={`${style.im}`}
                            alt="Profile random image"
                        />
                        <input className={style.email} placeholder="Search for friends..." type="text" />
                    </div>
                </div>
    </div>;
}

export default Search;