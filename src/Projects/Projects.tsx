import React from "react";
import style from "./Projects.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import { Project } from "./project/project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project nameProject={"Social Network"} description={"Project description"}/>
                    <Project nameProject={"TodoList"} description={"Project description"}/>
                    <Project nameProject={"Customizable counter"} description={"Project description"}/>
                </div>
            </div>
        </div>
    )
}