import EventLeftSide from "../Compoments/Events/EventLeftSide";
import EventsRightSide from "../Compoments/Events/EventsRightSide";

const Events = () => {
  return (
    <>
    <div className="grid grid-flow-row-dense md:grid-cols-3 gap-4">
      <div className="p-4">
        <EventLeftSide />
      </div>
      <div className="p-4 md:col-span-2 overflow-y-auto max-h-screen ">
        <EventsRightSide />
      </div>
    </div>
  </>
  
  );
};

export default Events;
