import React from 'react'
import '../styles/exp.css';
// import SkillsLogoOne from '../images/skillsimg.gif';

function Exp() {
  return (
    <>
      <div className='exp-name'>Experience</div>
      <div className="exp-main-div">
          
        <div className="experience-section">
         <div>
         <div>Program Analyst<span>Mar 2020 - Till date</span></div>
          <div> KritiLabs Technologies <span>Chennai, Tamil Nadu</span></div>
         </div>
        
          <div className='experience-info'>IOT Technology solutions and managed IOT services for Multiple industries through it's 
              patented ALS IOT Platform<br></br>Worked with team of 3 members and provided end-to-end solutions for clients<br></br> Lead developer for 3 major mobile applications</div>
        </div>  
        <div className='experience-section-2'>
        <div><div>Software Trainee<span> May 2019 - Feb 2020</span></div>
          <div> Friendzion Technologies <span>Hosur, Tamil Nadu</span></div></div>
          <div className='experience-info'>Experienced in working with Android studio and SDK</div>
        </div>
         </div> 
      </div>
    </>
  )
}

export default Exp