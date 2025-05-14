import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from './view/HomePage.jsx'
import RegisterationPage from './view/RegisterationPage.jsx'; 
import Footer from './component/Footer.jsx'
import DownloadSection from './component/DownloadSection.jsx'
import Aboutus from './view/Aboutus.jsx';
import CarrerPage from './view/CarrerPage.jsx';
function App() {
 
  return (
     <Router>
       <Routes>
         <Route path='/' element={<><Home_page /><DownloadSection /><Footer /></>} />
         <Route path='/Registeration' element={<><RegisterationPage /><DownloadSection /><Footer /></>} />
         <Route path='/Aboutus' element={<><Aboutus /><DownloadSection /><Footer /></>} />
         <Route path='/Careers' element={<><CarrerPage /><DownloadSection /><Footer /></>} />
       </Routes>
     </Router>
  )
}

export default App
