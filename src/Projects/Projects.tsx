import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "./../common/styles/Container.module.css"
import {Project} from "./project/project";
import {Title} from "../Title/Title";
import network from "./../assets/image/network.jpg"
import todo from "./../assets/image/todo.jpg"
import counter from "./../assets/image/counter.jpg"


export const Projects = () => {

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <div className={style.projects}>
                    <Project style={{backgroundImage: `url(${network})`}} nameProject={"Social Network"} description={"A social network project in which" +
                    " all the main tools and architectural solutions used in modern development are concentrated." +
                    " Configured to work with the server side and used in the work of React, Redux, Axios," +
                    " Redux-Form, React hooks, TypeScript."} link={"https://JamesWhite10.github.io/social-network-2.0"}/>
                    <Project style={{backgroundImage: `url(${todo})`}} nameProject={"Todo List"} description={"\n" +
                    "To-do list project, with the ability to both add and delete to-do lists, and individual tasks" +
                    " in the lists. Also in the application there is user login and saving all data on the server."} link={"https://JamesWhite10.github.io/todolist-3-max"}/>
                    <Project style={{backgroundImage: `url(${counter})`}} nameProject={"Customizable counter"} description={"Meter project, with the ability" +
                    " to set the minimum and maximum values and" +
                    " turn off the controls when the set value" +
                    " is reached, as well as save the set value."} link={"https://jameswhite10.github.io/Counter/"}/>
                </div>
            </div>
        </div>
    )
}