import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {Loader,Formsubmitted} from './Loader.jsx'


const FormSchema = z.object({
       Name: z.string().min(1, "Name is required"),
       Phone_number: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\d+$/, "Phone number must contain only digits"),
       Email: z.string().email({ message: "Invalid email address." }),
       City: z.string().min(1, "City is required"),
       Terms: z.literal(true, {
     errorMap: () => ({
       message: "You must agree to the terms and conditions.",
     }),
   }),
  });


const DriverOnboardform = (props) => {
   
   const { register, handleSubmit, formState: { errors },reset } = useForm({ resolver: zodResolver(FormSchema)});
   const [loader,setloader]=useState(false)
   const [SubmitionToggle,SetSubmittiontoggle]=useState(false)

  const onSubmit = async (customer_data) => {
    const payload = {
      access_key: "94e954a2-415e-4902-9785-f3a3e3ca436d",
      name: customer_data.Name,
      email: customer_data.Email,
      phone: customer_data.Phone_number,
      city: customer_data.City,
      Type:props.type=="Franchisebanner"?'Become a Franchise Partner':'Become a driver'
    };
    try {
      setloader(true)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
  
      if (result.success) {
        setloader(false)
        SetSubmittiontoggle(true)
        reset(); 
      } else {
        setloader(false)
      }
    } catch (error) {
      setloader(false)
      console.error("Error:", error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-end relative cursor-default">
      <div className="w-full 2xl:w-[80%] 4xl:w-full bg-white ml-auto  rounded-3xl flex flex-col justify-end px-5 md:px-8 py-7 shadow-[0px_4px_24px_0px_rgba(0,_0,_0,_0.1)]">
          <h1 className="text-xl md:text-2xl font-Plancsemibold">{props.type=="Franchisebanner"?'Become a Franchise Partner':'Become a driver'}</h1>
          <h1 className="text-sm md:text-[16px] font-PlancRegular text-[#aeafaf]">Fill out the form below to get started</h1>
          <div className="flex flex-col pt-5 pb-3 gap-1">
             <div className="flex flex-col gap-2">
                <label className="text-[14px] md:text-[16px] font-Plancsemibold">Name</label>
                <input type="text" {...register("Name")} placeholder="Enter username" className="w-full py-3.5 2xl:py-4 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
                <div className="h-4.5">
                   {       
                      errors.Name && (
                          <p className="font-light text-red-500 text-[13px] -mt-1 pl-2">
                             {errors.Name.message}*
                          </p>
                       )
                   }
                </div>
             </div>
              <div className="flex flex-col gap-2">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">Phone number</label>
                   <input type="text" {...register("Phone_number")} placeholder="Enter phone number" maxlength={10} className="w-full py-3.5 2xl:py-4 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
                    <div className="h-4.5">
                   {       
                      errors.Phone_number && (
                          <p className="font-light text-red-500 text-[13px] -mt-1 pl-2">
                             {errors.Phone_number.message}*
                          </p>
                       )
                   }
                </div>
             </div>
              <div className="flex flex-col gap-2 ">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">Email</label>
                   <input type="text"  {...register("Email")} placeholder="Enter email address" className="w-full py-3.5 2xl:py-4 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
                   <div className="h-4.5">
                   {       
                      errors.Email && (
                          <p className="font-light text-red-500 text-[13px] -mt-1 pl-2">
                             {errors.Email.message}*
                          </p>
                       )
                   }
                </div>
              </div>
              <div className="flex flex-col gap-2">
                   <label className="text-[14px] md:text-[16px] font-Plancsemibold">City</label>
                   <input type="text"  {...register("City")} placeholder={props.type=="Franchisebanner"?'Franchise location city':'City where you will drive'} className="w-full py-3.5 2xl:py-4 text-[14px] md:text-[16px] rounded-xl px-5 bg-[#F5F6F7] "/>
                    <div className="h-4.5">
                   {       
                      errors.City && (
                          <p className="font-light text-red-500 text-[13px] -mt-1 pl-2">
                             {errors.City.message}*
                          </p>
                       )
                   }
                </div>
             </div>
          </div>
          <div className="flex flex-col pb-6">
             <div className="flex items-start justify-start gap-3  px-2 cursor-default">
                 <div className="py-1">
                     <input type="checkbox" {...register("Terms")} className="w-[20px] h-[20px] accent-[#FF0000] cursor-pointer"/> 
                 </div>
                  <p className="text-sm text-[#6D737D]">By registering, you agree to Terms and conditions and Privacy policy of GoAira</p>
             </div>
               {       
                  errors.Terms && (
                      <p className="font-light text-red-500 text-[13px] pl-3 py-2">
                         {errors.Terms.message}*
                      </p>
                   )
               } 
          </div>           
          <div>
              <button type="submit" className="bg-[#FF0000] font-Plancsemibold w-full py-3.5 rounded-xl md:text-lg text-white">{props.type=="Franchisebanner"?'Register as a Franchise Partner':'Register as a driver'}</button>
          </div>

      </div>
   </form>
   {
      loader?<><Loader/></>:<></>
   }
   {
     SubmitionToggle && <Formsubmitted />
   }
</>
  )
}

export default DriverOnboardform
