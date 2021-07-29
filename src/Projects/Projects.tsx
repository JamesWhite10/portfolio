import React from "react";
import style from "./Projects.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/project";
import {TableOfContents} from "../table/TableOfContents";


export const Projects = () => {
    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <TableOfContents title={"My Projects"}/>
                <div className={style.projects}>
                    <Project nameProject={"Social Network"} description={"A social network project in which" +
                    " all the main tools and architectural solutions used in modern development are concentrated." +
                    " Configured to work with the server side and used in the work of React, Redux, Axios," +
                    " Redux-Form, React hooks, TypeScript."} image={""}/>
                    <Project nameProject={"Todo List"} description={"\n" +
                    "To-do list project, with the ability to both add and delete to-do lists, and individual tasks in the lists." +
                    " Also in the application there is user login and saving all data on the server."} image={""}/>
                    <Project nameProject={"Customizable counter"} description={"Meter project, with the ability" +
                    " to set the minimum and maximum values and" +
                    " turn off the controls when the set value" +
                    " is reached, as well as save the set value."} image={""}/>
                </div>
            </div>
        </div>
    )
}