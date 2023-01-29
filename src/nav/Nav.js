import React from 'react';
import style from './Nav.module.scss';
// import {Link, animateScroll as scroll} from "react-scroll";
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="/#">Main</a>
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
            </Link>
        </div>
    );
}
