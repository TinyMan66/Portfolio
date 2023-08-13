import React from 'react';
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import {faReact, faHtml5, faCss3Alt, faJs} from '@fortawesome/free-brands-svg-icons';
import tsImg from '../assets/images/tsIcon.png';
import { Fade } from "react-awesome-reveal";

export const Skills = () => {
    const tsIcon = tsImg
    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade bottom>
                <div className={style.skillsContainer}>
                    <Title text={"My Skills"}/>
                    <div className={style.skills}>
                        <Skill icon={faJs} title={"JavaScript"}/>
                        <Skill icon={faCss3Alt} title={"CSS"}/>
                        <Skill icon={faReact} title={"React"}/>
                        <Skill icon={faHtml5} title={"Html"}/>
                        <Skill iconImg={tsIcon} title={"TypeScript"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}