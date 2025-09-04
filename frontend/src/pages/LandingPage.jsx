import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Visuals</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/guest123")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h2><span style={{ color: "#7cb6d1ff" }}></span> Connect, collaborate, and create moments that matter</h2>

                    {/* <p>Bringing people together to <br/>meet  share and innovate and </p> */}
                   
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                    <br/>
                     <p>Every call sparks discussion, creation, and change</p>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}
