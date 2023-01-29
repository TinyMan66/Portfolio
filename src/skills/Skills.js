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
                        <Skill icon={faJs} title={"JavaScript"}
                               description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}/>
                        <Skill icon={faCss3Alt} title={"CSS"}
                               description={"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}/>
                        <Skill icon={faReact} title={"React"}
                               description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                        <Skill icon={faHtml5} title={"Html"}
                               description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                        <Skill iconImg={tsIcon} title={"TypeScript"}
                               description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}