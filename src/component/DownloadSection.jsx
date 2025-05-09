import React from 'react'
import Customer_QR from '../assets/images/Driver_QR.svg'
import Driver_QR from '../assets/images/Customer_QR.svg'

const DownloadSection = () => {
    const [isCustomer, setIsCustomer] = React.useState(true)
    const handleToggle = () => {
        setIsCustomer(!isCustomer)
    }
  return (
    <div className="w-full flex flex-col items-center py-14 2xl:py-22 bg-black">
          <div className="px-5 md:px-0 w-full md:w-[80%] lg:w-[55%] 2xl:w-[45%] flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-center mr-auto ml-auto">
              <div className="h-full flex">
                 <div className="w-[200px] md:w-[225px] lg:w-[280px] 2xl:w-[320px]">
                    {
                       isCustomer ? <img src={Customer_QR} alt="banner_4" className="w-full h-full" /> : <img src={Driver_QR} alt="banner_4" className="w-full h-full" />
                    }
                   
                 </div>
              </div>
              <div className="flex-1 w-full h-full flex flex-col text-center justify-center gap-1">
                  <div className="md:py-3 h-full flex items-center justify-center flex-col">
                     <h1 className="text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-Plancsemibold lg:w-[90%] pt-2 text-white">Download our apps</h1>
                     <h1 className="font-PlancRegular subtitle text-center text-lg md:text-xl 2xl:text-2xl lg:w-[90%] pt-2 text-[#DADADA]">Just scan & go — download the <br/> Goaira app now!</h1>
                  </div>
                  <div className="pt-5 md:pt-4 md:py-3 flex items-center justify-center h-full">
                     <h1 className="text-lg md:text-xl lg:text-2xl font-Plancsemibold lg:w-[90%] pt-2 text-white">The fast, affordable way to ride.</h1>
                  </div>
                  <div className="py-3 h-full flex items-center justify-center gap-3">
                      <button className={`w-full max-w-[170px] font-PlancRegular text-lg py-2.5 rounded-2xl ${isCustomer?'bg-white':'text-white border border-white'} cursor-pointer`} onClick={()=>{handleToggle()}}>Ride</button>
                      <button className={`w-full max-w-[170px] font-PlancRegular text-lg py-2.5 rounded-2xl  ${!isCustomer?'bg-white':'text-white border border-white'} cursor-pointer`} onClick={()=>{handleToggle()}}>Driver</button>
                  </div>
               </div>
          </div>
     </div>
  )
}

export default DownloadSection
