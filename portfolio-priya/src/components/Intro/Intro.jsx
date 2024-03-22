import React from 'react'
import './Intro.css'
import mimg from '../../assets/my-image.jpeg'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introtext">I'm <span className="introName">Priyanka </span><br />Software Engineer</span>
                <p className="introPara">I am a skilled Web Developer with experience in building <br/> appealing and user friendly websites.</p>
            </div>
            <img src={mimg} alt="" className="bg" />

        </section>
    )
}

export default Intro;