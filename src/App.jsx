import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from './view/HomePage.jsx'
import RegisterationPage from './view/RegisterationPage.jsx'; 
import Footer from './component/Footer.jsx'
import DownloadSection from './component/DownloadSection.jsx'
import Aboutus from './view/Aboutus.jsx';
import CarrerPage from './view/CarrerPage.jsx';
import Franchise from './view/Franchise.jsx';
function App() {
 
  return (
     <Router>
       <Routes>
         <Route path='/' element={<div style={{ position: 'relative' }}><Home_page /><DownloadSection /><Footer /></div>} />
         <Route path='/Registeration' element={<div style={{ position: 'relative' }}><RegisterationPage /><DownloadSection /><Footer /></div>} />
         <Route path='/Aboutus' element={<div style={{ position: 'relative' }}><Aboutus /><DownloadSection /><Footer /></div>} />
         <Route path='/Careers' element={<div style={{ position: 'relative' }}><CarrerPage /><DownloadSection /><Footer /></div>} />
         <Route path='/Franchise' element={<div style={{ position: 'relative' }}><Franchise /><DownloadSection /><Footer /></div>} />
       </Routes>
     </Router>
  )
}

export default App
