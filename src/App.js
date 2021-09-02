import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = () => (
  <div>
    <Calendar
      style={{ flex: 1 }}
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      defaultView="month"
    />
  </div>
);

export default MyCalendar;
