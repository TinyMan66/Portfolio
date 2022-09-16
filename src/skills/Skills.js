import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            {/*промапить потом можно скилы*/}
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv ddvd dhfdhbdvb"}/>
                    <Skill title={"CSS"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv"}/>
                    <Skill title={"React"} description={"lorem jhdvjvhdvbdbvdv jhdghvhvdhvdjhv ddvd"}/>
                </div>
            </div>
        </div>
    );
}