import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"My Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}/>
                    <Skill title={"CSS"} description={"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                    <Skill title={"React"} description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                </div>
            </div>
        </div>
    );
}