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
                        <Project path={"https://github.com/TinyMan66/my-samurai-way"} style={social}
                                 title={"SOCIAL NETWORK"}
                                 description={"TS/REDUX/RESTAPI/THUNK/MATERIAL UI/UNIT TESTS"}/>
                        <Project path={"https://github.com/TinyMan66/todolist"} style={todoList} title={"TODO LIST"}
                                 description={"TS/REDUX/RESTAPI/THUNK/MATERIAL UI/UNIT TESTS"}/>
                        <Project path={"https://github.com/JuliOgogo/friday-project"} style={todoList} title={"LEARN CARDS"}
                                 description={"A COMMAND WORK. THE APP FOR LEARNING SOME CARDS"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}