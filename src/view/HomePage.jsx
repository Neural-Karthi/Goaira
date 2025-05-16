import React, { useState, useEffect } from 'react';
import Header from '../component/Header.jsx'  
import Home_Banner_section_1 from '../assets/images/Home_Banner_section_1.webp'  
import { motion, useScroll, useTransform,AnimatePresence} from "framer-motion";
import { useRef } from "react";

import Service_img_1 from '../assets//images/Service_img_1.svg'
import Service_img_2 from '../assets//images/Service_img_1_1.svg'
import Service_img_3 from '../assets//images/Service_img_2_1.svg'
import Service_img_4 from '../assets//images/Service_img_4.svg'
import Service_img_5 from '../assets//images/Service_img_3_1.svg'
import Service_img_6 from '../assets//images/Service_img_4_1.svg'
import Service_img_7 from '../assets//images/ActingDriver.svg'


import leftarrow from '../assets/images/LeftArrow.svg'
import rightarrow from '../assets/images/RightArrow.svg'
import Banner_2 from  '../assets/images/Banner_section_2.webp' 
import Banner_3 from  '../assets/images/Banner_section_3.svg' 
import Banner_4 from  '../assets/images/Banner_section_4_1.png' 
import Banner_4_2 from  '../assets/images/Banner_section_4_2.png' 

import {useNavigate,useLocation} from 'react-router-dom'

