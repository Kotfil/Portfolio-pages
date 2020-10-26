import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../сommon/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JavaScript'} description={'loreeeeeeeeeeeeeeeeeeee'}/>
                    <Skill title={'Css'} description={'lorem  eeeeeeeeeeeeeeeeeee'}/>
                    <Skill title={'React'} description={'loremeeeeeeeeeeeeeeeeeee'}/>
                </div>
            </div>

        </div>
    );
}

