import formsubmited from '../assets/updation.gif'
import {useNavigate} from 'react-router-dom';

export const Loader = () => {
  return (
    <div className="loading-container">
    <div className="loader">
    </div>
</div>
  );
};


export const Formsubmitted =()=>{
  const navigate = useNavigate();
  return(
     <div className="loading-container px-5">
        <div className="w-full px-10 md:w-auto md:px-22 py-8 rounded-2xl bg-white flex gap-3 flex-col items-center justify-center">
           <img src={formsubmited} alt="" className="w-32"/>
           <div className="text-center">
               <h1 className="text-xl md:text-2xl font-Plancsemibold">Form Submitted</h1>
               <h1 className="text-[16px] md:text-[18px] py-1 font-sans text-[#9e9e9e]">We will get in touch with you soon!</h1>
           </div>
           <div className="w-full py-2">
              <button type="submit" onClick={()=>navigate('/')} className="bg-[#000000] font-Plancsemibold w-full py-3 md:py-2.5 rounded-xl md:text-lg cursor-pointer text-white">Back</button>
          </div>
        </div>
     </div>
  )
}