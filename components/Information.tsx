import ChildTitle from "./ChildTitle";
import Title from "./Title";
import {BsNewspaper, BsTwitter} from 'react-icons/bs'

const Information = () => {
  return (
    <div>
      <Title title="INFORMATION" />
      <div className="md:flex gap-x-[40px]">
        <div className=" md:w-1/2 ">
          <ChildTitle icon = {<BsNewspaper size={32}/>} title="News" />
          <div className="flex flex-col">
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
            <div className="py-[15px] flex gap-x-[10px] border-t-[1px] border-[#ccc] px-4 text-main">
              <span className="xl:w-[15%] w-[30%] lg:w-[25%] text-sm font-bold">7.3.2023</span>
              <a target="_blank" href="https://aniplexusa.com/pdf/PR_071323_TW.pdf" 
              className="xl:w-[85%] w-[70%] lg:w-[75%] text-sm text-[#5c57a7] transition-all">
                Disney Twisted-Wonderland Announces English Version Availability in Australia and Singapore!
              </a>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2">
          <ChildTitle icon = {<BsTwitter size={32}/>} title="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Information;