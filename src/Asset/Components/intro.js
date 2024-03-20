import React from 'react'
import '../styles/intro.css';
import IntroLogo from '../images/developer-icon.png';
import IntroLogoTwo from '../images/introtarsh.gif';
import IntroLogoThree from '../images/intrologotwo.jpg';
// import IntroLogofour from '../images/minilogo.jpg';
import IntroLogofive from '../images/Android Studio - Social.png';

function Intro() {
  return <>
        <div className="main-div-intro">
          <div className="intro-div-1">
             <div className="div-role">Android,Backend Developer</div>
               <img className='intro-logo-mini-3' width="44" height="44" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/external-APK-file-extension-bearicons-outline-color-bearicons.png" alt="external-APK-file-extension-bearicons-outline-color-bearicons"/>
                <img className='intro-logo-image' src={IntroLogo} alt="" />
                  <div className="main-name">
                  Carmel Raj
                    </div>
                  {/* <img className='intro-logo-mini-1' src={IntroLogofour} alt="" /> */}
                {/* <img className='intro-logo-mini-4' width="46" height="46" src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Android-notification-and-mailing-smashingstocks-flat-smashing-stocks.png" alt="external-Android-notification-and-mailing-smashingstocks-flat-smashing-stocks"/> */}
              <div className="des">
             <div className="intro-des">An Android developer: expert in Java, crafting seamless mobile experiences with innovative design, performance optimization, and integrated backend solutions.</div>
            <img className='intro-logo-mini-2' src={IntroLogofive} alt="" />
            </div> 
          <img className='intro-logo-image-1' src={IntroLogoTwo} alt="" />
         <img className='intro-logo-image-2' src={IntroLogoThree} alt="" />    
            </div>        
        </div>
  </> 
}
export default Intro