import React from "react";
import style from "./project.module.css"

type ProjectPropsType = {
    nameProject: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}>View</button>
            </div>
            <h3 className={style.h3}>{props.nameProject}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}