import React from 'react';
import aboutusbg from '../assets/images/AboutusBg.svg';
import about_us_banner from '../assets/images/about_us_banner.svg';
import feature_1 from '../assets/images/About_us_driver_1.svg';
import feature_2 from '../assets/images/About_us_driver_2.svg';
import feature_3 from '../assets/images/About_us_driver_3.svg';
import feature_4 from '../assets/images/About_us_driver_4.svg';
import feature_5 from '../assets/images/about_us_Consumer_1.svg';
import feature_6 from '../assets/images/about_us_Consumer_2.svg';
import feature_7 from '../assets/images/about_us_Consumer_3.svg';
import feature_8 from '../assets/images/about_us_Consumer_4.svg';
import feature_9 from '../assets/images/about_us_Consumer_5.svg';

import Header from '../component/Header.jsx';
import FeatureBlock from '../component/FeatureBlock.jsx'
const Aboutus = () => {
  return (
    <div>
      <Header type="true" path="Registeration" />
      <div className="relative min-h-[90vh] md:min-h-[50vh] lg:min-h-[90vh] flex items-end bg-cover bg-center" style={{ backgroundImage: `url(${aboutusbg})` }}>
         <div className="w-full flex flex-col md:pt-14 lg:flex-row px-5 md:w-[90%] lg:w-[80%] 2xl:w-[70%] mr-auto ml-auto">
              <div className="lg:flex-1 md:px-0 flex pt-24 pb-12  flex-col items-end justify-end xs:px-5">
                 <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-Plancsemibold text-white text-center lg:text-right  mr-auto ml-auto lg:w-full">Who we are</h1>
                 <h1 className="text-2xl font-PlancRegular text-[#aeafaf]  text-center w-full lg:text-right mr-auto ml-auto">The Goaira Story</h1>
              </div>
         </div>
      </div>
       <div className="w-full flex flex-col items-center py-22 ">
        <div className="px-5 md:px-0 md:w-[90%] lg:w-[75%] 2xl:w-[55%] mr-auto ml-auto">
           <h1 className="text-3xl md:text-4xl font-PlancExtraBold">About us</h1>
           <div className="w-full gap-5 md:gap-10  lg:gap-16 flex flex-col md:flex-row py-2 md:py-5 ">
              <div className="flex-1 h-full flex flex-col gap-1">
                 <div className="pb-3">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-Plancsemibold lg:w-[90%] pt-2">GoAira: Moving Faster. Serving Bigger. Living Better.</h1>
                 </div>
                 <h1 className="text-lg md:text-[16px] lg:text-lg font-PlancRegular text-[#82898D] text-justify">
                    GoAira is redefining transportation by offering a one-stop platform for autos, bikes, cabs, ambulances, and trucks. We aim to make mobility smarter and daily life more efficient. More than just a transport service, GoAira empowers drivers and vehicle owners to run and grow their own businesses.<br /><br /> Our team is built on professionals who prioritize punctuality, safety, and excellent customer service. With GoAira, users get reliable rides, and drivers get the tools to succeed on their own terms.
                 </h1>
              </div>
               <div className="h-full flex">
                 <div className="md:w-[300px] lg:w-[400px]">
                   <img src={about_us_banner}  loading="lazy" alt="banner_4" className="w-full h-full" />
                 </div>
              </div>
           </div>
        </div>
      </div>
      <div className="py-12 md:py-22 bg-black flex items-center justify-center flex-col gap-3 md:gap-5">
         <h1 className="text-[26px] md:text-4xl lg:text-5xl 2xl:text-6xl text-center font-Plancsemibold text-white">What We Provide for Drivers</h1>
         <h1 className="font-Plancsemibold px-4 text-[#5D605E] smalltitl text-[14px] md:text-xl lg:text-2xl text-center">The GOAIRA Driver App puts you in control—manage ride requests,<br className="hidden md:block" /> track payments, and run your driving business with ease, all in one place.</h1>
       
         <div className="px-5 md:px-0 md:w-[75%] lg:w-[70%] 2xl:w-[55%] flex flex-col gap-10 mr-auto ml-auto py-10">
            <FeatureBlock 
             image={feature_1}
             title="See Before You Accept"
             description="Know your pickup and drop location upfront before accepting any trip. This gives you full transparency and helps you plan better for time and distance."
             reverse={true}
            />
             <FeatureBlock 
             image={feature_2}
             title="Zero Registration Fees"
             description="Start earning with GOAIRA without any upfront costs. We believe in empowering drivers, not charging them."
             reverse={true}
             swap={true}
            />
             <FeatureBlock 
             image={feature_3}
             title="Fast Vehicle Onboarding"
             description="Get your vehicle registered and ready to go in just 10 minutes. Our quick verification process means you spend less time waiting and more time earning."
             reverse={true}
            />
             <FeatureBlock 
             image={feature_4}
             title="Control Your Rides"
             description="Receive real-time ride requests and enjoy the freedom to accept or decline based on your availability. You’re always in control of your schedule."
             reverse={true}
             swap={true}
            />
         </div>
      </div>
      <div className="py-12 md:py-22 flex items-center justify-center flex-col gap-3 md:gap-5">
         <h1 className="text-[26px] md:text-4xl lg:text-5xl 2xl:text-6xl text-center font-Plancsemibold text-black">What We Provide for Customers</h1>
         <h1 className="font-Plancsemibold px-4 text-[#5D605E] smalltitl text-[14px] md:text-xl lg:text-2xl text-center">The GOAIRA Driver App puts you in control—manage ride requests,<br className="hidden md:block" /> track payments, and run your driving business with ease, all in one place.</h1>
       
         <div className="px-5 md:px-0 md:w-[75%] lg:w-[70%] 2xl:w-[55%] flex flex-col gap-10 mr-auto ml-auto py-10">
            <FeatureBlock 
             image={feature_5}
             title="Transparent Pricing with Zero Surge Charges"
             description="Enjoy clear pricing with no hidden fees or surge charges — what you see is what you pay."
             reverse={true}
             color={true}
            />
             <FeatureBlock 
             image={feature_6}
             title="Wide Range of Vehicle Choices"
             description="Choose from a variety of vehicles, from bikes to trucks, to match your needs at any time."
             reverse={true}
             swap={true}
             color={true}
            />
             <FeatureBlock 
             image={feature_7}
             title="Fewer Cancellations"
             description="Our transparent and efficient operations ensure fewer cancellations, making your ride experience smoother and more reliable."
             reverse={true}
             color={true}
            />
             <FeatureBlock 
             image={feature_8}
             title="Chauffeur and Assistant Booking Options"
             description="Book a professional chauffeur or even an assistant for a more personalized experience with GOAIRA."
             reverse={true}
             swap={true}
             color={true}
            />
             <FeatureBlock 
             image={feature_9}
             title="Seamless Ride-Booking Experience"
             description="From booking to arriving at your destination, enjoy a smooth and efficient ride experience every time."
             reverse={true}
             color={true}
            />
         </div>
      </div>
    </div>
  );
};

export default Aboutus;
