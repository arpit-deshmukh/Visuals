import { useState } from 'react';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css'
import Authentication from './auth/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeet from './pages/VideoMeet';
import HomeComponent from './pages/Home';
import History from './pages/History';



function App() {
  

  return (
    <>
          <Router>
          <AuthProvider>


        
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/auth" element={<Authentication/>}/>
              <Route path="/:url" element={<VideoMeet/>}/>
              
              <Route path="/home" element={<HomeComponent/>}/>
              <Route path="/history" element={<History/>}/>
              

            //    <Route path='/home's element={<HomeComponent />} />
            // <Route path='/history' element={<History />} />

            </Routes>

            </AuthProvider>

          </Router>
   
    </>
  )
}

export default App
