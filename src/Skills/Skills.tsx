import React from "react";
import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {TableOfContents} from "../table/TableOfContents";


export const Skills = () => {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <TableOfContents title={"My Skills"}/>
                <div className={style.skills}>
                    <Skill
                        skill={"HTML & CSS"}
                        description={"\n" +
                        "I know HTML 5 & CSS 3 technology.\n" +
                        "I understand the basics of layout and styling of elements in applications." +
                        "I also know flex positioning and generally understand sass and less."}
                        image={"http://www.chicagocomputerclasses.com/wp-content/uploads/2014/04/html5-css31.png"}/>
                    <Skill
                        skill={"JavaScript"}
                        description={"\n" +
                        "In my work I use JavaScript ES6, I know the main purpose and use of the language. In addition to the basics of the language," +
                        " I know advanced tools: JSON, AJAX, Promise."}
                        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"}/>
                    <Skill
                        skill={"React"}
                        description={"I know React technology, I understand the basic principles of functional programming. " +
                        "I have experience with React Hooks, JSX, Virtual-DOM, HOC."}
                        image={"https://avatars.githubusercontent.com/u/6412038?s=200&v=4"}/>
                    <Skill
                        skill={"Redux"}
                        description={"I know Redux technology, I work with reducers, redux-form, redux-thunk, I understand how UI interacts with BLL."}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWLBe-VaJIYEbmTPrm1XyFy35MInioRpbpKK48hmPbj-m8TCYEG_GSIUZZIpXNuTqG-U&usqp=CAU"}/>
                    <Skill
                        skill={"TypeScript"}
                        description={"I know TypeScript technology. I actively use this technology and understand" +
                        " its advantages in developing web applications."}
                        image={"https://iconape.com/wp-content/png_logo_vector/typescript.png"}/>
                    <Skill
                        skill={"Git and GitHub"}
                        description={"I work with a version control system and understand how to use it on a project." +
                        " I have experience with GitHub, and I actively use it."}
                        image={"https://web-profi.by/wp-content/uploads/git.jpg"}/>
                </div>
            </div>
        </div>
    )
}