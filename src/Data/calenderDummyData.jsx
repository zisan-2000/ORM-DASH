// calenderDummyData.jsx
const events = [
  {
    title: "Meeting with Team",
    allDay: false,
    start: new Date(2024, 8, 20, 10, 0), // সেপ্টেম্বর ২০, ২০২৪, সকাল ১০টা
    end: new Date(2024, 8, 20, 12, 0), // সেপ্টেম্বর ২০, ২০২৪, দুপুর ১২টা
  },
  {
    title: "Lunch Break",
    allDay: false,
    start: new Date(2024, 8, 21, 13, 0), // সেপ্টেম্বর ২১, ২০২৪, দুপুর ১টা
    end: new Date(2024, 8, 21, 14, 0), // সেপ্টেম্বর ২১, ২০২৪, দুপুর ২টা
  },
  {
    title: "Client Meeting",
    allDay: false,
    start: new Date(2024, 8, 22, 11, 0), // সেপ্টেম্বর ২২, ২০২৪, সকাল ১১টা
    end: new Date(2024, 8, 22, 12, 30), // সেপ্টেম্বর ২২, ২০২৪, দুপুর ১২টা ৩০ মিনিট
  },
];

export default events;
