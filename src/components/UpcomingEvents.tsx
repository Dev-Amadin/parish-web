import { RxCalendar } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import { upcomingEvents } from "../data/data";

function UpcomingEvents() {
  return (
    <div className="border-2 flex flex-col gap-3 border-neutral rounded-xl p-6 w-full h-full max-md:items-center">
      <div className="flex justify-between text-primary ">
        <div className="flex gap-1 md:gap-2 max-md:items-center md:justify-center">
          <RxCalendar className="text-lg md:text-2xl" />
          <h2 className="text-xs md:text-lg font-semibold">UPCOMING EVENTS</h2>
        </div>
        <div className="flex gap-1 md:gap-2 items-center justify-end hover:text-primary-dark cursor-pointer transition-colors duration-300">
          <h5 className="text-sm md:text-lg font-semibold">View All Events</h5>
          <CgArrowLongRight />
        </div>
      </div>

      {upcomingEvents.map((event, index) => (
        <div
          className="flex gap-3 border-b-2 border-neutral p-2 text-sm md:text-lg"
          key={index}
        >
          <div className="flex flex-col items-center justify-center gap-1 p-4 bg-primary text-white rounded">
            <h3 className="text-lg ">{event.month}</h3>
            <h1 className="text-4xl font-bold">{event.day}</h1>
          </div>
          <div>
          <h5 className="font-semibold">{event.title}</h5>
          <p className="text-pretty text-secondary-text w-auto">
            {event.date} <span> &bull; </span> {event.time}
          </p>
          <p className="text-pretty text-secondary-text w-auto">
            {event.venue}
          </p>

          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;
