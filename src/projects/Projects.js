import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"React"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv ddvd dhfdhbdvb"}/>
                    <Project title={"CSS"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv"}/>
                </div>
            </div>
        </div>
    );
}