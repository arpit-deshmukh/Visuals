import React from 'react'
import { Link } from "react-router-dom";

import '../App.css'
import '../styles/LandingPage.css'

export default function LandingPage() {
  return (
    <div className='landingPageContainer'>
     
      <nav className='navbar1'>
        <div className='navHeader'>
          <h2>Visuals</h2>
        </div>
        <div className='navList'>
              <p>Join as Guest</p>
               {/* <Link to={"/auth"}>Register</Link>
               <Link to={"/auth"}>Register</Link> */}
              <p>Register</p>
              <p>Login</p>

              
        </div>
      </nav>

      <div className="landingMainContainer">
          <div >
            <h1><span style={{color:"#ff9839"}}>Connect</span> with your<br/> Loved once</h1><br/>
            <p>Cover distance with visuals</p>

            
            <div className='getStarted'>
              <Link to={"/auth"}>Get Started</Link>
            </div>
          </div>
          <div>
            <img src='/mobile.png' alt='img'/>
          </div>

      </div>
    </div>
  )
}
