import React from 'react'
import Goairalightlogo from '../assets/images/Goaira_light_logo_footer.svg'
import Social_media_1 from '../assets/images/Social_media_1.svg'    
import Social_media_2 from '../assets/images/Social_media_2.svg'    
import Social_media_3 from '../assets/images/Social_media_3.svg'    
import Social_media_4 from '../assets/images/Social_media_4.svg'    
import Social_media_5 from '../assets/images/Social_media_5.svg'    
import { useNavigate,Link } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex cursor-default flex-col text-white bg-black pb-12 md:pb-22">
        <div className="px-4 md:px-0 w-full md:w-[80%] lg:w-[75%] 2xl:w-[60%] flex flex-col gap-5 md:gap-7.5 mr-auto ml-auto">
           <div className="">
               <img src={Goairalightlogo} alt="logo" className="w-[155px]"/>
           </div>
           <div className="flex-1 flex flex-row flex-wrap gap-7 px-2">
                  <div className="flex-1">
                      <h1 className="text-lg lg:text-2xl font-Plancsemibold pb-2 md:pb-4">Company</h1>
                      <div className="flex flex-col gap-1">
                        <button  onClick={() => {navigate('/Aboutus');setTimeout(() => window.scrollTo(0, 0), 100);}} className="text-[14px] md:text-lg text-left cursor-pointer font-PlancRegular">About us</button>
                        <h1 onClick={() => {navigate('/Careers');setTimeout(() => window.scrollTo(0, 0), 100);}} className="text-[14px] md:text-lg text-left cursor-pointer font-PlancRegular">Careers</h1>
                      </div>
                  </div>
                  <div className="flex-1">
                      <h1 className="text-2xl font-Plancsemibold pb-2 md:pb-4">Products</h1>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Rider</h1>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Driver</h1>
                      </div>
                  </div>
                  <div className="flex-1">
                      <h1 className="text-2xl font-Plancsemibold pb-2 md:pb-4">Quick links</h1>
                      <div className="flex flex-col gap-1">
                         <button  onClick={() => {navigate('/Aboutus');setTimeout(() => window.scrollTo(0, 0), 100);}} className="text-[14px] md:text-lg text-left cursor-pointer font-PlancRegular">FAQ</button>
                         <button  onClick={() => {navigate('/Aboutus');setTimeout(() => window.scrollTo(0, 0), 100);}} className="text-[14px] md:text-lg text-left cursor-pointer font-PlancRegular">Terms</button>
                          <button  onClick={() => {navigate('/Aboutus');setTimeout(() => window.scrollTo(0, 0), 100);}} className="text-[14px] md:text-lg text-left cursor-pointer font-PlancRegular">Privacy Policy</button>
                      </div>
                  </div>
           </div>
           <div className="flex-1 flex flex-row gap-5 px-2">
              <a href="https://www.instagram.com/goaira.services?igshid=NjIwNzIyMDk2Mg%3D%3D" target="_blank"><img src={Social_media_1} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/></a>
              <a href="https://www.facebook.com/goaira.services?mibextid=ZbWKwL" target="_blank"><img src={Social_media_2} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/></a>
              <a href="https://x.com/goaira_t?t=lVcXah7yIaavgwGtozLyKA&s=09" target="_blank"><img src={Social_media_3} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/></a>
              <a href="https://youtube.com/@goaira.services5120?si=Inb " target="_blank"><img src={Social_media_4} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/></a>
              <a href="https://www.linkedin.com/company/goaira-technologies/" target="_blank"><img src={Social_media_5} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/></a>
           </div>
           <div className="flex-1 flex flex-col md:flex-row text-[#A1A8AF] gap-5 px-2 py-4">
               <div className="flex-1 flex flex-row gap-5 px-2">
                 
               </div>
               <div className="flex flex-row items-center text-[14px] gap-5 px-2">
                   <h1 className="text-[14px] text-right">All information is subject to specific conditions.<br />© 2025 GOAIRA. All rights reserved</h1>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Footer
