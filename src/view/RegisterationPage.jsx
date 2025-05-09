import React,{useEffect} from 'react'
import Header from '../component/Header.jsx'
import banner3 from '../assets/images/Registeration_Banner_1.svg'
import DriverOnboardform from '../component/DriverOnboardform.jsx'
import icon_1 from '../assets/images/Registration_Icon_1.svg'
import icon_2 from '../assets/images/Registration_Icon_2.svg'
import icon_3 from '../assets/images/Registration_Icon_3.svg'
import icon_4 from '../assets/images/Registration_Icon_4.svg'
import icon_5 from '../assets/images/Registration_Icon_5.svg'
import Question_component from '../component/Question_component.jsx'

const RegisterationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header type="true" path="Registeration"/>
      <div className="relative min-h-[120vh] md:min-h-[80vh] lg:min-h-[100vh] flex items-end">
        <div className="h-[85vh] md:h-[65vh] lg:h-[75vh] absolute top-0 -z-10 2xl:h-[80vh] w-full bg-black">
          <img src={banner3} alt="Banner" loading="lazy" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="w-full flex flex-col md:pt-14 lg:flex-row md:w-[90%] px-5 lg:w-[80%]  mr-auto ml-auto 2xl:w-[70%]">
             <div className="lg:flex-1 gap-2 lg:gap-4 md:px-0 flex py-18 flex-col lg:items-start px-5">
                <h1 className="text-3xl md:text-5xl lg:text-4xl 2xl:text-5xl font-Plancsemibold text-white  text-center lg:text-left  mr-auto ml-auto lg:w-full md:pr-16">Make money driving with Goaira</h1>
                <h1 className="text-[16px] md:text-lg 2xl:text-2xl font-PlancRegular text-[#aeafaf]  text-center lg:text-left md:w-[75%] mr-auto ml-auto  lg:w-full md:pr-16">Join Goaira as a driver, choose your own hours, and earn on your terms!</h1>
             </div>
             <DriverOnboardform />
        </div>
      </div>

      <div className="py-5 pt-10 px-5 md:w-[90%] lg:w-[80%] 2xl:w-[70%]  border-b border-[#b5bbb8] mr-auto ml-auto">
         <div className="">
             <h1 className="text-2xl md:text-3xl font-Plancsemibold text-black">Why choose Goaira?</h1>
             <h1 className="text-[#5E6562] text-[16px] md:text-xl py-2 font-PlancRegular">Drive when you want, earn as much as you need <br className="hidden md:block" />— Goaira fits your lifestyle</h1>
         </div>
         <div className="flex flex-col gap-4 md:gap-8 py-5 md:py-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_1} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Drive your way, earn your way</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Make money on your terms — evenings, weekends, or every day. Drive as little or as much as you want.</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_2} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">A Smarter Way to Earn</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Get ride requests anytime you’re online, from Goaira’s growing network of customers</h1>
               </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_3} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Your Weekly Payout</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Get paid every week with no hidden subscription fees. You only pay commission on your earnings.</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
               </div>
            </div>
         </div>
      </div>
      <div className="py-5 pt-10 px-5 md:w-[90%] lg:w-[80%] 2xl:w-[70%] mr-auto ml-auto">
         <div className="">
             <h1 className="text-2xl md:text-3xl font-Plancsemibold text-black">Get started</h1>
         </div>
         <div className="flex flex-col gap-4 md:gap-8 py-5 md:py-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_4} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">1.Register online</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Let us know where you want to drive and what licence you hold — we’ll take it from there</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_5} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">2.Upload your documents</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Required documents may differ based on where you’re driving with Goaira</h1>
               </div>
            </div>
         </div>
      </div>
      <Question_component />
    </div>
    
  )
}

export default RegisterationPage
