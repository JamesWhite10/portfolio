import React from "react";
import style from "./project.module.scss"

type ProjectPropsType = {
    nameProject: string
    description: string
    style: any
    link: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {

    return (
        <div className={style.project}>
            <div style={props.style} className={style.icon}>
                <button className={style.button}><a href={props.link}>View</a></button>
            </div>
            <h3 className={style.h3}>{props.nameProject}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}