
import MassTimes from "../components/MassTimes";
import UpcomingEvents from "../components/UpcomingEvents";

function MasstimesAndEvents() {
  return (
    <div className="mx-8 my-10 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
        <MassTimes />
        <UpcomingEvents />
      </div>
    </div>
  );
}

export default MasstimesAndEvents;
