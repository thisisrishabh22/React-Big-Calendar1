import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "./App.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => {
  const events = [
    {
      title: "All Day Event very long title",
      start: new Date(2021, 9, 1),
      end: new Date(2021, 9, 3),
    },
    {
      title: "All Day Event very long title",
      start: new Date(2021, 9, 4),
      end: new Date(2021, 9, 5),
    },
  ];
  return (
    <div style={{padding:'2rem 5px'}}>
      <Calendar
        style={{ flex: 1 , minHeight:"90vh"}}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
      />
    </div>
  );
};

export default MyCalendar;
