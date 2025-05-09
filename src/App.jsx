import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from './view/HomePage.jsx'
import RegisterationPage from './view/RegisterationPage.jsx'; 
import Footer from './component/Footer.jsx'
import DownloadSection from './component/DownloadSection.jsx'
function App() {
 
  return (
     <Router>
       <Routes>
         <Route path='/' element={<><Home_page /><DownloadSection /><Footer /></>} />
         <Route path='/Registeration' element={<><RegisterationPage /><DownloadSection /><Footer /></>} />
       </Routes>
     </Router>
  )
}

export default App
