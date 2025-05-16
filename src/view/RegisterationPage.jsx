import React,{useEffect,useRef} from 'react'
import Header from '../component/Header.jsx'
import banner3 from '../assets/images/Registeration_Banner_1.webp'
import DriverOnboardform from '../component/DriverOnboardform.jsx'
import icon_1 from '../assets/images/Registration_Icon_1.svg'
import icon_2 from '../assets/images/Registration_Icon_2.svg'
import icon_3 from '../assets/images/Registration_Icon_3.svg'
import icon_4 from '../assets/images/Registration_Icon_4.svg'
import icon_5 from '../assets/images/Registration_Icon_5.svg'
import Question_component from '../component/Question_component.jsx'
import Goaira_customer_screen from '../assets/images/Goaira_customer_screen.svg'
import Count_1 from '../assets/images/Count_1.svg'
import Count_2 from '../assets/images/Count_2.svg'
import Count_3 from '../assets/images/Count_3.svg'
import Count_4 from '../assets/images/Count_4.svg'
import { useLocation } from "react-router-dom";


const faqs = [
  {
    question: "How do I accept a ride request?",
    answer:
      "Open the Goaira Driver app. When a ride request appears on your screen, tap the 'Accept' button. The app will then provide navigation to the passenger’s pickup location.",
  },
  {
    question: "How are my earnings calculated?",
    answer:
      "Your earnings are based on the number of completed trips, distance traveled. You can view detailed earnings reports in the Goaira Driver app.",
  },
  {
    question: "What do I do if I encounter an issue during a ride?",
    answer:
      "If you face any issues during a ride, use the in-app support to report the problem or call the Goaira support helpline. For emergencies, use the SOS button available in the app.",
  },
];

