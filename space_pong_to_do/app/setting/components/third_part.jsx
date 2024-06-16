"use client"
import style from "./setting.module.css"

const LPart = () =>{
  return <div className={style.second}>
            <div className={style.def_part}>
                <p className={`${style.description_p}`}>Personal Settings</p>
                <p className={`${style.description_p} ${style.description_pce}`}>Change identifying details for your account</p>
            </div>

            <div className={style.up_part}>
                <div className={style.name}>
                    <div className={style.inside_fields}>
                        <p>Username</p>
                        <input className={style.inputs} placeholder="fiddler" type="text" />
                    </div>
                    <div className={style.inside_fields}>
                        <p>Bio</p>
                        <textarea placeholder="i'm not the only one in this world but i'm the best" className={`${style.inputs} ${style.bio}`}></textarea>
                    </div>
                </div>
                <button className={`${style.btbt} ${style.save}`}>Save Changes</button>
            </div>
        </div>

}

export default LPart;
