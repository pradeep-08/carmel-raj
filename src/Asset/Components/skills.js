import React from 'react'
import '../styles/skills.css';
import SkillsLogoOne from '../images/skillsimg.gif';
function Skills() {
  return <>
          <div className='skills-main-div'>
            <div className="skills-div">
              <div className="intro-description">
                       <h1 className='typewriter'> Hi, I’m Carmel. Nice to meet you.</h1>
                </div>
                  <div className='skills-decription'>
                  <div className="intro-des-2">Extensive 4 years of experience in Android Application Development Developing android applications to enhance and fulfill the user requirements with 
                    clean and efficient codeMonitoring the performance of live apps and working on optimizing them at the code level.Identifying and resolving bottlenecks, rectifying bugs, and enhancing application performance.
                  </div>
                </div>
               
            </div>
           
          </div>
          <div className="skills-second-main-div">
          <div className='Skills-name'>Skills</div>
          <div className="skills-second-div">
          
            <div className="skills-second-child-1">
              <div className="skills-second-content">Android</div>
              <div className="skills-second-content">Android Studio</div>
              <div className="skills-second-content">Maps</div>
              <div className="skills-second-content">Fragments</div>
              <div className="skills-second-content">MVVM</div>
              <div className="skills-second-content">Retrofit</div>
            </div>
          
             <img src={SkillsLogoOne} className='skillsimage' alt="Skillsimage"/>
            <div className="skills-second-child-1">
            <div className="skills-second-content" title='Notification services'>Notification services</div>
              <div className="skills-second-content">Restful Api</div>
              <div className="skills-second-content">ADB</div>
              <div className="skills-second-content">Java</div>
              <div className="skills-second-content">SQL</div>
              <div className="skills-second-content">JSON</div>
            </div>
          </div>
          </div>
          
  </>
    
}

export default Skills