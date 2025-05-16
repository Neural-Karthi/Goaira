import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from './view/HomePage.jsx'
import RegisterationPage from './view/RegisterationPage.jsx'; 
import Footer from './component/Footer.jsx'
import DownloadSection from './component/DownloadSection.jsx'
import Aboutus from './view/Aboutus.jsx';
import CarrerPage from './view/CarrerPage.jsx';
import Franchise from './view/Franchise.jsx';
import Privacypolicy from './view/Privacypolicy.jsx';
import Teamsandcondition from './view/Teamsandcondition.jsx';
import FAQ from './view/FAQ.jsx';
function App() {
 
  return (
     <Router>
       <Routes>
         <Route path='/' element={<div style={{ position: 'relative' }}><Home_page /><DownloadSection /><Footer /></div>} />
         <Route path='/Registeration' element={<div style={{ position: 'relative' }}><RegisterationPage /><DownloadSection /><Footer /></div>} />
         <Route path='/Aboutus' element={<div style={{ position: 'relative' }}><Aboutus /><DownloadSection /><Footer /></div>} />
         <Route path='/Careers' element={<div style={{ position: 'relative' }}><CarrerPage /><DownloadSection /><Footer /></div>} />
         <Route path='/Franchise' element={<div style={{ position: 'relative' }}><Franchise /><DownloadSection /><Footer /></div>} />
         <Route path='/Privacy-policy' element={<div style={{ position: 'relative' }}><Privacypolicy /><DownloadSection /><Footer /></div>} />
         <Route path='/Terms-and-Conditions' element={<div style={{ position: 'relative' }}><Teamsandcondition /><DownloadSection /><Footer /></div>} />
         <Route path='/FAQ' element={<div style={{ position: 'relative' }}><FAQ /><DownloadSection /><Footer /></div>} />
       </Routes>
     </Router>
  )
}

export default App
