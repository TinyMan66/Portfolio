import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todoImage from './../asserts/images/todolistFake.jpeg'
import socialImage from './../asserts/images/socialFake.png'

export const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    };

    const todoList = {
        backgroundImage: `url(${todoImage})`
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"My Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social Network"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv ddvd dhfdhbdvb"}/>
                    <Project style={todoList} title={"Todo List"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv"}/>
                </div>
            </div>
        </div>
    );
}