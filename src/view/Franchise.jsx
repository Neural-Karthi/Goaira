import React from 'react'
import Franchisebanner from '../assets/images/Franchise_Banner.webp'
import Header from '../component/Header.jsx'
import DriverOnboardform from '../component/DriverOnboardform.jsx'
import Franchise_icon1 from '../assets/images/Franchise_icon1.svg'
import Franchise_icon2 from '../assets/images/Franchise_icon2.svg'
import Franchise_icon3 from '../assets/images/Franchise_icon3.svg'
import icon_2 from '../assets/images/Registration_Icon_3.svg'
import Question_component from '../component/Question_component.jsx'

const faqs = [
  {
    question: "How do I apply for a GoAira franchise?",
    answer:
      "Visit the GoAira Franchise page and fill out the registration form with your details. Our team will contact you shortly with the next steps.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "The investment amount depends on the city and scale of operations. Once you apply, our team will guide you through the available options and associated costs.",
  },
  {
    question: "Will GoAira provide operational support?",
    answer:
      "Yes, GoAira provides complete support including app access, marketing, training, and backend operations to help you launch and grow your franchise smoothly.",
  },
];


const Franchise = () => {
  return (
    <div className="cursor-default">
      <Header type="true" path="Registeration"/>
      <div className="relative min-h-[120vh] md:min-h-[80vh] lg:min-h-[100vh] flex items-end">
        <div className="h-[85vh] md:h-[65vh] lg:h-[75vh] absolute top-0 -z-10 2xl:h-[80vh] w-full bg-black">
          <img src={Franchisebanner} alt="Franchisebanner" loading="lazy" className="w-full h-full object-cover  opacity-80" />
        </div>
        <div className="w-full flex flex-col md:pt-14 lg:flex-row md:w-[90%] px-5 lg:w-[80%]  mr-auto ml-auto 2xl:w-[70%]">
             <div className="lg:flex-1 gap-2 lg:gap-4 md:px-0 flex pt-24 pb-12 flex-col lg:items-start xs:px-5">
                <h1 className="text-3xl md:text-5xl lg:text-4xl 2xl:text-5xl font-Plancsemibold text-white  text-center lg:text-left  mr-auto ml-auto lg:w-full md:pr-16">Build your business with GoAira</h1>
                <h1 className="text-[16px] md:text-lg 2xl:text-2xl font-PlancRegular text-[#dbdbdb]  text-center lg:text-left md:w-[75%] mr-auto ml-auto  lg:w-full md:pr-16">Partner with us as a franchise owner and grow a profitable venture in your city!</h1>
             </div>
             <DriverOnboardform type="Franchisebanner"/>
        </div>
      </div>
        <div className="py-5 pt-18 px-5 md:w-[90%] lg:w-[80%] 2xl:w-[70%]  border-b border-[#b5bbb8] mr-auto ml-auto">
         <div className="">
             <h1 className="text-2xl md:text-3xl font-Plancsemibold text-black">Why Choose GoAira Franchise?</h1>
             <h1 className="text-[#5E6562] text-[16px] md:text-xl py-2 font-PlancRegular">Start when you're ready, grow as big as you dream <br className="hidden md:block" />— GoAira fits your business vision</h1>
         </div>
         <div className="flex flex-col gap-4 md:gap-8 py-5 md:py-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={Franchise_icon2} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Be Your Own Boss</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Run your own business with GoAira’s trusted brand and proven model — on your terms.</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={Franchise_icon3} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Grow at Your Pace</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Start small or go big — choose how much you want to invest and expand based on your goals.</h1>
               </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={Franchise_icon1} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Smart Business, Backed by Tech</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Leverage GoAira’s technology, marketing, and customer network to scale faster and smarter.</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                <img src={icon_2} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Fast Earnings, Transparent Model</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Enjoy high returns with zero hidden fees. Get clear, timely payouts and full support every step of the way.</h1>
               </div>
            </div>
         </div>
      </div>
      <Question_component questions={faqs}/>
    </div>
  )
}

export default Franchise
