import React from 'react';
import s from './Skill.module.css'
import styleContainer from './../сommon/styles/Container.module.css'

type SkillPropsType = {
    title:string
    description: string
}

export const Skill = ({title,description}: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
        <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
}

