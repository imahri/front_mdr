"use client"
import style from "./setting.module.css"

const PartT = () =>{
  return <div className={style.second}>
            <div className={style.def_part}>
                <p className={`${style.description_p}`}>Personal Settings</p>
                <p className={`${style.description_p} ${style.description_pc}`}>Change identifying details for your account</p>
            </div>


            <div className={style.up_part}>
                <div className={style.name}>
                    <div className={style.inside_fields}>
                        <p>First name</p>
                        <input className={style.inputs} placeholder="imad eddine" type="text" />
                    </div>
                    <div className={style.inside_fields}>
                        <p>Last name</p>
                        <input className={style.inputs} placeholder="mahri" type="text" />
                    </div>
                </div>
                
                <div className={style.name}>
                    <div className={style.inside_fields}>
                        <p>Email</p>
                        <input className={style.inputs} placeholder="ft_transcendence@gmail.com" type="text" />
                    </div>
                    <div className={style.inside_fields}>
                        <p>Phone number</p>
                        <input className={style.inputs} placeholder="+212611223344" type="text" />
                    </div>

                </div>
                
                <div className={style.name}>
                    <div className={style.inside_fields}>
                        <p>Current password</p>
                        <input className={style.inputs} placeholder="**************" type="password" />
                    </div>
                    <div className={style.inside_fields}>
                        <p>New password</p>
                        <input className={style.inputs} placeholder="**************" type="password" />
                    </div>
                    <div className={style.inside_fields}>
                        <p>Confirm new password</p>
                        <input className={style.inputs} placeholder="**************" type="password" />
                    </div>
                </div>
            </div>
        </div>

}

export default PartT;