const RegisterationPage = () => {
  const location = useLocation();
  const howtobecomedriver = useRef(null);
  const faq = useRef(null);
  useEffect(() => {
  if (location.hash === "#Become_a_driver") {
    setTimeout(() => {
      howtobecomedriver.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  }
  else if (location.hash === "#FAQ") {
    setTimeout(() => {
      faq.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, [location]);


  return (
    <div>
      <Header type="true" path="Registeration"/>
      <div className="relative min-h-[120vh] md:min-h-[80vh] lg:min-h-[100vh] flex items-end">
        <div className="h-[85vh] md:h-[65vh] lg:h-[75vh] absolute top-0 -z-10 2xl:h-[80vh] w-full bg-black">
          <img src={banner3} alt="Banner" loading="lazy" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="w-full flex flex-col md:pt-14 lg:flex-row md:w-[90%] px-5 lg:w-[80%]  mr-auto ml-auto 2xl:w-[70%]">
             <div className="lg:flex-1 gap-2 lg:gap-4 md:px-0 flex pt-24 pb-12 flex-col lg:items-start xs:px-5">
                <h1 className="text-3xl md:text-5xl lg:text-4xl 2xl:text-5xl font-Plancsemibold text-white  text-center lg:text-left  mr-auto ml-auto lg:w-full md:pr-16">Earn money by driving with GoAira</h1>
                <h1 className="text-[16px] md:text-lg 2xl:text-2xl font-PlancRegular text-[#dbdbdb]  text-center lg:text-left md:w-[75%] mr-auto ml-auto  lg:w-full md:pr-16">Join Goaira as a driver, choose your own hours, and earn on your terms!</h1>
             </div>
             <DriverOnboardform />
        </div>
      </div>

      <div className="py-5 pt-18 px-5 md:w-[90%] lg:w-[80%] 2xl:w-[70%]  border-b border-[#b5bbb8] mr-auto ml-auto">
         <div className="">
             <h1 className="text-2xl md:text-3xl font-Plancsemibold text-black">Why choose Goaira?</h1>
             <h1 className="text-[#5E6562] text-[16px] md:text-xl py-2 font-PlancRegular">Drive when you want, earn as much as you need <br className="hidden md:block" />— Goaira fits your lifestyle</h1>
         </div>
         <div className="flex flex-col gap-4 md:gap-8 py-5 md:py-10">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_1} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Drive and Earn as you wish</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Make money on your terms — evenings, weekends, or every day. Drive as little or as much as you want.</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_2} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">A smarter way to Work and Earn</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Get ride requests anytime you’re online, from Goaira’s growing network of customers</h1>
               </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_3} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">Your Instant Payouts </h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Get paid instantly for each trip with no hidden charge. No commission on your earnings</h1>
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
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">1.Register thru GoAira Ally App</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Let us know where you want to drive and what vehicle you hold</h1>
               </div>
               <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                  <img src={icon_5} alt="" className="w-8"/>
                  <h1 className="text-xl md:text-2xl font-Plancsemibold">2.Required documents of vehicle to be uploaded</h1>
                  <h1 className="text-[16px] md:text-lg 2xl:text-xl font-PlancRegular text-[#5E6562]  lg:w-full md:pr-16">Required documents may differ based on where you’re driving with Goaira</h1>
               </div>
            </div>
         </div>
      </div>
      <div className="w-full bg-[#F1F3F6] flex items-center justify-center"  ref={howtobecomedriver} id="howtobecomedriver">
        <div className="py-5 pt-10 px-5 md:px-0 md:w-[90%] lg:w-[80%] 2xl:w-[70%] mr-auto ml-auto">
         <div className="flex flex-col gap-4 md:gap-8 py-5 md:py-10">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
              <div className="flex-1 flex flex-col gap-1.5 md:gap-3">
                   <img src={Goaira_customer_screen}  loading="lazy" alt="" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1 flex flex-col py-5 gap-1.5 md:gap-3">
                    <div className="">
                      <h1 className="text-2xl md:text-3xl font-Plancsemibold text-center md:text-left text-black">Register. Drive. Earn. Repeat.</h1>
                      <h1 className="text-[#5E6562] text-[16px] md:text-xl py-2 font-PlancRegular text-center md:text-left">Reliable and easy to use, providing everything you need to drive, deliver, and earn on your own terms</h1>
                    </div>
                    <div className="flex flex-col gap-5 py-5 px-5 md:px-0">
                        {/* Count - 1 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                           <div className="w-[40px]">
                              <img src={Count_1} alt="" className="w-8"/>
                           </div>
                            <div className="flex-1">
                             <h1 className="text-xl  md:text-2xl font-Plancsemibold text-black">Accept a Ride Request</h1>
                             <h1 className="text-[#5E6562] text-[16px] md:text-lg pt-1 font-PlancRegular 2xl:w-[80%]">The Goaira Driver app will automatically find passengers for you in your area.</h1>
                           </div>
                        </div>
                        {/* Count - 2 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                            <div className="w-[40px]">
                              <img src={Count_2} alt="" className="w-8"/>
                           </div>
                           <div className="flex-1">
                             <h1 className="text-xl  md:text-2xl font-Plancsemibold  text-black">Pick Up Your Passenger</h1>
                             <h1 className="text-[#5E6562] text-[16px] md:text-lg pt-1 font-PlancRegular 2xl:w-[80%]">The app will guide you to your passenger’s location. Once there, pick them up.</h1>
                           </div>
                        </div>
                        {/* Count - 3 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                            <div className="w-[40px]">
                              <img src={Count_3} alt="" className="w-8"/>
                           </div>
                           <div className="flex-1">
                             <h1 className="text-xl  md:text-2xl font-Plancsemibold  text-black">Drive to Their Destination</h1>
                             <h1 className="text-[#5E6562] text-[16px] md:text-lg pt-1 font-PlancRegular 2xl:w-[80%]">Navigate to their destination with the app’s directions, and swipe to end the ride when you reach it.</h1>
                           </div>
                        </div>
                        {/* Count - 4 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                           <div className="w-[40px]">
                              <img src={Count_4} alt="" className="w-8"/>
                           </div>
                           <div className="flex-1">
                             <h1 className="text-xl  md:text-2xl font-Plancsemibold text-black">Repeat to Earn More</h1>
                             <h1 className="text-[#5E6562] text-[16px] md:text-lg pt-1 font-PlancRegular 2xl:w-[80%]">Keep driving and earning or go offline — you’re always in full control of your schedule.</h1>
                           </div>
                        </div>
                    </div>
               </div>
            </div>
         </div>
      </div>
      </div>
      <div ref={faq} id="faq"></div>
      <Question_component questions={faqs} type="Driver"/>
    </div>
    
  )
}

export default RegisterationPage
