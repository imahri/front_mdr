"use client"
import style from "./base.module.css"
import FriendField from "./Friend"
import SearchPlayer from "./Search"

const FriendCont = () => {
    return <div className={style.lists}>
        <div className={style.Friend_list}>
            <FriendField />

        </div>
    </div>
}

export default FriendCont;