const HomePage = () => {
    const Navigate = useNavigate()
    const Service_img = [Service_img_1, Service_img_2, Service_img_3, Service_img_4, Service_img_5, Service_img_6]
    const containter = useRef(null);
    const { scrollYProgress } = useScroll({ target: containter, offset: ["start end", "end start"] });
    const scale1 = useTransform(scrollYProgress, [0, 1], [0.75,1.75]);
    const scrollContainerRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const Service = useRef(null);
    const location = useLocation();

    const servicedetails ={
      service1:{
        title:"Rides,",
        subtitle:"Tap, Book, Ride – All in a Minute.",
        button:"Get started",
        imgsrx:Service_img_1
      },
      service2:{
        title:"Cab Service",
        subtitle:"Wherever. Whenever. We're already there.",
        button:"Get a Ride",
        imgsrx:Service_img_2
      },
      service3:{
        title:"Auto Service",
        subtitle:"Rickshaw rides, redefined for the smart city.",
        button:"Book Auto",
        imgsrx:Service_img_3
      },
       service7: {
         title: "Acting Driver",
         subtitle: "Your Car, Our Driver – Anytime, Anywhere.",
         button: "Hire Driver",
         imgsrx: Service_img_7,
       },
      service4:{
        title:"Ride & Delivery",
        subtitle:"Not Just a Ride. Not Just a Delivery. It’s Both.",
        button:"Start Trip",
        imgsrx:Service_img_4
      },
      service5:{
        title:"Truck - GoCargo",
        subtitle:"Heavy Loads. Light Speed. GoCargo.",
        button:"Book a Truck",
        imgsrx:Service_img_5
      },
      service6:{
        title:"Ambulance Service",
        subtitle:"Your Health, Our Priority — Fast. Safe. Here.",
        button:"Request a Ride",
        imgsrx:Service_img_6
      },
    }

    const questiondetails = [
     {
        smalltitle:"One Platform, Every Journey",
        title:"Designed to Empower People and Cities",
        description:"Goaira is redefining city travel with smarter, data-driven transport solutions—making mobility safer, faster, and for everyone."
      },
      {
        smalltitle:"Moving with purpose, not pollution.",
        title:"Goaira — Your city, your ride, your way",
        description:"From cabs to future-ready rides, Goaira connects you to cleaner, smarter, and more"
      },
      {
        smalltitle:"Designed for the way you move.",
        title:"Goaira — Smarter rides, simpler life",
        description:"Whether it's a quick trip or a daily commute, Goaira brings you flexible, eco-friendly travel"
      }
    ]

    const sliderVariants = {
      enter: () => ({
        opacity: 0
      }),
      center: {
        opacity: 1
      },
      exit: () => ({
        opacity: 0
      })
    };

    const handleCardClick = (index) => {
        const container = scrollContainerRef.current;
        const scrollAmount = 400;
        container.scrollTo({
          left: index * scrollAmount,
          behavior: "smooth",
        });
    };

    const scrollLeft = () => {
       if (scrollContainerRef.current) {
         scrollContainerRef.current.scrollBy({ left: -375, behavior: 'smooth' });
       }
     };
     
     const scrollRight = () => {
       if (scrollContainerRef.current) {
         scrollContainerRef.current.scrollBy({ left: 375, behavior: 'smooth' });
       }
     };
      
     const paginate = (dir) => {
       setDirection(dir);
       setIndex((prev) => (prev + dir + questiondetails.length) % questiondetails.length);
     };

     useEffect(() => {
       if (menuOpen) {
         document.body.classList.add('no-scroll');
       } else {
         document.body.classList.remove('no-scroll');
       }
       return () => document.body.classList.remove('no-scroll');
     }, [menuOpen]);
         
     useEffect(() => {
        if (location.hash === "#Service") {
          setTimeout(() => {
            Service.current?.scrollIntoView({ behavior: "smooth" });
          }, 100); 
        }
      }, [location]);
        
  return (
   <div className="w-full flex flex-col">
     <Header/>
     {/* Section 1 */}
     <div className="relative boxheight pt-[40%] md:pt-[35%] lg:pt-[15%] flex items-end justify-center">
        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-[#FF0000] rounded-full absolute z-1 top-[55%] left-[40%] lg:left-[38%] translate-x-[-50%] translate-y-[-50%] blur-[120px]  md:blur-[120px]"></div>
        <div className="w-[125px] h-[125px] md:w-[150px] bg-[#FF0000] rounded-full absolute z-1 top-[35%] left-[70%] lg:left-[65%] translate-x-[-50%] translate-y-[-50%] blur-[135px]  md:blur-[120px]"></div>
        <div className="flex flex-col items-center py-10 px-2 gap-1 md:gap-2 justify-center relative">
          <h1 className="font-PlancExtraBold maintitle text-4xl md:text-4xl  lg:text-5xl 2xl:text-6xl text-center">One platform.<br className="block md:hidden" /> Endless possibilities.</h1>
          <h1 className="font-Plancsemibold text-[#5D605E] smalltitl text-lg md:text-xl lg:text-2xl">Connecting Cities, Empowering People.</h1>
          <h1 className="font-Plancmedium text-[#5E6562] subtitle text-[16px] md:text-2xl lg:text-xl text-center">Fast rides, fast deliveries, all in one app.<br /> Goaira gets you there, fast.</h1>
          <div className="w-full flex items-center justify-center py-2 md:py-5">
             <a href="https://play.google.com/store/apps/details?id=com.goaira.customer" target="_blank" className="w-full flex items-center justify-center">
             <button className="w-full max-w-[180px] md:max-w-[220px] py-3 border bg-[#FF0000] font-Plancsemibold text-white text-sm md:text-lg rounded-xl hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out">
               Get Goaira
             </button>
             </a>
          </div>
        </div>
     </div>
     {/* Section 2 */}
     <div className="relative">
       <div className="sticky top-0 h-[350px] md:h-[650px] 2xl:h-[850px] flex items-center overflow-hidden" ref={containter}>
         <motion.div style={{ scale: scale1 }} className="relative w-screen h-full flex items-center justify-center">
           <img src={Home_Banner_section_1} loading="lazy" alt="banner_img" className="w-full h-full object-cover"/>
         </motion.div>
       </div>
     </div>
     {/* Section 3 */}
     <div className="py-10 md:py-18 " ref={Service} id="Service">
       <div className="h-full mr-auto ml-auto">
         <div className="md:pl-[10%] px-5 md:px-0 pb-4">
           <h1 className="text-3xl md:text-4xl font-Plancsemibold py-2">Our Services.</h1>
           <h1 className=" text-[#5E6562] font-PlancRegular text-[15px] md:text-lg md:w-[45%]">Services, products, and features may vary by region. Some options listed may not be available in your local Goaira app.</h1>
         </div>
         <div ref={scrollContainerRef} className="flex flex-row items-center md:pl-[10%] px-5 py-3 pr-[3%] overflow-x-auto gap-5 no-scrollbar scroll-smooth">
           {Object.values(servicedetails).map((items, idx) => (
             <div key={idx} className="h-[550px] min-w-[350px] bg-[#0000009f] md:min-w-[400px] md:h-[550px] relative rounded-2xl overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
                <img src={items.imgsrx}  loading="lazy" className="h-full w-full object-cover" alt={items.imgsrx} />
                <div className={`absolute  left-3 flex flex-col px-5 py-3 gap-2 ${idx % 2 == 1 && idx !==3 && idx !==4  ? "top-7 md:top-10" : "bottom-7 md:bottom-10" } rounded-2xl`}>
                    <h1 className="text-3xl md:text-4xl font-Plancsemibold text-white text-shadow ">{items.title}</h1>
                    <h1 className="text-2xl w-[90%] font-Plancsemibold text-white text-shadow ">{items.subtitle}</h1> 
                       <a href="https://play.google.com/store/apps/details?id=com.goaira.customer" target="_blank">
                    <button className={`text-lg font-Plancsemibold py-2.5 rounded-2xl w-full max-w-[180px] cursor-pointer ${idx == 0 ?'bg-[#ffffff]':'bg-[#FE1527] text-white'}`}>{items.button}</button>
                    </a>
                </div>
             </div>
           ))}
         </div>
         <div className="flex md:pl-[10%] px-5 md:px-0 gap-2.5 py-3">
            <div onClick={scrollLeft} className="p-3 flex items-center justify-center bg-[#E8ECEA] rounded-full cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
               <img src={leftarrow} className="w-[35px] 2xl:w-[40px]" alt="leftarrow" />
            </div>
            <div onClick={scrollRight} className="p-3 flex items-center justify-center bg-[#E8ECEA] rounded-full cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
               <img src={rightarrow}  className="w-[35px] 2xl:w-[40px]" alt="rightarrow" />
            </div>
         </div>
       </div>
     </div>
     {/* Section 4 */}
     <div className="h-[250px] md:h-[350px] lg:h-[400px] 2xl:h-[450px]">
        <img src={Banner_2} alt="banner_2"  loading="lazy" className="w-full h-[100%] object-cover" />
     </div>
     <div className="py-12 md:py-22 bg-black flex items-center justify-center flex-col gap-3 md:gap-5">
         <h1 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-7xl text-center font-Plancsemibold text-white">Empowering Mobility,<br /> Connecting People.</h1>
         <h1 className="font-Plancsemibold px-4 text-[#5D605E] smalltitl text-[14px] md:text-xl lg:text-2xl text-center">Goaira is redefining city travel with smarter, data-driven transport <br className="hidden md:block" />solutions—making mobility safer, faster, and for everyone.</h1>
         <div className="w-full h-[300px] flex flex-col items-center justify-center py-2 md:py-5 cursor-default">
             <div className="w-[85%] lg:w-[75%] xl:w-[70%] 2xl:w-[55%] py-8">
               <AnimatePresence custom={direction} mode="wait">
                 <motion.div key={index}  custom={direction} variants={sliderVariants} initial="enter"  animate="center" exit="exit" transition={{ duration: 0.25 }} className="flex flex-col md:flex-row gap-3 lg:gap-5">
                     <div className=" flex-1 text-white flex flex-col gap-1 md:gap-2">
                         <h1 className="text-[#5E6562] font-Plancsemibold text-[16px] md:text-xl">{questiondetails[index].smalltitle}</h1>
                         <h1 className="text-[#ffffff] font-Plancsemibold  text-xl md:text-2xl w-full md:w-[80%]">{questiondetails[index].title}</h1>
                     </div>
                     <div className="flex-1 flex flex-col gap-2">
                         <h1 className="text-[#ffffff] font-PlancRegular text-[16px] md:text-xl ">{questiondetails[index].description}</h1>
                         {/* <h1 className="text-[#48BD00] font-Plancsemibold text-[16px] underline underline-offset-4 md:text-xl cursor-pointer">learn more</h1> */}
                     </div>
                 </motion.div>
                </AnimatePresence>
             </div>
             <div className="w-[85%] lg:w-[75%] xl:w-[70%] gap-2 flex md:justify-center items-center py-5 md:py-10 2xl:w-[55%]  relative">
                 {
                  Object.values(questiondetails).map((items, idx) => (
                     <div key={idx} className={`w-3 h-3  rounded-full transition-transform duration-300 ${idx == index ? 'bg-[#48BD00]':'bg-[#A9A9A9]' }`}></div>
                   ))
                 }
                 <div className="flex px-5 md:px-0 gap-2.5 py-3 absolute right-0">
                    <div  onClick={() => paginate(-1)} className="p-3 flex items-center justify-center bg-[#E8ECEA] rounded-full cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                       <img  src={leftarrow} className="w-[25px]  2xl:w-[35px]" alt="leftarrow" />
                    </div>
                    <div onClick={() => paginate(1)} className="p-3 flex items-center justify-center bg-[#E8ECEA] rounded-full cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                       <img  src={rightarrow} className="w-[25px] 2xl:w-[35px]" alt="rightarrow" />
                    </div>
                 </div>
             </div>
         </div>
     </div>
     {/* Section 5 */}
     <div className="w-full bg-[#FF0000] flex flex-col items-center pt-12 md:pt-16 ">
        <div className="w-full flex flex-col items-center justify-center px-5 gap-2 md:gap-5">
           <h1 className="font-Plancsemibold text-[#DADADA] smalltitl text-lg md:text-xl lg:text-2xl">About us</h1>
           <h1 className="text-3xl md:text-6xl lg:text-6xl 2xl:text-7xl text-center font-Plancsemibold text-white">Goaira is India’s <br/> All-In-One ride solution.</h1>
           <h1 className="font-PlancRegular text-[#DADADA] subtitle text-[14px] md:text-2xl lg:text-xl text-center w-[95%] lg:w-[65%] xl:w-[50%]">Goaira is building people-first cities with smarter, shared mobility — from rides and cargo to emergency transport and daily essentials.</h1>
           <div className="w-full flex items-center justify-center py-2 md:py-5">
             <button onClick={() => {Navigate('/Aboutus#misson');setTimeout(() => window.scrollTo(0, 0), 100);setopen(false)}} className="w-full max-w-[180px] md:max-w-[220px] py-3 bg-[#000000] font-Plancsemibold text-white text-sm md:text-lg rounded-xl hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out">
               Our Mission
             </button>
           </div>
        </div>
        <div>
          <img src={Banner_3}  loading="lazy" alt="banner_3" className="w-full h-full object-cover" />  
        </div>
     </div>
     {/* Section 6 */}
     <div className="py-18">
     <div className="w-full flex flex-col items-center">
        <div className="px-5 md:px-0 md:w-[80%] lg:w-[75%] 2xl:w-[55%] mr-auto ml-auto">
           <h1 className="text-4xl md:text-3xl font-PlancExtraBold py-2">Affordable Rides, <br /> <span className="text-[#5E6562] md:text-4xl">Always On Time.</span></h1>
           <div className="w--full  flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-16 py-2 md:py-5">
              <div className="flex-1 h-full flex flex-col justify-center gap-1">
                 <div className="py-3">
                    <h1 className="text-[18px] md:text-lg lg:text-2xl font-Plancsemibold text-[#B9BCBF]">Book Your Ride with Goaira</h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-Plancsemibold lg:w-[90%] pt-2">Fast, Reliable, and Affordable Rides</h1>
                 </div>
                 <h1 className="text-lg md:text-[16px] lg:text-xl font-PlancRegular text-[#82898D] lg:w-[90%]">Whether it's a quick trip across town or a long-distance journey, Goaira gets you there safely, comfortably, and on time—every time.</h1>
                <div className="py-4">
                   <a href="https://play.google.com/store/apps/details?id=com.goaira.customer" target="_blank" className="w-full">
                   <button className="w-full max-w-[180px] md:max-w-[220px] py-3 bg-[#000000] font-Plancsemibold text-white text-sm md:text-lg rounded-xl hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out">
                    Book a ride
                   </button></a>
                </div>
              </div>
              <div className="h-full flex">
                 <div className="md:w-[300px] lg:w-[400px]">
                   <img src={Banner_4}  loading="lazy" alt="banner_4" className="w-full h-full" />
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div className="w-full flex flex-col items-center pt-12 ">
        <div className="px-5 md:px-0 md:w-[80%] lg:w-[75%] 2xl:w-[55%] mr-auto ml-auto">
           <h1 className="text-3xl md:text-3xl font-PlancExtraBold py-2 ">Start Earning on the Go <br /> <span className="text-[#5E6562] md:text-4xl">— Join Goaira.</span></h1>
           <div className="w-full gap-5 md:gap-10 pt-6 lg:gap-16 flex flex-col md:flex-row items-center  justify-center py-2 md:py-5 ">
              <div className="h-full flex">
                 <div className="md:w-[300px] lg:w-[400px]">
                   <img src={Banner_4_2}  loading="lazy" alt="banner_4" className="w-full h-full" />
                 </div>
              </div>
              <div className="flex-1 h-full flex flex-col justify-center gap-1">
                 <div className="py-3">
                    <h1 className="text-[18px] md:text-lg lg:text-2xl font-Plancsemibold text-[#B9BCBF]">Earn money as a Goaira drive</h1>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-Plancsemibold lg:w-[90%] pt-2">Start Driving, Start Earning with Goaira</h1>
                 </div>
                 <h1 className="text-lg md:text-[16px] lg:text-xl font-PlancRegular text-[#82898D] lg:w-[90%]">Join a fast-growing platform where rider demand means steady trips and greater income opportunities.</h1>
                <div className="py-4">
                   <button onClick={()=>{Navigate('/Registeration');setTimeout(() => window.scrollTo(0, 0), 100);setopen(false)}} className="w-full max-w-[180px] md:max-w-[220px] py-3 bg-[#000000] font-Plancsemibold text-white text-sm md:text-lg rounded-xl hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out">
                    Register to drive
                   </button>
                </div>
              </div>
              
           </div>
        </div>
     </div>
     </div>
   </div>
  )
}

export default HomePage
