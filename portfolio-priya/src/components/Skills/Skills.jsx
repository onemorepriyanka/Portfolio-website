import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I know</span>
            <div className="skillBars">
                <div className="skillBar">
                    <h3>Frontend</h3>
                    <div className="skills">
                        <div>HTML <span>CSS</span></div>
                        <div>Tailwind</div>
                        <div>Javascript</div>
                        <div>Typescript</div>
                        <div>React Js</div>
                        <div>Next Js</div>
                    </div>
                </div>
                <div className="skillBar">
                    <h3>Backend</h3>
                    <div className="skills">
                        <span>Node Js</span><br/>
                        <span>Express Js</span>
                    </div>
                </div>
                <div className="skillBar">
                    <h3>Database</h3>
                    <div className="skills">
                        <span>MySql</span><br/>
                        <span>MongoDB</span><br/>
                        <span>PostgreSQL</span><br/>
                    </div>
                </div>
                <div className="skillBar">
                    <h3>Devops</h3>
                    <div className="skills">
                        <span>Docker</span><br/>
                        <span>Kubernetes</span><br/>
                        <span>Git</span><br/>
                        <span>jenkins</span><br/>
                        <span>Ansible</span><br/>
                        <span>Terraform</span><br/>
                        <span>AWS</span><br/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills