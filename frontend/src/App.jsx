import { useState } from 'react';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css'
import Authentication from './auth/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeet from './pages/VideoMeet';



function App() {
  

  return (
    <>
          <Router>
          <AuthProvider>


        
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/auth" element={<Authentication/>}/>
              <Route path="/:urls" element={<VideoMeet/>}/>
              
              

            </Routes>

            </AuthProvider>

          </Router>
   
    </>
  )
}

export default App
