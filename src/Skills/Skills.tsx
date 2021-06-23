import React from "react";
import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill skill={"HTML & CSS"} description={"I know HTML & CSS technology"}/>
                    <Skill skill={"JS"} description={"I know JS technology"}/>
                    <Skill skill={"React"} description={"I know React technology"}/>
                    <Skill skill={"Redux"} description={"I know Redux technology."}/>
                </div>
            </div>
        </div>
    )
}