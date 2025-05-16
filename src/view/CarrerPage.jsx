import { useState } from "react";
import CareerPage from '../assets/images/CareerPage.webp';
import SearchIcon from '../assets/images/SearchIcon.svg';

import Header from '../component/Header.jsx';
const CarrerPage = () => {
    const jobdata = [
       {
           Jobtitle:'JAVA DEVELOPER',
           isopen:false,
           Description:'We`re seeking a Java Developer with 3+ years of experience in Java, Spring, Hibernate, and MySQL. The ideal candidate should have a solid understanding of MVC, JDBC, and RESTful web services. You`ll be responsible for developing and maintaining high-performance applications in a collaborative environment. Strong analytical and teamwork skills are a must. We`re looking for someone who can join immediately and contribute to our team`s success.'
       },
           {
           Jobtitle:'DevOps Engineer',
           isopen:false,
           Description:'We`re hiring a DevOps and Cloud Engineer with 3+ years of experience in Kubernetes and GCP. You should have strong hands-on skills with Docker, cloud automation (Java/Python), and infrastructure components like VMs, containers, and networking. Experience with hybrid cloud (AWS/GCP), performance tuning, and cloud migration is a plus. If you`re ready to build scalable, secure cloud solutions, we`d love to hear from you.'
       },
           {
           Jobtitle:'TESTING (MANUAL/AUTOMATION)',
           isopen:false,
           Description:'We are looking for a Software Development Test Engineer (SDTE) with a minimum of 2 years of experience in manual and automation testing. The ideal candidate should be able to follow test plans, execute tests, report and track defects using tools like JIRA, HP ALM, or ADO. Quick to understand complex business domains, you’ll play a key role in supporting product releases. Strong analytical skills, attention to detail, and being a collaborative team player are a must. Immediate joiners are preferred.'
       }
    ]
    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredJobs = jobdata.filter((job) =>
       job.Jobtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
 
  return (
    <div className="cursor-default">
      <Header type="true" path="Registeration" />
        <div className="relative min-h-[90vh] md:min-h-[50vh] lg:min-h-[90vh] flex items-end bg-cover bg-center" style={{ backgroundImage: `url(${CareerPage})` }}>
           <div className="w-full flex flex-col md:pt-14 lg:flex-row px-5 md:w-[90%] lg:w-[80%] 2xl:w-[70%] mr-auto ml-auto">
                <div className="lg:flex-1 md:px-0 flex pt-24 pb-12  flex-col items-end justify-end xs:px-5">
                   <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-Plancsemibold text-white text-center lg:text-right  mr-auto ml-auto lg:w-full">Build Your Future<br/> at GoAira</h1>
                </div>
           </div>
        </div>
        <div className="w-full flex flex-col items-center pt-12 md:pt-22 pb-8 md:pb-16 ">
            <div className="px-5 w-full md:px-0  md:w-[90%] lg:w-[60%] 2xl:w-[55%] mr-auto ml-auto">
                <h1 className="text-3xl md:text-4xl font-PlancExtraBold pb-3 md:pb-6 ">Careers</h1>
                <div className="relative flex-1  w-full">
                    <input type="text"  value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search open roles" className="w-full py-5 px-5 md:px-8 pr-14 font-PlancRegular  focus:outline-none lg:text-xl focus:outline-0: bg-[#F5F6F7] rounded-2xl" />
                    <img src={SearchIcon} alt="Search icon" className="absolute top-1/2 right-8 transform -translate-y-1/2  w-5 md:w-7 md:h-7"/>
                </div>
            </div>
        </div>
         <div className="w-full flex flex-col items-center">
            <div className="px-5 w-full md:px-0 md:w-[90%] lg:w-[60%] 2xl:w-[55%] flex flex-col gap-8 mr-auto ml-auto">
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="text-xl md:text-2xl font-Plancsemibold ">Current Opening</h1>
                    </div>
                    <div className="w-8 bg-black h-8 text-white flex items-center justify-center md:text-xl rounded-full">
                        <p>3</p>
                    </div>
                </div>
                <div className="relative w-full">
                    {filteredJobs.map((job, index) => (
        <div
          key={index}
          className="bg-[#F5F6F7] rounded-2xl flex flex-col justify-center py-4 md:py-7 px-5 md:px-8 mb-6"
        >
          <div className="flex flex-col-reverse md:flex-row gap-2 py-3">
            <h1 className="flex-1 text-2xl font-Plancsemibold">
              {job.Jobtitle}
            </h1>
            <div className="text-white flex text-xl justify-end rounded-full">
              <p
                className={`text-[12px] md:text-lg px-5 py-1 rounded-full ${
                  job.isopen ? "text-[#21A600] bg-white" : "text-[#FF0000] bg-white"
                }`}
              >
                {job.isopen ? "Open" : "Closed"}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-justify text-[14px] text-[#585858] md:text-lg">
              {job.Description}
            </h1>
          </div>
          <div className="pt-5">
            <button
              className="w-full max-w-[180px] md:max-w-[220px] py-3 bg-[#000000] font-Plancsemibold text-white text-[16px] rounded-xl hover:scale-105 cursor-pointer transition-transform duration-200 ease-in-out"
              disabled={!job.isopen}
            >
              Apply for this Role
            </button>
          </div>
        </div>
      ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarrerPage
