
import { RxCalendar } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import { massSacramentTimes } from "../data/data";

const MassTimes = () => {
  return (
    <div className="border-2 flex flex-col gap-3 border-neutral rounded-xl p-6 w-full h-full">
      <div className="flex justify-between text-primary ">
        <div className="flex gap-1 md:gap-2 max-md:items-center md:justify-center">
          <RxCalendar className="text-lg md:text-2xl" />
          <h2 className="text-sm md:text-lg font-semibold">MASS TIMES</h2>
        </div>
        <div className="flex gap-1 md:gap-2 items-center justify-end hover:text-primary-dark cursor-pointer transition-colors duration-300">
          <h5 className="text-sm md:text-lg font-semibold">View Full Timetable</h5>
          <CgArrowLongRight />
        </div>
      </div>

      {massSacramentTimes.map((time, index) => (
        <div
          className="flex justify-between gap-2 border-t-2 border-neutral p-2 text-sm md:text-lg"
          key={index}
        >
          <h5 className="font-semibold pt-2">{time.day}</h5>
          <p className="text-pretty text-secondary-text w-auto text-right pt-2">{time.time}</p>
        </div>
      ))}

      <div className="flex gap-1 md:gap-2 items-center text-primary hover:text-primary-dark cursor-pointer transition-colors duration-300">
        <h5 className="text-sm md:text-lg font-semibold">View Full Mass & Sacrament Information</h5>
        <CgArrowLongRight/>
      </div>
    </div>
  );
};

export default MassTimes;
