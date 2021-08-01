import React from "react";
import style from "./Skill.module.scss"

type SkillPropsType = {
    skill: string
    description: string
    image: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}><img className={style.image} src={props.image}/></div>
            <h3 className={style.h3}>{props.skill}</h3>
            <div className={style.description}>{props.description}</div>
        </div>
    )
}