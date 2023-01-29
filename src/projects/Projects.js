import React from 'react';
import style from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from '../assets/images/todolistFake.jpeg';
import socialImage from '../assets/images/socialFake.png';
import {Fade} from "react-awesome-reveal";

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    };

    const todoList = {
        backgroundImage: `url(${todoImage})`
    };

    return (
        <div id="projects" className={style.projectsBlock}>
            <Fade bottom>
                <div className={style.projectsContainer}>
                    <Title text={"My Projects"}/>
                    <div className={style.projects}>
                        <Project path={"https://tinyman66.github.io/my-samurai-way/"} style={social}
                                 title={"Social Network"}
                                 description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv ddvd dhfdhbdvb"}/>
                        <Project path={"/#"} style={todoList} title={"Todo List"}
                                 description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}