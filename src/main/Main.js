import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles'
import {useCallback} from "react";
import {loadFull} from "tsparticles";

const particlesOpt = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
    }
};

export const Main = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className={style.mainBlock}>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} className={style.particles} options={particlesOpt}/>
            <div className={style.container}>
                <div className={style.greeting}>
                    <p>Hi There!</p>
                    <h1>
                        I'm <span>Diana Lipanova</span>
                    </h1>
                    <p>A Front-end Developer</p>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );
}