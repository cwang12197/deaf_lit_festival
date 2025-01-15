import React from 'react';
import './Schedule.css';

const Schedule = () => {
    const schedule = [
        { time: "9:30", event: "Doors Open with Coffee!" },
        { time: "10:00-10:45", event: "Erin Moriarity" },
        { time: "11:15-12:15", event: "Terry Galloway Performance" },
        { time: "12:30-1:00", event: "Lunch" },
        { time: "1:15-2:00", event: "Christopher Krentz" },
        { time: "2:30-3:30", event: "Kristen Harmon" },
        { time: "4:00-5:00", event: "Leah Hager Cohen" },
        { time: "5:30-6:00", event: "Dinner" },
        { time: "6:00-7:00", event: "Carol Padden" },
        { time: "7:30-9:30", event: "Open Mic Storytelling Event" },
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
