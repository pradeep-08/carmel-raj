import React from 'react'
import '../styles/project.css';


function Projects() {
  return <>
    <div className='project-main-div'>
    <div className='project-name-main'>
    <span className='project-name'>Projects</span>
    </div>
    <div className="project-div-main">
    <div className='project-child'>
    <div className='project-name'>Asset Management System</div>
      <div className='project-info'>An application to manage the devices such as ELock, EController, 2-Core, 4-Core cables, and GSM to multiple users in Kritilabs Technologies.
                Users with the role of Field officer can add new vehicles, add products to the vehicles, remove existing products from the vehicles and inspect the vehicles. 
                Product admin can add products to the particular company, components for the products and they can interchange the products between the companies. 
                Generates vehicle inspection, vehicle communication issue and product detail report to check the status of every vehicle. It also allows the users to update their attendance every day. 
                It helps to generate secondary OTP in case of any failure in the terminal lock or unlock</div>
                <div className="role"> Application Developer - Requirement gathering, analyzing,
and developing the complete working application.</div>
    </div>
     
    <div className='project-child'>
    <div className='project-name'>Smart Full - Retail outlet</div>
      <div className='project-info'>Application to generate the OTP to lock or unlock the ELock in the
                          vehicle. OTP will be sent to the RO customer based on the vehicle location, invoice number, ETA of vehicle etc.
</div>
<div className="role"> Application Developer - Requirement gathering, analyzing,
and developing the complete working application.</div>
    </div>


    <div className='project-child'>
    <div className='project-name'>KROMA</div>
      <div className='project-info'>Application to generate the OTP to lock or unlock the IntelliLock using Bluetooth connection in the vehicle. OTP will be sent to the
                                       RO customer based on the vehicle location, invoice number, ETA of the vehicle, etc.
</div>
    </div>
    </div>
    
    
    </div>
  </>
}

export default Projects