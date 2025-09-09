import React, { useState } from 'react';

function getMonthDays(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

const CalendarPage: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState<Date | null>(null);
  const monthDays = getMonthDays(currentYear, currentMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const events = [
    {
      date: '2025-09-08',
      title: 'General Meeting 1',
      location: 'CPE 2.222',
      time: '6:30 PM',
      description: 'Come learn about our plans for the semester and how to get involved, while enjoying Chick Fil A!'
    },
    {
      date: '2025-09-16',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-09-23',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-10-07',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-10-14',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-10-21',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-10-28',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-11-04',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-11-11',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-11-18',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-09-30',
      title: 'AICHE x UAB x OXE x UChEW Study Nights',
      location: 'CPE 2.222',
      time: '7-9 PM',
      description: 'Come study and meet new friends!'
    },
    {
      date: '2025-11-03',
      title: 'General Meeting 2',
      location: 'CPE 2.222',
      time: '6:30 PM',
      description: 'Come recap this semester with us! We have Cabo Bobs!'
    },
  ];

  const eventDates = events.map(e => e.date);

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  function handleEventClick(date: Date) {
    setModalDate(date);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalDate(null);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#BF5700] mb-8">Events Calendar</h2>
      <div className="flex justify-between items-center mb-6">
        <button onClick={prevMonth} className="bg-[#BF5700] text-white px-4 py-2 rounded">Prev</button>
        <span className="text-xl font-semibold">{monthNames[currentMonth]} {currentYear}</span>
        <button onClick={nextMonth} className="bg-[#BF5700] text-white px-4 py-2 rounded">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-2 bg-white rounded-lg shadow p-4">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
          <div key={day} className="text-center font-bold text-gray-600">{day}</div>
        ))}
        {Array(monthDays[0].getDay()).fill(null).map((_, i) => (
          <div key={"empty-"+i}></div>
        ))}
        {monthDays.map(day => {
          const isoDate = day.toISOString().slice(0,10);
          const event = events.find(e => e.date === isoDate);
          return (
            <div key={day.toISOString()} className="border rounded h-20 flex flex-col justify-between p-2 bg-gray-50 relative">
              <span className="font-semibold text-gray-700">{day.getDate()}</span>
              {event && (
                <div
                  className="mt-1 text-xs bg-[#BF5700] text-white rounded px-1 py-0.5 cursor-pointer text-center truncate"
                  onClick={() => handleEventClick(day)}
                  title={event.title}
                >
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {modalOpen && modalDate && (
        (() => {
          const event = events.find(e => e.date === modalDate.toISOString().slice(0,10));
          // Google Calendar link generator
          let gcalUrl = '';
          if (event) {
            const startDate = event.date.replace(/-/g, '');
            const endDate = startDate;
            gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}T${event.time.replace(/:/g, '')}00Z/${endDate}T${event.time.replace(/:/g, '')}00Z&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
          }
          return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50" onClick={closeModal}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative animate-fade-in" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-[#BF5700] text-2xl font-bold focus:outline-none"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF8F0] mb-4 border-2 border-[#BF5700]">
                    <span className="text-[#BF5700] text-3xl font-bold">&#128197;</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#BF5700] mb-2 text-center">{event?.title || 'Event'}</h3>
                  <div className="mb-2 text-gray-700 text-center">
                    <span className="font-semibold text-[#BF5700]">{modalDate.toDateString()}</span>
                  </div>
                  {event && (
                    <>
                      <div className="mb-2 text-gray-700 text-center">
                        <span className="font-semibold">Location:</span> {event.location}
                      </div>
                      <div className="mb-2 text-gray-700 text-center">
                        <span className="font-semibold">Time:</span> {event.time}
                      </div>
                      <div className="mb-4 text-gray-700 text-center">
                        <span className="font-semibold">Description:</span> {event.description}
                      </div>
                      <a
                        href={gcalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 mb-2 bg-[#BF5700] text-white rounded-lg shadow hover:bg-[#A64A00] transition-colors text-center"
                      >
                        Add to Google Calendar
                      </a>
                    </>
                  )}
                  <button className="px-6 py-2 bg-[#BF5700] text-white rounded-lg shadow hover:bg-[#A64A00] transition-colors" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          );
        })()
      )}
    </div>
  );
};

export default CalendarPage;
