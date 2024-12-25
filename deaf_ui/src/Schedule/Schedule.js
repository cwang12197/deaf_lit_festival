import React from 'react';
import './Schedule.css';

const Schedule = () => {
    const schedule = [
        { time: "9:30", event: "Doors Open! Coffee will be provided" },
        { time: "10:00-11:00", event: "Erin Moriarity" },
        { time: "11:30-12:30", event: "Gina Olivia" },
        { time: "12:30-1:30", event: "LUNCH" },
        { time: "1:30-2:30", event: "Christopher Krentz", image: "/images/christopher-krentz.jpg" },
        { time: "3:00-4:00", event: "John Lee Clark", image: "/images/john-lee-clark.jpg" },
        { time: "4:30-5:30", event: "Carol Padden" },
        { time: "6:00-7:00", event: "Sara Novic?" },
        { time: "7:30-8:00", event: "DINNER" },
        { time: "8:00-10:00", event: "ASL Open Mic Night: Deaf Storytelling" },
    ];

    return (
        <div className="schedule-container">
            <h1 className="schedule-title">Feb 8th, 2025 Schedule</h1>
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th className="schedule-header">Time</th>
                        <th className="schedule-header">Event Scheduled</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item, index) => (
                        <tr key={index}>
                            <td className="schedule-time">{item.time}</td>
                            <td className="schedule-event">
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.event}
                                        className="event-image"
                                    />
                                )}
                                {item.event}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
