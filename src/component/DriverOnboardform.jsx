import React from 'react'

const DriverOnboardform = (props) => {
  return (
    <div className="flex-1 flex flex-col justify-end relative cursor-default">
      <div className="w-full 2xl:w-[80%] 4xl:w-full bg-white ml-auto  rounded-3xl flex flex-col justify-end px-5 md:px-8 py-7 shadow-[0px_4px_24px_0px_rgba(0,_0,_0,_0.1)]">
          <h1 className="text-xl md:text-2xl font-Plancsemibold">{props.type=="Franchisebanner"?'Become a Franchise Partner':'Become a driver'}</h1>
          <h1 className="text-sm md:text-[16px] font-PlancRegular text-[#aeafaf]">Fill out the form below to get started</h1>
          <div className="flex flex-col py-5 gap-5">
             <div className="flex flex-col gap-2 md:gap-3">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">Name</label>
                   <input type="text" placeholder="Enter username" className="w-full py-3.5 2xl:py-5 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
             </div>
              <div className="flex flex-col gap-2 md:gap-3">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">Phone number</label>
                   <input type="text" placeholder="Enter phone number" className="w-full py-3.5 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
             </div>
              <div className="flex flex-col gap-2 md:gap-3">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">Email</label>
                   <input type="text" placeholder="Enter email address" className="w-full py-3.5 2xl:py-5 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">City</label>
                   <input type="text" placeholder={props.type=="Franchisebanner"?'Franchise location city':'City where you will drive'} className="w-full py-3.5 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
             </div>
          </div>
          <div className="flex items-start justify-start gap-3 pb-8 cursor-default">
              <div className="py-1">
                  <input type="checkbox" className="w-[20px] h-[20px] accent-[#FF0000] cursor-pointer"/> 
              </div>
              <p className="text-sm text-[#6D737D]">By registering, you agree to Terms and conditions and Privacy policy of GoAira</p>
          </div>
          <div>
              <button className="bg-[#FF0000] font-Plancsemibold w-full py-3.5 rounded-xl md:text-lg text-white">{props.type=="Franchisebanner"?'Register as a Franchise Partner':'Register as a driver'}</button>
          </div>
      </div>
   </div>
  )
}

export default DriverOnboardform
