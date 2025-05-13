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
    <div className="w-full flex flex-col text-white bg-black pb-12 md:pb-22">
        <div className="px-4 md:px-0 w-full md:w-[80%] lg:w-[75%] 2xl:w-[60%] flex flex-col gap-5 md:gap-7.5 mr-auto ml-auto">
           <div className="">
               <img src={Goairalightlogo} alt="logo" className="w-[155px]"/>
           </div>
           <div className="flex-1 flex flex-row flex-wrap gap-7 px-2">
                  <div className="flex-1">
                      <h1 className="text-lg lg:text-2xl font-Plancsemibold pb-2 md:pb-4">Company</h1>
                      <div className="flex flex-col gap-1">
                        <button  onClick={() => {navigate('/Aboutus');setTimeout(() => window.scrollTo(0, 0), 100);}} className="text-[14px] md:text-lg font-PlancRegular">Our offerings</button>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Newsroom</h1>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Investors</h1>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Blog</h1>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Careers</h1>
                      </div>
                  </div>
                  <div className="flex-1">
                      <h1 className="text-2xl font-Plancsemibold pb-2 md:pb-4">Products</h1>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Ride</h1>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Driver</h1>
                      </div>
                  </div>
                  <div className="flex-1">
                      <h1 className="text-2xl font-Plancsemibold pb-2 md:pb-4">Global citizenship</h1>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Safety</h1>
                        <h1 className="text-[14px] md:text-lg font-PlancRegular">Sustainability</h1>
                      </div>
                  </div>
           </div>
           <div className="flex-1 flex flex-row gap-5 px-2">
              <img src={Social_media_1} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/>
              <img src={Social_media_2} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/>
              <img src={Social_media_3} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/>
              <img src={Social_media_4} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/>
              <img src={Social_media_5} alt="social_media" className="w-[30px] h-[30px] cursor-pointer"/>
           </div>
           <div className="flex-1 flex flex-col md:flex-row text-[#A1A8AF] gap-5 px-2 py-4">
               <div className="flex-1 flex flex-row gap-5 px-2">
                   <h1 className="text-[14px]">All information is subject to specific conditions.<br />© 2025 GOAIRA. All rights reserved</h1>
               </div>
               <div className="flex flex-row items-center text-[14px] gap-5 px-2">
                   <h1>Privacy</h1>
                   <h1>Accessibility</h1>
                   <h1>Terms</h1>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Footer
