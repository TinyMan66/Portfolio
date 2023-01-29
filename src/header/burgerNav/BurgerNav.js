import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";

export const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.burgerNav}>
            <div className={isOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <a href="">Main</a>
                <Link to="skills"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}
                >
                    Skills
                </Link>
                <Link to="projects"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}
                >
                    Projects
                </Link>
                <Link to="contacts"
                      activeClass={style.active}
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={500}
                >
                    Contacts
                </Link></div>
            <div className={style.burgerBtn} onClick={() => setIsOpen(!isOpen)}></div>
        </div>
    );
}
