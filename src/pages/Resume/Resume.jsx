import React from 'react'
import { FaBook } from "react-icons/fa";
import TemalistItem from './TemalistItem';
import { GiOpenBook } from "react-icons/gi";
import SkillItem from './SkillItem';

const Resume = () => {
    return (
        <section>
            <header>
                <h2 className='h2 article-title'>Resume</h2>
            </header>
            <div className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <FaBook />
                    </div>
                    <h3 className='h3'>Education</h3>
                </div>
                <ol className='timeline-list'>
                    <TemalistItem
                        title=""
                        data=""
                        description=""
                    />
                    <TemalistItem
                        title=""
                        data=""
                        description=""
                    />
                    <TemalistItem
                        title=""
                        data=""
                        description=""
                    />
                </ol>
            </div>

            {/* Facudade */}
            <div className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <GiOpenBook />
                    </div>
                    <h3 className='h3'>Facudade</h3>
                </div>
                <ol className='timeline-list'>
                    <TemalistItem
                        title=""
                        data=""
                        description=""
                    />
                    <TemalistItem
                        title=""
                        data=""
                        description=""
                    />
                    <TemalistItem
                        title=""
                        data=""
                        description=""
                    />
                </ol>
            </div>

            {/* Skils */}
            <div className='skill'>
                <h3 className='h3 skills-title'>Skill</h3>
                <ul className='skills-list content-card'>
                    <SkillItem title="web design" value={0}/>
                    <SkillItem title="React" value={0}/>
                    <SkillItem title="TypeScript" value={0}/>
                    <SkillItem title="Database" value={0}/>
                </ul>
            </div>
        </section>
    )
}

export default Resume