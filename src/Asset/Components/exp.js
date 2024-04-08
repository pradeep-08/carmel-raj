import React from 'react'
import '../styles/exp.css';
 import ExpLogo from '../images/exp.gif';

function Exp() {
  return (
    <>
     
      <div className="exp-main-div">
      
        <div className="experience-section">
        <div className='exp-name'>Experience</div>
         <div className="experience-section-1" >
         <div>
         <div className='exp-role'>Program Analyst<span className='time-line-exp'>Mar 2020 - Till date</span></div>
          <div className='exp-company'> KritiLabs Technologies <span className='time-line-exp'>Chennai, Tamil Nadu.</span></div>
         </div>
        
          <div className='experience-info'>IOT Technology solutions and managed IOT services for Multiple industries through it's 
              patented ALS IOT Platform Worked With team of 3 members and provided end-to-end solutions for clients Lead developer for 3 major mobile applications</div>
        </div>  
       
        <div className='experience-section-2'>
        <div className='exp-name'>Internship</div>
        <div><div className='exp-role'>Software Trainee<span className='time-line-exp'> May 2019 - Feb 2020</span></div>
          <div className='exp-company'> Friendzion Technologies <span className='time-line-exp'>Hosur, Tamil Nadu.</span></div></div>
          <div className='experience-info'>Experienced in working with Android studio and SDK</div>
        </div>
       
         </div> 
         <div className='exp-image'><img  src={ExpLogo} alt="" /></div>
         
      </div>
    </>
  )
}

export default Exp