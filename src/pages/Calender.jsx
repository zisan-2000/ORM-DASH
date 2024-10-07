import moment from "moment";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../Data/calenderDummyData"; // Dummy data import
import Header from "../components/Header/Header";

// Moment.js Localizer
const localizer = momentLocalizer(moment);

function Calender() {
  const [myEvents, setMyEvents] = useState(events);

  // নতুন ইভেন্ট অ্যাড করা
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Please enter a new event name");
    if (title) {
      const newEvent = {
        title,
        start,
        end,
      };
      setMyEvents([...myEvents, newEvent]);
    }
  };

  // ইভেন্ট আপডেট করা
  const handleEventUpdate = (event) => {
    const updatedTitle = window.prompt("Update event name", event.title);
    if (updatedTitle) {
      const updatedEvents = myEvents.map((e) =>
        e.start === event.start && e.end === event.end
          ? { ...e, title: updatedTitle }
          : e,
      );
      setMyEvents(updatedEvents);
    }
  };

  // ইভেন্ট ডিলিট করা
  const handleEventDelete = (event) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${event.title}'?`,
      )
    ) {
      const updatedEvents = myEvents.filter((e) => e !== event);
      setMyEvents(updatedEvents);
    }
  };

  return (
    <>
      <Header />
      <div style={{ height: "100vh", padding: "20px" }}>
        <h1>My Calendar</h1>
        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelect} // নতুন ইভেন্ট অ্যাড করা
          onDoubleClickEvent={handleEventUpdate} // ইভেন্ট ডাবল ক্লিক করলে আপডেট করা
          onSelectEvent={handleEventDelete} // ইভেন্ট ক্লিক করলে ডিলিট করা
          style={{ height: 600 }}
          defaultView="month" // ক্যালেন্ডার মাসিক ভিউতে দেখানো
        />
      </div>
    </>
  );
}

export default Calender;
