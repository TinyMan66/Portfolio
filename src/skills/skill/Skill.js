import React from 'react';
import styles from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.iconContainer} style={props.style}>
                <FontAwesomeIcon icon={props.icon} className={styles.icon}/>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
}