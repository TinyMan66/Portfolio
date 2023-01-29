import React from 'react';
import styles from './Skill.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fade} from "react-awesome-reveal";

export const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <Fade bottom>
                <div className={styles.iconContainer}>
                    {
                        props.iconImg
                            ? <img src={props.iconImg} className={styles.icon} alt="symbol"/>
                            : <FontAwesomeIcon icon={props.icon} className={styles.icon}/>
                    }
                </div>
                <h3>{props.title}</h3>
                <span className={styles.description}>
                    {props.description}
                </span>
            </Fade>
        </div>
    );
}