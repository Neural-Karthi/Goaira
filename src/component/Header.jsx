import React from 'react'
import Goairalightlogo from '../assets/images/Goaira_light_logo.svg'
import Goairadarklogo from '../assets/images/Goaira_Dark_logo.svg'
import MenuIcon_Dark from '../assets/images/MenuIcon_Dark.svg'
<<<<<<< HEAD
import MenuIcon_Light from '../assets/images/MenuIcon_Light.svg'
=======
import MenuIcon_Light from '../assets/images/MenuIcon_light.svg'
>>>>>>> temp-fixes
import { useNavigate,Link } from 'react-router-dom';

const Header = (props) => {
   const navigate = useNavigate();
  return (
    <div className="absolute top-0 z-10 w-full h-[65px] md:h-[75px] ">
       <div className="md:w-[90%] lg:w-[80%] 2xl:w-[70%] h-full flex items-center mr-auto ml-auto px-3">
           <div className="flex-1 h-full flex items-center">
              {
               props.type === "true" ?
               <Link to="/"><img src={Goairalightlogo} alt="" className="w-[125px] cursor-pointer"/></Link> :  <Link to="/"><img src={Goairadarklogo} alt="" className="w-[125px] cursor-pointer"/></Link>
              }
           </div>
           <div className="flex-1 h-full flex items-center justify-end gap-5">
                <div className="items-center flex-row hidden md:flex">
                   <button className={`px-8 py-2 rounded-full  text-[15px] font-Plancsemibold hover:scale-102 cursor-pointer ${ props.type === "true" ? 'text-white' :'text-[#434552]'}`}>Support</button>
                   <button className={`px-10 py-2 rounded-full  text-[15px]  font-Plancsemibold hover:scale-102 cursor-pointer ${props.path === 'Registeration'?'bg-black text-white':'bg-[#2F313F] text-white'}`} onClick={()=>{navigate('/Registeration')}}>Register</button>
                </div>
                <div>
                  {
                      props.type === "true" ?
                      <img src={MenuIcon_Light} alt="" className="w-[35px] h-[35px] cursor-pointer"/> :  <img src={MenuIcon_Dark} alt="" className="w-[35px] h-[35px] cursor-pointer"/>
                   } 
                </div>
           </div>
       </div>
    </div>
  )
}

export default Header
