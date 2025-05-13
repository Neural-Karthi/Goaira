import React from 'react'

const FeatureBlock = ({ image, title, description, reverse,swap,color }) => {
  return (
     <div className={`w-full flex  ${ reverse ? 'flex-col-reverse':'flex-col'} ${swap ? 'md:flex-row-reverse':'md:flex-row'} items-center gap-5 md:gap-10 lg:gap-16 py-2 md:py-5`}>
       <div className="md:w-[250px] lg:w-[300px]">
          <img src={image} loading="lazy" alt={title} className="w-full h-full" />
       </div>
       <div className="flex-1 flex flex-col gap-1">
         <div className="pb-3">
           <h1 className={`text-2xl md:text-3xl lg:text-4xl font-Plancsemibold ${color?'text-black':'text-white '} pt-2 lg:w-[90%]`}>
             {title}
           </h1>
         </div>
         <p className="text-lg md:text-[16px] lg:text-lg font-PlancRegular text-[#82898D] text-justify">
           {description}
         </p>
       </div>
    </div>
  )
}

export default FeatureBlock

