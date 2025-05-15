import React,{useState,useEffect} from 'react'
import Goairalightlogo from '../assets/images/Goaira_light_logo.svg'
import Goairadarklogo from '../assets/images/Goaira_Dark_logo.svg'
import MenuIcon_Dark from '../assets/images/MenuIcon_Dark.svg'
import MenuIcon_Light from '../assets/images/MenuIcon_light.svg'
import { useNavigate,Link } from 'react-router-dom';
import Cancel_icon from '../assets/images/Cancel_icon.svg'
import Cancel_icon_white from '../assets/images/Cancel_icon_white.svg'
import { motion, AnimatePresence } from "framer-motion";
import Driver_icon from '../assets/images/Driver_icon.svg'
import handshake from '../assets/images/handshake.svg'
import arrow from '../assets/images/arrow.svg'
import Social_media_1 from '../assets/images/Social_media_1.svg'    
import Social_media_2 from '../assets/images/Social_media_2.svg'    
import Social_media_3 from '../assets/images/Social_media_3.svg'    
import Social_media_4 from '../assets/images/Social_media_4.svg'    
import Social_media_5 from '../assets/images/Social_media_5.svg'   
import Down_arrow from '../assets/images/Down_arrow.svg';

const Header = (props) => {
   const navigate = useNavigate();
   const [isopen,setopen] =useState(false)
    useEffect(() => {
      if (isopen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
      return () => document.body.classList.remove('no-scroll');
    }, [isopen]);

    const faqs = [
  {
    Title: "Service",
    sublist:[
    {
      subtitle:'Daily Trips',
      link:'/#Service'
    },
    {
      subtitle:'Rental',
      link:'/#Service'
    },
    {
      subtitle:'Outstation',
      link:'/#Service'
    },
    {
      subtitle:'Acting Drivers',
      link:'/#Service'
    }
   ]
  },
  {
    Title: "Earn with Goaira",
      sublist:[
    {
      subtitle:'Become a driver',
      link:'/Registeration'
    },
    {
      subtitle:'How it works',
      link:'/Registeration#Become_a_driver'
    },
    {
      subtitle:'Franchises',
      link:'/Franchise'
    }
   ]
  },
  {
    Title: "Company",
      sublist:[
    {
      subtitle:'About us',
      link:'/Aboutus'
    },
    {
      subtitle:'Careers',
      link:'/Careers'
    }
   ]
  },
  {
    Title: "Support",
     sublist:[
    {
      subtitle:'For Riders',
      link:'/https://wa.me/9962924599'
    },
    {
      subtitle:'For Drivers',
      link:'/https://wa.me/9962924599'
    }
   ]
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  return (
    <div className={`absolute top-0 z-10 w-full ${isopen && 'bg-white'} cursor-default`}>
       <div className={`md:w-[90%] lg:w-[80%] 2xl:w-[70%] flex items-center mr-auto ml-auto px-3`}>
           <div className="flex-1 h-[65px] flex items-center">
              {
               props.type === "true" && !isopen ?
               <Link to="/"><img src={Goairalightlogo} onClick={()=>{setopen(false)}} alt="" className="w-[125px] cursor-pointer"/></Link> :  <Link to="/"><img onClick={()=>{setopen(false)}} src={Goairadarklogo} alt="" className="w-[125px] cursor-pointer"/></Link>
              }
           </div>
           <div className="flex-1 h-full flex items-center justify-end gap-5">
                <div className="items-center flex-row hidden md:flex">
                   <a href="https://wa.me/9962924599" target="_blank">    <button className={`px-8 py-2 rounded-full  text-[15px] font-Plancsemibold hover:scale-102 cursor-pointer ${ props.type === "true"  && !isopen ? 'text-white' :'text-[#434552]'}`}>Support</button> </a>
                   <button className={`px-10 py-2 rounded-full  text-[15px]  font-Plancsemibold hover:scale-102 cursor-pointer ${props.path === 'Registeration'  && !isopen ?'bg-black text-white':'bg-[#2F313F] text-white'}`} onClick={()=>{navigate('/Registeration')}}>Register</button>
                </div>
                <div>
                  {
                      !isopen ? 
                      props.type === "true"  && !isopen ?
                      <img src={MenuIcon_Light} alt="" className="w-[35px] h-[35px] cursor-pointer" onClick={()=>{setopen(!isopen)}}/> :  <img src={MenuIcon_Dark} alt="" className="w-[35px] h-[35px] cursor-pointer"  onClick={()=>{setopen(!isopen)}}/>
                      :
                      props.type === "true"  && !isopen ?
                      <img src={Cancel_icon_white} alt="" className="w-[35px] h-[35px] cursor-pointer" onClick={()=>{setopen(!isopen)}}/> :  <img src={Cancel_icon} alt="" className="w-[35px] h-[35px] cursor-pointer"  onClick={()=>{setopen(!isopen)}}/>
                   } 
                </div>
           </div>
       </div>
       <AnimatePresence>
           {isopen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: '95vh', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className={`flex flex-col overflow-scroll no-scrollbar gap-5 py-12 bg-white`}>
                  <div className={`md:w-[90%] lg:w-[70%] px-6 lg:px-12 2xl:w-[60%] items-center bg-[#EFF1F3] mr-auto ml-auto hidden md:flex  rounded-2xl py-3`}>
                      <div className="p-5 py-10 flex flex-row flex-1">
                         <div className="flex-1">
                             <h1 className="text-lg lg:text-xl font-Plancsemibold pb-2">Service</h1>
                             <div className="flex flex-col gap-5">
                                 <div className="flex flex-col">
                                   <button onClick={() => {navigate('/#Service');setopen(false)}} className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">Daily Trips</button>
                                   <button onClick={() => {navigate('/#Service');setopen(false)}} className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">Rental</button>
                                   <button onClick={() => {navigate('/#Service');setopen(false)}} className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">Outstation</button>
                                   <button onClick={() => {navigate('/#Service');setopen(false)}} className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">Acting Drivers</button>
                                </div>
                                 <div className="flex flex-col ">
                                   <button onClick={() => {navigate('/Registeration#FAQ');setopen(false)}} className="text-[14px] md:text-[16px] text-left font-PlancRegular text-[#5E6562] hover:text-black cursor-pointer">FAQ</button>
                                </div>
                             </div>
                         </div>
                             <div className="flex-1">
                             <h1 className="text-lg lg:text-xl font-Plancsemibold pb-2">Earn with Goaira</h1>
                             <div className="flex flex-col gap-5">
                                <div className="flex flex-col">
                                   <button onClick={() => {navigate('/Registeration');setopen(false)}} className="text-[14px] text-left md:text-[16px] font-PlancRegular text-[#5E6562] hover:text-black cursor-pointer" >Become a driver</button>
                                   <h1 onClick={() => {navigate('/Registeration#Become_a_driver');setopen(false)}} className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] hover:text-black cursor-pointer">How it works</h1>
                                </div>
                                <div>
                                   <button  onClick={() => {navigate('/Franchise');setopen(false)}}  className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">Franchises</button>
                                   {/* <h1 className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] hover:text-black cursor-pointer">About Goaira Franchises</h1> */}
                                </div>
                             </div>
                         </div>
                         <div className=" flex-1 flex flex-col gap-5">
                               <div>
                                   <h1 className="text-lg lg:text-xl font-Plancsemibold pb-2">Company</h1>
                                   <div className="flex flex-col gap-5">
                                      <div className="flex flex-col gap-1">
                                         <button onClick={() => {navigate('/Aboutus');setTimeout(() => window.scrollTo(0, 0), 100);setopen(false)}}  className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">About Us</button>
                                         <button onClick={() => {navigate('/Careers');setTimeout(() => window.scrollTo(0, 0), 100);setopen(false)}} className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] text-left hover:text-black cursor-pointer">Careers</button>
                                      </div>
                                   </div>
                               </div>
                               
                         </div>
                          <div className="">
                            <h1 className="text-lg lg:text-xl font-Plancsemibold pb-2">Support</h1>
                             <div className="flex flex-col gap-5">
                                <div className="flex flex-col  gap-1">
                                   <a href="https://wa.me/9962924599" target="_blank" className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] hover:text-black cursor-pointer">For Riders</a>
                                   <a href="https://wa.me/9962924599" target="_blank" className="text-[14px] md:text-[16px] font-PlancRegular text-[#5E6562] hover:text-black cursor-pointer">For Drivers</a>
                                </div>
                             </div>
                         </div>
                             
                      </div>
                  </div>
                   <div className={`md:w-[90%] lg:w-[70%] 2xl:w-[60%] flex-col lg:flex-row gap-4 justify-start mr-auto ml-auto  rounded-2xl hidden md:flex `}>
                      <div onClick={() => {navigate('/Registeration');setTimeout(() => window.scrollTo(0, 0), 100);setopen(false)}} className="w-full lg:max-w-[450px] flex gap-5 bg-[#EFF1F3] px-8 py-10 cursor-pointer lg:py-5  rounded-2xl hover:scale-101 ">
                         <div className="flex items-start">
                            <img src={Driver_icon} alt="" className=""/>
                         </div>
                         <div className="flex flex-1 flex-col">
                            <div className="flex flex-1">
                               <h1 className="text-lg lg:text-xl font-Plancsemibold flex-1">Become a Driver</h1>
                               <img src={arrow} alt="" className="w-[28px]"/>
                            </div>
                            <h1 className="text-[14px] md:text-[16px] w-[80%] font-PlancRegular text-[#5E6562] cursor-pointer">Earn on Your Terms. Drive When You Want.</h1>
                         </div>
                      </div>
                      <div onClick={() => {navigate('/Franchise');setTimeout(() => window.scrollTo(0, 0), 100);setopen(false)}} className="w-full lg:max-w-[450px] flex gap-5 bg-[#EFF1F3] cursor-pointer px-8 py-10 lg:py-5  rounded-2xl hover:scale-101">
                         <div className="flex items-start">
                            <img src={handshake} alt="" className=""/>
                         </div>
                         <div className="flex flex-1 flex-col">
                            <div className="flex flex-1">
                               <h1 className="text-lg lg:text-xl font-Plancsemibold flex-1">Goaira Business</h1>
                               <img src={arrow} alt="" className="w-[28px]"/>
                            </div>
                            <h1 className="text-[14px] md:text-[16px] w-[80%] font-PlancRegular text-[#5E6562] cursor-pointer">Scale Up with Goaira. Start Your Franchise and Drive Growth.</h1>
                         </div>
                      </div>
                   </div>
                    <div className={`md:w-[90%] lg:w-[70%] 2xl:w-[60%] flex-col cursor-default lg:flex-row py-4 justify-start mr-auto ml-auto  rounded-2xl hidden md:flex`}>
                       <div className="flex-1 flex flex-row gap-5 px-2">
                         <a href="https://www.instagram.com/goaira.services?igshid=NjIwNzIyMDk2Mg%3D%3D" target="_blank"><img src={Social_media_1} alt="social_media" className="w-[24px] h-[24px] cursor-pointer"/></a>
                         <a href="https://www.facebook.com/goaira.services?mibextid=ZbWKwL" target="_blank"><img src={Social_media_2} alt="social_media" className="w-[24px] h-[24px] cursor-pointer"/></a>
                         <a href="https://x.com/goaira_t?t=lVcXah7yIaavgwGtozLyKA&s=09" target="_blank"><img src={Social_media_3} alt="social_media" className="w-[24px] h-[24px] cursor-pointer"/></a>
                         <a href="https://youtube.com/@goaira.services5120?si=Inb " target="_blank"><img src={Social_media_4} alt="social_media" className="w-[24px] h-[24px] cursor-pointer"/></a>
                         <a href="https://www.linkedin.com/company/goaira-technologies/" target="_blank"><img src={Social_media_5} alt="social_media" className="w-[24px] h-[24px] cursor-pointer"/></a>
                       </div>
                       <div className="flex-1 flex flex-col items-end text-[#A1A8AF] gap-2 px-2 py-4">
                           <div className="flex flex-row items-center text-[14px] gap-5 px-2">
                               <h1>Privacy</h1>
                               <h1>Accessibility</h1>
                               <h1>Terms</h1>
                           </div>
                            <div className="flex-1 flex flex-row text-right gap-5 px-2">
                               <h1 className="text-[14px]">All information is subject to specific conditions.<br />© 2025 GOAIRA. All rights reserved</h1>
                           </div>
                       </div>
                    </div>
                    <div className="block md:hidden w-[95%] mr-auto ml-auto space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="px-3 py-2 rounded-2xl md:rounded-4xl transition-transform duration-300 ease-in-out">
                                 <div className="flex items-center cursor-pointer" onClick={() => toggleFAQ(idx)}>
                                   <h1 className="text-xl flex-1 font-Plancsemibold ">{faq.Title}</h1>
                                   <img src={Down_arrow} alt="Toggle Answer" className={`w-6 transform transition-transform duration-300 ${ openIndex === idx ? 'rotate-180' : '' }`}/>
                                 </div>
                                 <div className={`transition-all duration-500 ease-in-out flex flex-col gap-5 px-4 overflow-hidden ${ openIndex === idx ? 'max-h-96 opacity-100 pt-5' : 'max-h-0 opacity-0' }`} >
                                     {
                                        faq.sublist.map((items,id)=>(
                                           <a  onClick={() => {navigate(items.link);setTimeout(() => window.scrollTo(0, 0), 100);}}  className="font-PlancRegular text-[#5E6562] transition-colors text-lg duration-300" > {items.subtitle}</a>
                                        )
                                       )
                                     }
                                </div>
                              </div>
                         ))}
                         <div className="px-3 py-5 pb-32 flex flex-col gap-3 ">
                             <h1 className="text-[#5E6562] subtitle text-[16px]">Your ride, just minutes away!</h1>
                            <button className="w-fit py-3 px-8 rounded-full bg-[#FF0000] font-Plancsemibold text-white text-lg hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out">
                              Download Goaira App
                            </button>
                         </div>
                    </div>
            </motion.div>
          )}
       </AnimatePresence>
    </div>
  )
}

export default Header
