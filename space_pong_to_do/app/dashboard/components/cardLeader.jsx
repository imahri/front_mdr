"use client"
import style from "./card.module.css"
import Field from "./Friend_Field_Leader"
import SearchPlayer from "./SearchL"

const Cards = () => {
    return <div className={`${style.container} w-4 scrollbar-hide`}>

        <div className={style.boxS}>
            <SearchPlayer />
        </div>
        
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
    </div>;
}

export default Cards;